import areasContent from "./areas-content.json";

export const SITE = {
  url: "https://avocatharlau.ro",
  name: "AvocatHârlău.ro",
  firm: "Casa de avocatură Chelaru | Botezatu | Chiperi",
  tagline: "Peste 22 de ani de experiență în servicii juridice",
  phone: "+40 744 484 136",
  phoneHref: "tel:+40744484136",
  whatsapp: "https://wa.me/40744484136",
  email: "contact@avocatharlau.ro",
  // No public address until the Hârlău office is found.
  officeHarlau: "Sediul din Hârlău se deschide în curând. Întâlnirile au loc pe bază de programare.",
  hours: "Luni – Vineri, 09:00 – 17:00",
  ogImage: "/images/og-avocat-harlau.jpg",
  logoPng: "/images/logo/avocat-harlau-chelaru-botezatu-chiperi-logo.png",
  facebook: "https://www.facebook.com/avocatiiasi",
  linkedin: "https://www.linkedin.com/company/bc-laws",
};

export type TeamMember = {
  slug: string;
  name: string;
  phone: string;
  phoneHref: string;
  whatsapp: string;
  excludeAreas?: string[];
};

export const TEAM: TeamMember[] = [
  {
    slug: "avocat-andreea-chelaru",
    name: "Andreea Chelaru",
    phone: "0744 484 136",
    phoneHref: "tel:+40744484136",
    whatsapp: "https://wa.me/40744484136",
    // Practice areas (slugs) this lawyer does not handle; hidden from those pages' contact box.
    excludeAreas: ["penal", "imigrari"],
  },
  {
    slug: "avocat-razvan-botezatu",
    name: "Răzvan Botezatu",
    phone: "0745 272 507",
    phoneHref: "tel:+40745272507",
    whatsapp: "https://wa.me/40745272507",
  },
  {
    slug: "avocat-roxana-chiperi",
    name: "Roxana Chiperi",
    phone: "0740 160 507",
    phoneHref: "tel:+40740160507",
    whatsapp: "https://wa.me/40740160507",
    excludeAreas: ["imigrari"],
  },
];

export const STATS = [
  { value: "450+", label: "Clienți mulțumiți" },
  { value: "99%", label: "Procese câștigate" },
  { value: "750K", label: "Creanțe recuperate" },
  { value: "22+", label: "Ani de experiență" },
];

export const WHY_US = [
  { title: "Servicii juridice", text: "Transformăm cunoștințele noastre juridice în valoare pentru clienți." },
  { title: "Rezultate excelente", text: "Echipa noastră este puternică, dinamică, profesionistă și loială." },
  {
    title: "Oameni pasionați",
    text: "Te poți baza pe membrii echipei, nu dezamăgesc niciodată și întotdeauna găsesc soluția potrivită.",
  },
];

export const LOCALITIES = [
  "Hârlău",
  "Cotnari",
  "Scobinți",
  "Belcești",
  "Sipote",
  "Plugari",
  "Deleni",
  "Erbiceni",
  "Focuri",
];

export type Block =
  | { type: "h2" | "h3" | "p"; text: string }
  | { type: "ul"; items: string[] };

export type Area = {
  slug: string;
  title: string;
  short: string;
  seoTitle: string;
  seoDescription: string;
  blocks: Block[];
  faq: { q: string; a: string }[];
};

type AreaMeta = Omit<Area, "title" | "blocks" | "faq">;

// Order and short descriptions follow the "Domenii de activitate" grid.
const AREA_META: AreaMeta[] = [
  {
    slug: "familie",
    short: "Divorțuri, custodie, partaj și alte aspecte de dreptul familiei.",
    seoTitle: "Avocat divorț și dreptul familiei Hârlău",
    seoDescription:
      "Avocați specializați în dreptul familiei în Hârlău. Asistență juridică pentru divorț, custodie, pensie alimentară și partaj.",
  },
  {
    slug: "imigrari",
    short: "Permise de muncă, vize, rezidență și cetățenie pentru străini.",
    seoTitle: "Avocat imigrări Hârlău",
    seoDescription:
      "Avocați imigrări Hârlău. Asistență juridică pentru permise de muncă, vize, rezidență și cetățenie în România.",
  },
  {
    slug: "civil",
    short: "Cel mai larg domeniu juridic: proprietate, obligații, succesiuni.",
    seoTitle: "Avocat drept civil Hârlău",
    seoDescription:
      "Avocați drept civil Hârlău. Consultanță și reprezentare în probleme de proprietate, contracte, obligații și succesiuni.",
  },
  {
    slug: "penal",
    short: "Apărare în cauze penale, asistență în cursul urmăririi penale.",
    seoTitle: "Avocat drept penal Hârlău",
    seoDescription:
      "Avocați drept penal Hârlău. Apărare în cauze penale, asistență în cursul urmăririi penale și reprezentare în instanță.",
  },
  {
    slug: "drept-bancar-si-fiscal",
    short: "Litigii bancare, credite, contestații fiscale și executări.",
    seoTitle: "Avocat drept bancar și fiscal Hârlău",
    seoDescription:
      "Avocați drept bancar și fiscal Hârlău. Asistență în litigii bancare, contestații fiscale, credite și executări silite bancare.",
  },
  {
    slug: "executari-silite",
    short: "Contestarea sau inițierea procedurilor de executare silită.",
    seoTitle: "Avocat executări silite Hârlău",
    seoDescription:
      "Avocați executări silite Hârlău. Contestarea executării silite, recuperarea creanțelor și asistență în proceduri execuționale.",
  },
  {
    slug: "amenzi-contraventii",
    short: "Contestarea amenzilor contravenționale și a proceselor-verbale.",
    seoTitle: "Avocat amenzi și contravenții Hârlău",
    seoDescription:
      "Avocați amenzi și contravenții Hârlău. Contestarea proceselor-verbale de contravenție, amenzi rutiere și alte sancțiuni.",
  },
  {
    slug: "proprietate-intelectuala",
    short: "Mărci, brevete, drepturi de autor și protecție IP.",
    seoTitle: "Avocat proprietate intelectuală Hârlău",
    seoDescription:
      "Avocați proprietate intelectuală Hârlău. Înregistrare mărci, brevete, drepturi de autor și litigii de proprietate intelectuală.",
  },
  {
    slug: "accidente-auto-daune",
    short: "Despăgubiri pentru accidente rutiere și daune materiale sau morale.",
    seoTitle: "Avocat accidente auto și despăgubiri Hârlău",
    seoDescription:
      "Avocați accidente auto Hârlău. Obținerea despăgubirilor pentru accidente rutiere, daune materiale și morale de la asigurător.",
  },
  {
    slug: "contracte",
    short: "Redactare, negociere și litigii privind contracte de orice natură.",
    seoTitle: "Avocat contracte Hârlău",
    seoDescription:
      "Avocați contracte Hârlău. Redactarea, negocierea și analiza contractelor comerciale și civile, precum și litigii contractuale.",
  },
  {
    slug: "consultanta-negocieri-medieri",
    short: "Consultanță juridică, negociere și mediere pentru soluționarea disputelor.",
    seoTitle: "Consultanță juridică și mediere Hârlău",
    seoDescription:
      "Consultanță juridică, negocieri și mediere în Hârlău. Soluționarea amiabilă a disputelor cu asistența avocaților experimentați.",
  },
  {
    slug: "societati-comerciale",
    short: "Înființare firme, modificări acte constitutive, fuziuni și litigii.",
    seoTitle: "Avocat societăți comerciale Hârlău",
    seoDescription:
      "Avocați societăți comerciale Hârlău. Înființare firme, modificări acte constitutive, fuziuni, divizări și litigii comerciale.",
  },
  {
    slug: "asociatii-si-fundatii",
    short: "Înființare și administrare ONG-uri, asociații și fundații.",
    seoTitle: "Avocat asociații și fundații (ONG) Hârlău",
    seoDescription:
      "Avocați asociații și fundații Hârlău. Înființare ONG-uri și consultanță juridică pentru sectorul non-profit.",
  },
];

const content = areasContent as Record<string, { title: string; blocks: Block[]; faq: { q: string; a: string }[] }>;

export const AREAS: Area[] = AREA_META.map((m) => ({ ...m, ...content[m.slug] }));

// Footer shows the same six areas as the original site.
export const FOOTER_AREAS = ["familie", "imigrari", "civil", "penal", "drept-bancar-si-fiscal", "accidente-auto-daune"].map(
  (slug) => AREAS.find((a) => a.slug === slug)!,
);
