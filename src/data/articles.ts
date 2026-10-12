import type { TeamMember } from "./site";
import { UZUCAPIUNE_ARTICLE } from "./articles/uzucapiune";
import { CITAT_SUSPECT_ARTICLE } from "./articles/citat-suspect-inculpat";
import { PLECAREA_CU_COPILUL_ARTICLE } from "./articles/plecarea-cu-copilul";
import { MOSTENIREA_IN_FAMILIE_ARTICLE } from "./articles/mostenirea-in-familie";
import { MOSTENIRE_FARA_ACTE_ARTICLE } from "./articles/mostenire-fara-acte";

/** Shared content of a section or subsection. `**text**` renders as bold. */
export interface ArticleBlock {
  paragraphs?: string[];
  table?: { head: string[]; rows: string[][] };
  items?: string[];
  /** Numbered list instead of bullets. */
  ordered?: boolean;
  /** Paragraphs shown after the list. */
  after?: string[];
}
export interface ArticleSection extends ArticleBlock {
  id: string;
  title: string;
  subsections?: (ArticleBlock & { title: string })[];
  note?: string;
  sources?: { label: string; url: string }[];
  links?: { label: string; url: string }[];
}
export interface ArticleImage {
  base: string;
  alt: string;
  width: number;
  height: number;
  widths: number[];
  aspectRatio?: string;
  position?: string;
}
export interface Article {
  slug: string;
  title: string;
  seoTitle?: string;
  category: string;
  summary: string;
  status: "draft" | "published";
  featured?: boolean;
  date?: string;
  updated?: string;
  authorSlug?: TeamMember["slug"];
  /** Hero and listing image; falls back to the shared service hero. */
  image?: ArticleImage;
  tags?: string[];
  sections: ArticleSection[];
  faqs?: { question: string; answer: string }[];
}

/** Demonstration content only; replace each draft with the supplied PDF. */
const DRAFT_SECTIONS: ArticleSection[] = [
  {
    id: "introducere", title: "Introducere",
    paragraphs: ["Articol în pregătire. Această pagină prezintă structura de lectură; textul final va fi adăugat înainte de publicare."],
  },
  {
    id: "repere", title: "Repere importante",
    paragraphs: ["Aici vor fi prezentate explicațiile și informațiile din articol."],
    subsections: [{ title: "Detalii și explicații", paragraphs: ["Secțiunile pot include subtitluri, paragrafe și liste, în funcție de conținutul articolului."] }],
  },
  {
    id: "concluzii", title: "Concluzii",
    paragraphs: ["Această secțiune va cuprinde concluziile articolului."],
  },
];

export const ARTICLES: Article[] = [
  UZUCAPIUNE_ARTICLE,
  CITAT_SUSPECT_ARTICLE,
  PLECAREA_CU_COPILUL_ARTICLE,
  MOSTENIREA_IN_FAMILIE_ARTICLE,
  MOSTENIRE_FARA_ACTE_ARTICLE,
  {
    title: "Divorțul: pași și documente",
    category: "Dreptul familiei",
    slug: "despre-divort",
    status: "draft",
    summary: "Articol în pregătire. Conținutul va fi disponibil în curând.",
    sections: DRAFT_SECTIONS,
  },
  {
    title: "Șederea în România: vize și permise",
    category: "Drept administrativ",
    slug: "vize-si-permise-de-sedere",
    status: "draft",
    summary: "Articol în pregătire. Conținutul va fi disponibil în curând.",
    sections: DRAFT_SECTIONS,
  },
  {
    title: "Negocierea contractului colectiv de muncă",
    category: "Dreptul muncii",
    slug: "negocierea-contractului-colectiv-de-munca",
    status: "draft",
    summary: "Articol în pregătire. Conținutul va fi disponibil în curând.",
    sections: DRAFT_SECTIONS,
  },
  {
    title: "Recalcularea pensiilor: schimbările din 2024",
    category: "Dreptul muncii",
    slug: "recalcularea-pensiei-in-2024",
    status: "draft",
    summary: "Articol în pregătire. Conținutul va fi disponibil în curând.",
    sections: DRAFT_SECTIONS,
  },
  {
    title: "Întreținerea copiilor după separare",
    category: "Dreptul familiei",
    slug: "pensie-de-intretinere-minori",
    status: "draft",
    summary: "Articol în pregătire. Conținutul va fi disponibil în curând.",
    sections: DRAFT_SECTIONS,
  },
  {
    title: "Copiii și echilibrul după divorț",
    category: "Dreptul familiei",
    slug: "exista-copii-fericiti-dupa-divort",
    status: "draft",
    summary: "Articol în pregătire. Conținutul va fi disponibil în curând.",
    sections: DRAFT_SECTIONS,
  },
];

export const articlePath = (article: Pick<Article, "slug">) => `/articole/${article.slug}`;
export const publishedArticles = ARTICLES.filter((article) => article.status === "published");
export const listedArticles = publishedArticles.length ? publishedArticles : ARTICLES;
export const ARTICLE_CATEGORIES = [...new Set(listedArticles.map((article) => article.category))];
export const formatArticleDate = (date: string) => new Intl.DateTimeFormat("ro-RO", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(`${date}T12:00:00Z`));
