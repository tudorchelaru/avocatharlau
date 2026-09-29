export const SITE = {
  url: "https://avocatharlau.ro",
  name: "Avocat Hârlău – Andreea Chelaru",
  lawyer: "Andreea Chelaru",
  phone: "+40 744 484 136",
  phoneHref: "tel:+40744484136",
  whatsapp: "https://wa.me/40744484136",
  email: "contact@avocatharlau.ro",
  since: 2008,
  officeIasi: "Str. Anastasie Panu 23, Bloc Muntenia, Et. 1, Iași",
  officeHarlau: "În curând — programări prin telefon",
  hours: "Luni – Vineri, 09:00 – 17:00",
  ogImage: "/images/og-avocat-harlau.jpg",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Strada+Anastasie+Panu+23+Iasi",
};

export const yearsOfPractice = () => new Date().getFullYear() - SITE.since;

export const NAV = [
  { href: "/servicii", label: "Servicii" },
  { href: "/despre", label: "Despre" },
  { href: "/zona-deservita", label: "Zona deservită" },
  { href: "/intrebari-frecvente", label: "Întrebări frecvente" },
  { href: "/contact", label: "Contact" },
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

export type Service = {
  slug: string;
  icon: "family" | "scale" | "briefcase" | "doc" | "bank" | "building";
  title: string;
  short: string;
  seoTitle: string;
  seoDescription: string;
  intro: string;
  topics: string[];
  sections: { heading: string; body: string[] }[];
  faq: { q: string; a: string }[];
};

export const SERVICES: Service[] = [
  {
    slug: "dreptul-familiei",
    icon: "family",
    title: "Dreptul familiei",
    short: "Divorț, autoritate părintească, locuința minorului, pensie de întreținere și partaj.",
    seoTitle: "Avocat divorț și dreptul familiei Hârlău",
    seoDescription:
      "Avocat pentru divorț, custodie, pensie de întreținere și partaj în Hârlău. Reprezentare la Judecătoria Hârlău. Consultație online sau la cabinet.",
    intro:
      "Situațiile de familie sunt printre cele mai sensibile cauze juridice. Vă ajut să luați decizii informate, cu grijă pentru copii și cu protejarea drepturilor dumneavoastră.",
    topics: [
      "Divorț prin acord sau din culpă",
      "Exercitarea autorității părintești",
      "Stabilirea locuinței minorului și a programului de legături personale",
      "Pensie de întreținere pentru copii",
      "Partajul bunurilor comune",
      "Suplinirea consimțământului părintelui pentru călătorii în străinătate",
    ],
    sections: [
      {
        heading: "Divorțul: la notar, la starea civilă sau în instanță",
        body: [
          "Când soții sunt de acord, divorțul se poate face la notar sau, dacă nu au copii minori, și la ofițerul de stare civilă. Dacă nu există acord asupra divorțului sau asupra efectelor lui (numele, copiii, locuința), cererea se depune la instanță.",
          "Cererea de divorț se judecă, de regulă, de judecătoria în a cărei circumscripție se află ultima locuință comună a soților. Pentru familiile din Hârlău și din comunele arondate, aceasta este Judecătoria Hârlău.",
        ],
      },
      {
        heading: "Copiii: autoritate părintească, locuință și întreținere",
        body: [
          "Instanța stabilește modul de exercitare a autorității părintești, locuința copilului și programul de legături personale cu părintele la care nu locuiește, urmărind interesul superior al copilului.",
          "Pensia de întreținere se stabilește în funcție de nevoile copilului și de veniturile părintelui. Codul civil prevede plafoane: până la o pătrime din venitul lunar net pentru un copil, o treime pentru doi copii și jumătate pentru trei sau mai mulți copii.",
        ],
      },
      {
        heading: "Partajul bunurilor",
        body: [
          "Bunurile dobândite în timpul căsătoriei se pot împărți odată cu divorțul sau ulterior, printr-o acțiune separată de partaj. Analizez împreună cu dumneavoastră ce bunuri intră în masa de împărțit și ce dovezi sunt necesare.",
        ],
      },
    ],
    faq: [
      {
        q: "Pot divorța fără să merg în instanță?",
        a: "Da, dacă sunteți amândoi de acord asupra divorțului și a tuturor efectelor lui, puteți divorța la notar. Dacă nu aveți copii minori, divorțul prin acord se poate face și la starea civilă.",
      },
      {
        q: "Unde se depune cererea de divorț dacă am locuit în Hârlău?",
        a: "De regulă, la judecătoria în a cărei circumscripție se află ultima locuință comună a soților — pentru Hârlău și comunele arondate, Judecătoria Hârlău.",
      },
    ],
  },
  {
    slug: "drept-civil",
    icon: "scale",
    title: "Drept civil",
    short: "Succesiuni și moșteniri, contracte, răspundere civilă, litigii între vecini.",
    seoTitle: "Avocat drept civil și succesiuni Hârlău",
    seoDescription:
      "Avocat pentru succesiuni, moșteniri, contracte și litigii între vecini în Hârlău și zona Cotnari. Reprezentare la Judecătoria Hârlău și Tribunalul Iași.",
    intro:
      "Dreptul civil acoperă o mare parte din problemele juridice de zi cu zi: moșteniri, terenuri, contracte, datorii sau neînțelegeri cu vecinii. Vă ajut să găsiți soluția cea mai potrivită, amiabil sau în instanță.",
    topics: [
      "Succesiuni și dezbaterea moștenirii",
      "Ieșire din indiviziune",
      "Acțiuni în revendicare și grănițuire",
      "Redactarea și analiza contractelor",
      "Recuperarea creanțelor",
      "Răspundere civilă și despăgubiri",
    ],
    sections: [
      {
        heading: "Succesiuni și moșteniri",
        body: [
          "Moștenirea se poate dezbate la notar, când moștenitorii sunt de acord, sau în instanță, când există neînțelegeri. Dreptul de a accepta moștenirea se exercită, ca regulă, în termen de un an de la data decesului.",
          "În zona Hârlău, multe succesiuni privesc terenuri agricole și case vechi, adesea fără acte complete. Vă ajut să reconstituiți situația juridică a bunurilor și să obțineți actele necesare.",
        ],
      },
      {
        heading: "Litigii privind terenuri și vecinătate",
        body: [
          "Pentru neînțelegeri privind hotarul dintre proprietăți, dreptul de trecere sau folosința unui teren, încercăm întâi o soluție amiabilă. Dacă nu este posibilă, formulăm acțiunea potrivită: grănițuire, revendicare sau constatarea unui drept.",
        ],
      },
      {
        heading: "Contracte și recuperarea datoriilor",
        body: [
          "Analizez sau redactez contracte de vânzare, închiriere, împrumut sau prestări servicii, astfel încât să vă protejeze interesele. Dacă cineva nu își respectă obligațiile, vă reprezint în procedura de recuperare a sumelor datorate.",
        ],
      },
    ],
    faq: [
      {
        q: "În cât timp trebuie să accept o moștenire?",
        a: "Ca regulă, în termen de un an de la data decesului. Termenul poate curge diferit în anumite situații, așa că e bine să cereți o evaluare cât mai devreme.",
      },
    ],
  },
  {
    slug: "dreptul-muncii",
    icon: "briefcase",
    title: "Dreptul muncii",
    short: "Contestarea concedierii, conflicte de muncă, recuperarea drepturilor salariale.",
    seoTitle: "Avocat dreptul muncii Hârlău – contestare concediere",
    seoDescription:
      "Avocat pentru contestarea deciziei de concediere, salarii neplătite și conflicte de muncă în Hârlău. Termenul de contestare este de 45 de zile.",
    intro:
      "Dacă ați fost concediat, sancționat sau nu v-ați primit drepturile salariale, termenele sunt scurte și contează fiecare zi. Vă explic ce opțiuni aveți și vă reprezint în fața instanței.",
    topics: [
      "Contestarea deciziei de concediere",
      "Contestarea sancțiunilor disciplinare",
      "Recuperarea salariilor și a orelor suplimentare neplătite",
      "Conflicte privind contractul individual de muncă",
      "Consultanță pentru angajatori",
    ],
    sections: [
      {
        heading: "Contestarea concedierii",
        body: [
          "Decizia de concediere poate fi contestată în instanță în termen de 45 de zile calendaristice de la comunicare. Dacă instanța constată că decizia este nelegală, poate dispune anularea ei, plata drepturilor salariale cuvenite și, la cerere, reintegrarea în muncă.",
        ],
      },
      {
        heading: "Salarii și alte drepturi neplătite",
        body: [
          "Pretențiile privind salariile, sporurile sau orele suplimentare neplătite se pot solicita, ca regulă, în termen de trei ani. Vă ajut să strângeți dovezile necesare: contract, fluturași, pontaje, corespondență.",
        ],
      },
    ],
    faq: [
      {
        q: "Cât timp am la dispoziție să contest concedierea?",
        a: "45 de zile calendaristice de la data comunicării deciziei de concediere. După acest termen, contestația poate fi respinsă ca tardivă.",
      },
    ],
  },
  {
    slug: "drept-contraventional",
    icon: "doc",
    title: "Drept contravențional",
    short: "Plângeri împotriva proceselor-verbale și contestarea amenzilor.",
    seoTitle: "Avocat contestare amendă Hârlău – plângere contravențională",
    seoDescription:
      "Contestați o amendă sau un proces-verbal în Hârlău? Plângerea contravențională se depune în 15 zile. Avocat cu reprezentare la Judecătoria Hârlău.",
    intro:
      "O amendă aplicată greșit sau un permis suspendat pe nedrept pot fi contestate. Analizez procesul-verbal și vă spun sincer dacă merită să mergeți în instanță.",
    topics: [
      "Plângeri împotriva proceselor-verbale de contravenție",
      "Contestarea amenzilor rutiere",
      "Suspendarea dreptului de a conduce",
      "Amenzi aplicate de poliția locală sau alte instituții",
    ],
    sections: [
      {
        heading: "Termenul de 15 zile",
        body: [
          "Plângerea împotriva procesului-verbal se depune, de regulă, în 15 zile de la înmânarea sau comunicarea lui. Competentă este judecătoria în a cărei circumscripție a fost săvârșită fapta — pentru Hârlău și comunele arondate, Judecătoria Hârlău.",
        ],
      },
      {
        heading: "Ce verificăm",
        body: [
          "Verific dacă procesul-verbal cuprinde toate mențiunile obligatorii, dacă fapta a fost descrisă corect, dacă probele susțin sancțiunea și dacă sancțiunea este proporțională. Uneori, o greșeală de formă sau lipsa probelor poate duce la anularea amenzii.",
        ],
      },
    ],
    faq: [
      {
        q: "Pot plăti jumătate din amendă și totuși să o contest?",
        a: "În principiu, da: plata jumătății din minimul amenzii în termenul legal nu vă împiedică să depuneți plângere împotriva procesului-verbal. Discutăm împreună ce variantă este mai avantajoasă în cazul dumneavoastră.",
      },
    ],
  },
  {
    slug: "drept-comercial-bancar",
    icon: "bank",
    title: "Drept comercial și bancar",
    short: "Litigii comerciale, clauze abuzive, contestații la executare silită.",
    seoTitle: "Avocat drept bancar și executare silită Hârlău",
    seoDescription:
      "Avocat pentru clauze abuzive în contracte de credit, contestații la executare silită și litigii comerciale în Hârlău și județul Iași.",
    intro:
      "Contractele de credit și executările silite pot pune o presiune mare pe o familie sau pe o afacere mică. Vă ajut să înțelegeți ce vi se cere și ce puteți contesta.",
    topics: [
      "Clauze abuzive în contractele de credit",
      "Contestație la executare silită",
      "Litigii între firme și cu partenerii comerciali",
      "Recuperarea creanțelor comerciale",
    ],
    sections: [
      {
        heading: "Clauze abuzive",
        body: [
          "Legea 193/2000 protejează consumatorii împotriva clauzelor abuzive din contractele încheiate cu profesioniști, inclusiv cu băncile. Analizez contractul de credit și vă spun dacă există clauze care pot fi contestate în instanță.",
        ],
      },
      {
        heading: "Contestația la executare",
        body: [
          "Dacă ați primit o somație de la un executor judecătoresc, termenul general pentru contestația la executare este de 15 zile. Verific dacă executarea este legală și dacă suma cerută este corectă.",
        ],
      },
    ],
    faq: [
      {
        q: "Am primit o somație de executare. Ce fac?",
        a: "Nu ignorați somația. Termenul pentru contestația la executare este, de regulă, de 15 zile, așa că e important să cereți o analiză cât mai repede.",
      },
    ],
  },
  {
    slug: "contencios-administrativ",
    icon: "building",
    title: "Contencios administrativ",
    short: "Litigii cu primăria și instituțiile publice, anularea actelor administrative.",
    seoTitle: "Avocat contencios administrativ Hârlău – litigii cu primăria",
    seoDescription:
      "Avocat pentru litigii cu primăria și instituțiile publice din Hârlău: anularea actelor administrative, refuzuri nejustificate, despăgubiri.",
    intro:
      "Când o instituție publică refuză nejustificat o cerere sau emite un act care vă afectează drepturile, legea vă permite să vă adresați instanței de contencios administrativ.",
    topics: [
      "Anularea actelor administrative nelegale",
      "Refuzul nejustificat de a soluționa o cerere",
      "Litigii privind autorizații și certificate",
      "Despăgubiri pentru pagube produse de instituții publice",
    ],
    sections: [
      {
        heading: "Plângerea prealabilă",
        body: [
          "Înainte de a merge în instanță, Legea 554/2004 cere, de regulă, o plângere prealabilă adresată instituției care a emis actul, în termen de 30 de zile de la comunicarea lui. Vă ajut să o redactăm corect, pentru că de ea depinde admisibilitatea acțiunii.",
        ],
      },
      {
        heading: "Acțiunea în instanță",
        body: [
          "Dacă instituția nu răspunde sau răspunde negativ, acțiunea se introduce, de regulă, în termen de șase luni. Vă reprezint în fața instanței de contencios administrativ competente.",
        ],
      },
    ],
    faq: [
      {
        q: "Pot da în judecată primăria?",
        a: "Da. Dacă primăria emite un act nelegal sau refuză nejustificat să vă soluționeze o cerere, puteți formula plângere prealabilă și apoi acțiune în contencios administrativ.",
      },
    ],
  },
];

export const STEPS = [
  {
    title: "Programare",
    text: "Sunați sau scrieți pe WhatsApp. Stabilim împreună ora și forma consultației: online, la cabinetul din Iași sau la Hârlău.",
  },
  {
    title: "Analiza situației",
    text: "Evaluez documentele și faptele, identific riscurile și vă explic clar opțiunile și șansele reale de reușită.",
  },
  {
    title: "Strategie",
    text: "Construim o strategie pornind de la obiectivele dumneavoastră, cu pași concreți și termene previzibile.",
  },
  {
    title: "Reprezentare",
    text: "Vă reprezint în fața Judecătoriei Hârlău și a Tribunalului Iași și vă țin la curent la fiecare etapă.",
  },
];

export const GENERAL_FAQ = [
  {
    q: "Pot avea o consultație fără să mă deplasez la Iași?",
    a: "Da. Consultația poate avea loc online (telefon sau video), iar pentru întâlniri față în față mă pot deplasa la Hârlău, pe bază de programare.",
  },
  {
    q: "Mă puteți reprezenta la Judecătoria Hârlău?",
    a: "Da. Reprezint clienți în fața Judecătoriei Hârlău, în cauze civile, de familie și contravenționale, precum și în fața Tribunalului Iași, în a cărui circumscripție se află judecătoria.",
  },
  {
    q: "Ce documente să pregătesc pentru prima discuție?",
    a: "Orice act legat de situația dumneavoastră: contracte, hotărâri judecătorești, procese-verbale, notificări sau corespondență. Dacă nu știți ce este relevant, aduceți tot și le analizăm împreună.",
  },
  {
    q: "Cât durează un proces?",
    a: "Durata depinde de tipul cauzei, de numărul de termene și de complexitatea probelor. La consultație vă ofer o estimare realistă pentru situația concretă.",
  },
  {
    q: "Ce se întâmplă dacă am primit o amendă pe care o consider nedreaptă?",
    a: "Plângerea contravențională are un termen scurt, de regulă 15 zile de la comunicarea procesului-verbal. Contactați-mă cât mai repede pentru a nu pierde termenul.",
  },
];
