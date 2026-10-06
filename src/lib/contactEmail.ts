import { SITE } from "../data/site";

export type ContactData = { name: string; email: string; phone: string; message: string };

const C = {
  navy: "#0b1628",
  gold: "#c7a46a",
  goldDeep: "#8a6a36",
  cream: "#f7f2ea",
  page: "#efe9df",
  text: "#2a2420",
  muted: "#6b6058",
  line: "#e6ddd0",
};
const FONT = "'Mulish', 'Segoe UI', Helvetica, Arial, sans-serif";

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

/** Romanian numbers ("0744…", "+40 744…") → digits for wa.me / tel: links. */
function phoneDigits(phone: string) {
  const d = phone.replace(/\D/g, "");
  if (d.startsWith("0040")) return d.slice(2);
  if (d.startsWith("0")) return `40${d.slice(1)}`;
  return d;
}

function button(href: string, label: string, primary: boolean) {
  const bg = primary ? C.gold : "#ffffff";
  const border = primary ? C.gold : C.navy;
  const color = primary ? C.navy : C.navy;
  return `<td style="padding:4px 6px;">
    <a href="${esc(href)}" target="_blank" style="display:inline-block;padding:12px 22px;background:${bg};border:2px solid ${border};border-radius:999px;font-family:${FONT};font-size:14px;font-weight:700;color:${color};text-decoration:none;white-space:nowrap;">${label}</a>
  </td>`;
}

function row(label: string, value: string, isLast = false) {
  return `<tr>
    <td style="padding:14px 0;${isLast ? "" : `border-bottom:1px solid ${C.line};`}width:110px;vertical-align:top;font-family:${FONT};font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:${C.goldDeep};">${label}</td>
    <td style="padding:14px 0;${isLast ? "" : `border-bottom:1px solid ${C.line};`}vertical-align:top;font-family:${FONT};font-size:16px;font-weight:600;color:${C.text};">${value}</td>
  </tr>`;
}

export function buildContactEmail(data: ContactData, receivedAt = new Date()) {
  const when = new Intl.DateTimeFormat("ro-RO", {
    timeZone: "Europe/Bucharest",
    dateStyle: "full",
    timeStyle: "short",
  }).format(receivedAt);

  const digits = data.phone ? phoneDigits(data.phone) : "";
  const subjectRe = `Re: Mesajul dumneavoastră către ${SITE.name}`;

  const emailValue = data.email
    ? `<a href="mailto:${esc(data.email)}" style="color:${C.navy};text-decoration:underline;">${esc(data.email)}</a>`
    : `<span style="color:${C.muted};font-weight:400;">nu a fost completat</span>`;
  const phoneValue = data.phone
    ? `<a href="tel:+${digits}" style="color:${C.navy};text-decoration:none;">${esc(data.phone)}</a>`
    : `<span style="color:${C.muted};font-weight:400;">nu a fost completat</span>`;

  const buttons = [
    data.email && button(`mailto:${data.email}?subject=${encodeURIComponent(subjectRe)}`, "✉ Răspunde pe email", true),
    data.phone && button(`tel:+${digits}`, "☎ Sună", false),
    data.phone && button(`https://wa.me/${digits}`, "WhatsApp", false),
  ]
    .filter(Boolean)
    .join("");

  const logo = `${SITE.url}${SITE.logoPng}`;
  const preheader = `${data.name}: ${data.message.slice(0, 90)}`;

  const html = `<!doctype html>
<html lang="ro">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light">
<title>Mesaj nou de pe ${SITE.name}</title>
</head>
<body style="margin:0;padding:0;background:${C.page};">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${esc(preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${C.page};">
  <tr><td align="center" style="padding:32px 12px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 8px 30px rgba(11,22,40,0.08);">

      <tr><td align="center" style="padding:28px 32px 22px;background:#ffffff;">
        <img src="${logo}" width="260" alt="${SITE.name}" style="display:block;width:260px;max-width:80%;height:auto;border:0;">
      </td></tr>

      <tr><td style="background:${C.navy};padding:30px 32px;border-top:4px solid ${C.gold};">
        <p style="margin:0 0 8px;font-family:${FONT};font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:${C.gold};">Formular de contact</p>
        <h1 style="margin:0;font-family:${FONT};font-size:26px;line-height:1.25;font-weight:800;color:#ffffff;">Mesaj nou de la ${esc(data.name)}</h1>
        <p style="margin:10px 0 0;font-family:${FONT};font-size:14px;color:#c9cfd8;">${esc(when)}</p>
      </td></tr>

      <tr><td style="padding:26px 32px 8px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
          ${row("Nume", esc(data.name))}
          ${row("Email", emailValue)}
          ${row("Telefon", phoneValue, true)}
        </table>
      </td></tr>

      <tr><td style="padding:12px 32px 8px;">
        <p style="margin:0 0 10px;font-family:${FONT};font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:${C.goldDeep};">Mesaj</p>
        <div style="background:${C.cream};border-left:4px solid ${C.gold};border-radius:0 10px 10px 0;padding:18px 20px;font-family:${FONT};font-size:16px;line-height:1.6;color:${C.text};">${esc(data.message).replace(/\n/g, "<br>")}</div>
      </td></tr>

      ${
        buttons
          ? `<tr><td align="center" style="padding:22px 26px 30px;">
        <table role="presentation" cellpadding="0" cellspacing="0"><tr>${buttons}</tr></table>
      </td></tr>`
          : ""
      }

      <tr><td style="background:${C.cream};padding:18px 32px;border-top:1px solid ${C.line};">
        <p style="margin:0;font-family:${FONT};font-size:12px;line-height:1.6;color:${C.muted};">
          Trimis prin formularul de pe <a href="${SITE.url}/contact" style="color:${C.goldDeep};font-weight:700;text-decoration:none;">avocatharlau.ro/contact</a>.
          ${data.email ? "Apăsați „Reply” ca să răspundeți direct clientului." : "Clientul nu a lăsat email — contactați-l telefonic."}
        </p>
      </td></tr>

    </table>
  </td></tr>
</table>
</body>
</html>`;

  const text = [
    `Mesaj nou de pe ${SITE.name}`,
    when,
    "",
    `Nume:    ${data.name}`,
    `Email:   ${data.email || "—"}`,
    `Telefon: ${data.phone || "—"}`,
    "",
    "Mesaj:",
    data.message,
    "",
    `— trimis prin ${SITE.url}/contact`,
  ].join("\n");

  return { html, text };
}
