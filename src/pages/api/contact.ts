import type { APIRoute } from "astro";
import nodemailer from "nodemailer";
import { SITE } from "../../data/site";

export const prerender = false;

const LIMITS = { name: 120, email: 160, phone: 40, message: 5000 };

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

function reply(request: Request, ok: boolean, error?: string) {
  if (request.headers.get("accept")?.includes("application/json")) {
    return new Response(JSON.stringify({ ok, error }), {
      status: ok ? 200 : 400,
      headers: { "Content-Type": "application/json" },
    });
  }
  // Without JavaScript the browser posts the form directly; send it back to the contact page.
  return new Response(null, { status: 303, headers: { Location: `/contact?status=${ok ? "ok" : "eroare"}` } });
}

export const POST: APIRoute = async ({ request }) => {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return reply(request, false, "Date invalide.");
  }

  const field = (k: keyof typeof LIMITS | "website") => String(form.get(k) ?? "").trim();

  // Honeypot: real visitors never see or fill this field.
  if (field("website")) return reply(request, true);

  const data = { name: field("name"), email: field("email"), phone: field("phone"), message: field("message") };

  if (!data.name || !data.message || (!data.email && !data.phone)) {
    return reply(request, false, "Completați numele, mesajul și un email sau un telefon.");
  }
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return reply(request, false, "Adresa de email nu este validă.");
  }
  for (const [k, max] of Object.entries(LIMITS)) {
    if (data[k as keyof typeof data].length > max) return reply(request, false, "Mesajul este prea lung.");
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM, CONTACT_TO } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error("[contact] SMTP is not configured (SMTP_HOST / SMTP_USER / SMTP_PASS).");
    return reply(request, false, "Serviciul de email nu este configurat.");
  }

  const port = Number(SMTP_PORT || 587);
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const rows = [
    ["Nume", data.name],
    ["Email", data.email || "—"],
    ["Telefon", data.phone || "—"],
  ];

  try {
    await transporter.sendMail({
      from: `"${SITE.name}" <${SMTP_FROM || SITE.email}>`,
      to: CONTACT_TO || SITE.email,
      replyTo: data.email || undefined,
      subject: `Mesaj nou de pe ${SITE.name} – ${data.name}`,
      text: `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\nMesaj:\n${data.message}`,
      html: `<table>${rows
        .map(([k, v]) => `<tr><td><strong>${k}</strong></td><td>${escapeHtml(v)}</td></tr>`)
        .join("")}</table><p><strong>Mesaj:</strong></p><p>${escapeHtml(data.message).replace(/\n/g, "<br>")}</p>`,
    });
  } catch (err) {
    console.error("[contact] sendMail failed:", err);
    return reply(request, false, "Mesajul nu a putut fi trimis.");
  }

  return reply(request, true);
};
