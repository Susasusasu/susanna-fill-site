// Inhalte von susanna-fill.com (Stand: 20.11.2026), aufbereitet für die neue Next.js-Seite.
// Reihenfolge = Reihenfolge auf der aktuellen Work-Seite.
// `oldSlug` = alte Squarespace-URL → wird per Redirect auf den neuen `slug` umgeleitet.
// `images` = Bild-URLs auf Squarespace (Reihenfolge wie auf der alten Seite, erstes Bild = Cover).
// `node scripts/download-images.mjs` lädt sie nach public/images/<slug>/, bevor Squarespace gekündigt wird.

export const site = {
  name: "Susanna Fill",
  title: "Art Direction",
  // Intro = Name + "Art Direction" (wie Squarespace-Seitentitel), keine zusätzlichen Texte
  languages: ["Deutsch", "Italienisch", "Englisch"],
  photoCredit: "Akos Major",
  contact: {
    email: "susannafill@hotmail.com", // aus LinkedIn – bitte bestätigen
    linkedin: "https://www.linkedin.com/in/susanna-fill-4b6718176/",
    instagram: "", // optional
  },
};

export const experience = [
  { period: "01/2024 – heute", role: "", company: "Thjnk Zürich", url: "https://www.thjnk.ch" },
  { period: "06/2023 – 10/2023", role: "Freelance", company: "Scholz & Friends Berlin", url: "https://www.s-f.com" },
  { period: "08/2017 – 06/2023", role: "", company: "TBWA Zürich", url: "https://www.tbwa.ch" },
  { period: "07 – 08/2017", role: "Hospitality", company: "Lufthansa Innovation Hub", url: "https://hub.lh.com" },
  { period: "07/2017", role: "Volunteer", company: "Tech Open Air", url: "https://toa.berlin" },
  { period: "06/2017", role: "Freelance", company: "TBWA Zürich", url: "https://www.tbwa.ch" },
  { period: "2015 – 2017", role: "", company: "VCCP Berlin", url: "https://www.vccp.de" },
  { period: "2009 – 2014", role: "", company: "Heimat Berlin", url: "https://www.heimat-berlin.com" },
  { period: "2009", role: "", company: "Demner, Merlicek & Bergmann", url: "https://www.dmb.at" },
  { period: "2008", role: "", company: "Saatchi & Saatchi Stockholm, Ogilvy Stockholm, Frankenstein", url: "" },
  { period: "2007", role: "", company: "DDB Budapest", url: "https://www.ddb.hu" },
  { period: "2006", role: "", company: "Tappeiner", url: "https://www.tappeiner.it" },
  { period: "2004", role: "", company: "Peppermint Grafic", url: "https://www.pepp.it" },
  { period: "2003", role: "", company: "Blauhaus", url: "https://www.blauhaus.it" },
];

export const education = [
  { period: "2017", title: "Inspiration of Design", school: "Hasso-Plattner-Institut" },
  { period: "2006 – 2008", title: "", school: "Miami Ad School" },
  { period: "2006", title: "A-Levels", school: "" },
  { period: "2002 – 2006", title: "", school: "High school for Graphic Design" },
];

export const awards = [
  "Cannes Lions", "D&AD", "One Show", "Facebook Studio Award", "Eurobest", "Clio Awards",
  "London International Awards", "New York Festival", "Art Directors Club", "AME Awards",
  "Epica", "Mobius Awards", "New Media Award", "Die Klappe", "Spotlight", "Das Jahr der Werbung",
];


export const projects = [
  {
    slug: "ochsner-sport-viele-linien", oldSlug: "/vielelinien",
    client: "Ochsner Sport", title: "Viele Linien führen ins Ziel.",
    videos: ["https://vimeo.com/1238699398"],
    // Bild 1 bleibt Kachelbild auf der Startseite, wird auf der Projektseite aber nicht gezeigt
    order: ["vid1", "img2", "img3", "img4", "img5", "img6"],
    images: [
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1792742050865-KFMQELZ3KZWV9N3YMI8F/image-asset.jpeg",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1792597744010-J7AGPZB3YP5AHD1VGJTF/261019+OSP+WInterkampagne+2026+STILL+1920x1080px+DE5.jpg",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1792597624909-XAPW4XZ3S1DD2FYO44WS/261019+OSP+WInterkampagne+2026+STILL+1920x1080px+DE2.jpg",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1792597642117-S8WW4UPG4R034WF5K6AW/261019+OSP+WInterkampagne+2026+STILL+1920x1080px+DE4.jpg",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1792597657293-CTR9SFNV3FLIKDNSBYV8/261019+OSP+WInterkampagne+2026+STILL+1920x1080px+DE.jpg",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1792597683483-KH3EJ33CXE8VO6HOYESV/261019+OSP+WInterkampagne+2026+STILL+1920x1080px+DE3.jpg",
    ],
  },
  {
    slug: "swiss-eishockey-wm", oldSlug: "/swiss-eishockey-wm",
    client: "SWISS", title: "Eishockey WM",
    videos: ["https://vimeo.com/1238704576", "https://vimeo.com/1238708174"],
    // Reihenfolge auf der Projektseite (Bild 1 bleibt nur Kachelbild auf der Startseite)
    order: ["vid2", "img2", "img3", "vid1"],
    images: [
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1792743991180-458R7DYCZS1JE9W424QD/image-asset.png",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1793016048752-J01C455O0Z8CXNZXFPUN/SWI%2BEishockey%2BWM%2B2026%2BPrint%2BAd%2BPerso%CC%88nlich%2B235x320mm2.png",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1792742979719-5A6XOU18S7SU1Q310C05/SWISS+Eishockey+MM+Header+1920x1080px.jpg",
    ],
  },
  {
    slug: "swiss-all-the-way", oldSlug: "/swiss",
    client: "SWISS", title: "Swiss all the way.",
    // Bild 1 bleibt nur Kachelbild auf der Startseite
    order: ["img2", "img3", "img4", "img5", "img6"],
    images: [
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1725722519826-4ZG8HKL3B33PYCK20QNS/Susanna+Fill+Swiss+Cover.jpg",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1725722785770-PAQMCQSSWYJ1WG2UMUKW/Susanna+Fill+Swiss+all+the+way.jpg",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1725721419722-0QNXPRSDQ2I5TM93BMNT/1970x975cm_Swiss_Design.png",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1725721821909-QBBHTTR8MKOO3Y0BI55N/Presse+F12_512.jpg",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1725722268797-IW2A6IDYFKSJVHP6V8LQ/Susanna+Fill+Swiss+Presse.png",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1725721756185-9Y7WQVNTEURBRH0LZ91D/Susanna+Fill+Swiss+Presse+2.jpg",
    ],
  },
  {
    slug: "naturaplan", oldSlug: "/new-page-3",
    client: "NATURAPLAN", title: "Bio liegt in unserer Natur",
    videos: ["https://vimeo.com/794561070"],
    // Bild 1 bleibt nur Kachelbild auf der Startseite
    order: ["vid1", "img2", "img3", "img4", "img5", "img6"],
    images: [
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1675787344080-5GRLIZEO6WWTP4NZRGBL/Bildschirmfoto+2023-02-07+um+17.28.09.png",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1675163362286-GMQR4ZPDKFREPAU6QOEO/230124_CNP_PR-Mitteilung_OOH_2.jpg",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1675163325298-9109D18BPJBATYKARXBS/230124_CNP_PR-Mitteilung_Print_Sammlung1.jpg",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1675163333208-BYR8QCLVPRL4JDO577U2/230124_CNP_PR-Mitteilung_Print_Sammlung2.jpg",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1675163328682-SX3CG2RERDK2B9RYGLLM/230124_CNP_PR-Mitteilung_Print_Sammlung3.jpg",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1675163378872-S123DWTRDJATLF7U7SGP/230124_CNP_PR-Mitteilung_OOH_1.jpg",
    ],
  },
  {
    slug: "coop-supercard", oldSlug: "/coop-supercard-1",
    client: "COOP", title: "Supercard",
    // Bild 1 bleibt nur Kachelbild auf der Startseite
    order: ["vid1", "vid2", "vid3", "vid4"],
    videos: ["https://vimeo.com/796679008", "https://vimeo.com/796678735", "https://vimeo.com/796679074", "https://vimeo.com/796679171"],
    images: [
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1675789330374-902VCHSK31YOUYMJEGR6/Bildschirmfoto+2023-02-07+um+18.00.11.png",
    ],
  },
  {
    slug: "coop-grill", oldSlug: "/coop-grill",
    client: "COOP", title: "Grill",
    // Bild 1 bleibt nur Kachelbild auf der Startseite
    order: ["vid1", "vid2", "vid3"],
    text: [
      "COOP – Mango Jerry",
    ],
    videos: ["https://vimeo.com/772337629", "https://vimeo.com/772337721", "https://vimeo.com/772337547"],
    images: [
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1668758728868-YS1WHEDEA7IXN0KFL5TT/image-asset.jpg",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/71d709ab-ed3c-4120-b5ed-b08714651bc1/Bildschirmfoto+2022-11-18+um+08.50.00.png",
    ],
  },
  {
    slug: "coop-karma", oldSlug: "/coop-karma",
    client: "COOP", title: "Karma",
    videos: ["https://vimeo.com/772349704"],
    images: [
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1668758967910-69CV2ZRYSGYRECPMK7HP/MicrosoftTeams-image+%2847%29.png",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1668689348603-YME5GTP05SV84KZEQVTI/220808_Karma_Coop_Inserat_215x2972.jpg",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1668689339143-Y5JHS0JQKBTQGG5BGECV/Granola_Inserat.jpg",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1668689341162-64RYFBZFY6YQ0W28L4J3/_220808_Karma_Coop_Inserat_215x297.jpg",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1668689341961-NFGNGY3Z4SDULNJST40Z/Falafel_Inserat.jpg",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1668689347288-D5SNWAUBYQRRNZEE65CT/_220810_Karma_Coop_Inserat_215x297.jpg",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1668689968852-PTBSW4XTCH9GS6E96ZIA/Bildschirmfoto+2022-11-17+um+13.59.09.png",
    ],
  },
  {
    slug: "mcdrive-my-favorite-restaurant", oldSlug: "/mcdrive-small-things-make-a-big-difference",
    client: "McDrive", title: "My favorite restaurant",
    cover: "/thumbs/mcdrive-my-favorite-restaurant/cover.jpg", // eigenes Kachelbild (ohne Logo rechts)
    images: [
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1636485227568-RNZ28BKM5FMECFSL89G8/211020_McDo_thefavoriterestaurant_final_EN_RGB_carwash.jpg",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1636485233735-OIK0CDM0GMKL10AQ2S78/211020_McDo_thefavoriterestaurant_final_EN_RGB_construction.jpg",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1636485259842-TI5MBWV44ZGD99YV4O7T/211020_McDo_thefavoriterestaurant_final_EN_RGB_dinner.jpg",
    ],
  },
  {
    slug: "mcdrive-small-moments", oldSlug: "/mcdrive",
    client: "McDrive", title: "Small moments make a big difference",
    // Bild 1 bleibt nur Kachelbild auf der Startseite
    order: ["vid1"],
    videos: ["https://vimeo.com/545879067"],
    images: [
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1635945978979-G5S7IELXTKMMRP2TR55R/Bildschirmfoto+2021-11-03+um+14.16.09.png",
    ],
  },
  {
    slug: "mcdonalds-taste", oldSlug: "/mcdonalds-taste",
    client: "McDonald's", title: "Taste",
    images: [
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1560332400007-MZPDVDOZB3V21FGAJDZC/McDonald%27s_Beans.jpg",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1560331957403-HDTH68QKHXBPZL91EM4W/McDonald%27s_Lentils.jpg",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1560331988169-KNN1VWPQK8LJNZO7EZ8T/McDonald%27s_Mashed-Potatoes.jpg",
    ],
  },
  {
    slug: "bild", oldSlug: "/bild",
    client: "Bild", title: "Das bringt nur BILD",
    order: ["vid1", "img1", "img3", "img4", "img5", "img6", "img7", "img8", "img9", "img10", "img11", "img12", "img13"],
    coverPosition: "top", // Ausschnitt der Kachel: top | center | bottom
    videos: ["https://vimeo.com/516118217"],
    images: [
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1614101931527-K5OLPP56TDAO168MNG4W/bild.jpg",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1614157702108-ZNA4R7PPEUU3TTPFOO3K/image-asset.png",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1442313664173-6TLGJUV43Z9SJ2P4HGKN/_Bild_PrintAZ_laut_594x841_Master.jpg",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1442314549115-3XGLGKHJZHTX6LSFCK7U/_Bild_PrintAZ_groesser_594x841_Master.jpg",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1442313710147-GWJEA875J0H6WMTH2I0F/_Bild_PrintAZ_polarisieren_594x841_Master.jpg",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1442313767456-SY44OFR8HS3VUNGZ0HTH/_Bild_PrintAZ_schneller_594x841_Master.jpg",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1442313812500-66ZFWN6UETJUR8N3HCGH/_Bild_PrintAZ_aufhalten_594x841_Master.jpg",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1442313896548-J1LK5Z8W9KOZST1Q2S4B/_Bild_PrintAZ_ueberall_594x841_Master.jpg",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1544112190088-35T3LH06ILBUCOXBGMK4/-1.jpg",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1544112147250-15H53VQJTU4UEBROGT8F/_Bild_PrintAZ_mut_210x297_Master.jpg",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1544112154937-3KFLKGYXW6KYGFKMRVHR/_Bild_PrintAZ_fehler_210x297_Master.jpg",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1544112164453-G1JJP6UWYNGGDV6RL7J2/160205_citycard_aufdecken.jpg",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1544112171319-MAL8SN5WN68HRELKTFKI/_Bild_PrintAZ_auftragen_210x297_Master.jpg",
    ],
  },
  {
    slug: "hornbach-act-against-ugliness", oldSlug: "/act-against-ugliness-hornbach",
    client: "HORNBACH", title: "Act against ugliness",
    // Bild 1 bleibt nur Kachelbild auf der Startseite
    // Der CZAR-Film darf nur auf czar.nl eingebettet werden → vorerst als Standbild mit Link dorthin
    links: [{ url: "https://czar.nl/project/act-against-ugliness/", poster: 1, label: "Film ansehen auf czar.nl" }],
    order: ["link1", "img2", "img3", "img4"],
    agency: "Heimat Berlin", // www.heimat-berlin.com
    videos: ["https://vimeo.com/104961829"],
    images: [
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1397865063061-UNG4K4QZ7QJ3GCRA1HTE/kampf_gegen_haesslich_die_neue_arbeit_von_heimat_fuer_hornbach_evo_580x326.jpg",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1397866132287-QN04MDURXIM3ECXUMGMT/HOR_MWGH_OoH_CLP_Treppe_Ansicht+9.jpg",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1397650058153-H4PT827W8PDEEFH7UZTE/DSC_0069_1.jpg",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1397845186861-9IB687PUM6F3TRQD4G9V/HOR_MWGH_Pressebild_300dpi_RGB.jpg",
    ],
  },
  {
    slug: "hornbach-hammer", oldSlug: "/the-hornbach-hammer",
    client: "HORNBACH", title: "The HORNBACH HAMMER",
    // Bild 1 bleibt nur Kachelbild auf der Startseite
    order: ["vid1", "img2", "img3", "img4", "img5", "img6", "img7"],
    agency: "Heimat Berlin", // www.heimat-berlin.com
    videos: ["https://vimeo.com/516136604"],
    images: [
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1397957119811-F5VZ9XGVKC02ZUKU2FEG/Bildschirmfoto+2014-04-19+um+02.15.19.png",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1397649844226-1KJN6Z4FA6HZTQ9IY1MM/4735334fab686ffef1938b0779aa63cb.jpg",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1397649878439-9HILDH4AZMGXFWCPYIYP/e8c590c1e5bc5a337317e80b0a8976d7-1.png",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1397649886447-ARAG9EKST9ESF3868KS9/c3049e006e34a4906eb6e6a06bb137ec.jpg",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1397649857205-QXU14BFNFWZEKPXEVOIM/cdda4c562db89c500fc187b476f15cea.jpg",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1397649865095-I2YKAYBND12MA1RT4BPQ/25de4784e1fc7cc76f23ebfdce25e694.jpg",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1397865684254-ZCZ5GREOVJOB1FPJ7PIT/Hammer_catC03_livingclp_ENG_A2_RGB.jpg",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1397930427212-GT1AMOL1ID2139KY171F/hammer.png",
    ],
  },
  {
    slug: "hornbach-what-will-remain", oldSlug: "/and-what-will-remain-of-you",
    client: "HORNBACH", title: "And what will remain of you?",
    agency: "Heimat Berlin", // www.heimat-berlin.com
    images: [
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1396296632609-W55XPT1JS7NPHG45V15Z/020913_HOR_UWBVD_Layout_ProjektionNEU53.jpg",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1396296632876-V0TX16A0X9XK8MB5TQLC/020913_HOR_UWBVD_Layout_ProjektionNEU52.jpg",
    ],
  },
  {
    slug: "hornbach-no-one-feels-it", oldSlug: "/no-one-feels-it-like-you-do-hornbach",
    client: "HORNBACH", title: "No one feels it, like you do",
    agency: "Heimat Berlin", // www.heimat-berlin.com
    text: [
      "\"Symphony\" TVC",
      "Print & OOH.",
      "Special OOH.",
      "Print.",
      "\"Crack\" TVC",
    ],
    videos: ["https://vimeo.com/516121198", "https://vimeo.com/516144701"],
    images: [
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1614159543591-L77K7MLAE4QY9L7S5E30/Bildschirmfoto+2014-04-19+um+02.22.35.png",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1396295433383-VBW17N98GFNJ8NOUV1DR/Artikelanzeige_Wurzel_ENG_35x55.jpg",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1397649547418-NDXVX0M0XKLKYPQBXMGE/tumblr_m8szod88nv1rdy9aro2_1280.jpg",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1396295445226-XOWO4L6GU70Z2TSX2DR7/Artikelanzeige_Wurzel_ENG_35x552.jpg",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1397928026806-76LUUIO785GVOM8QAWAU/KSESWD.png",
    ],
  },
  {
    slug: "stern-relaunch", oldSlug: "/the-new-one-relaunch-from-the-magazine-stern",
    client: "STERN", title: "The things that move us",
    agency: "Heimat Berlin", // www.heimat-berlin.com
    text: [
      "Follow-up teaser.",
      "We screen printed the old magazine to promote the new magazine.",
      "STERN. The things that move us. Sorry Henri Nannen (founder of the magazine), it had to be.",
      "STERN. The things that move us. Do not fear the new STERN.",
      "Curious by nature. STERN. The things that move us.",
      "As long as Germany reads, we'll write. STERN. The things that move us.",
    ],
    images: [
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1397663795315-DEC5JXMRJQ07UGGGWU7H/150414_stern_making_off.jpg",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1396296470810-UGH36UT4WXRVJE88SX3Z/nannen.jpg",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1396296449847-N5KPLY6QLCH1832PLL4L/Angst.jpg",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1397723299593-RF9HUWUERS5NKHALVQ6Z/tumblr_mupusoPlsk1rdy9aro5_1280.jpg",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1397723330010-0DOEVPJN3YFE82HQRACX/tumblr_mupusoPlsk1rdy9aro3_1280.jpg",
    ],
  },
  {
    slug: "hornbach-every-change", oldSlug: "/every-change-needs-a-beginning-hornbach",
    client: "HORNBACH", title: "Every change, needs a beginning",
    agency: "Heimat Berlin", // www.heimat-berlin.com
    text: [
      "PRINT. The goal was to literally “wake up” this dormant potential. Our insight: The first step is the hardest. But once you’ve taken it, the rest usually comes automatically.",
    ],
    images: [
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1396295908992-TXNR0DTLL6Y7PFW1PXQC/HOR_EB_20x30_1.jpg",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1396295909047-8F60S0P9IP0CZJ9I8BV5/HOR_EB_20x30_2.jpg",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1396295914043-9J3GFD70V6KVD8OUYXKT/HOR_EB_20x30_3.jpg",
    ],
  },
  {
    slug: "hornbach-madness", oldSlug: "/madness",
    client: "HORNBACH", title: "How much madness are you made of?",
    agency: "Heimat Berlin", // www.heimat-berlin.com
    text: [
      "\"How much madness are you made of?\" TVC. HORNBACH. Home Improvement Superstores.",
    ],
    videos: ["https://vimeo.com/516111915"],
    images: [
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1635958453087-GVO8JP3N1AON44QT2OBX/Bildschirmfoto+2014-04-19+um+02.40.04.png",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1397723113436-2X7U7AQ9HY297QX80TVN/HOR_Wahnsinn_Print+300x420_Englisch.jpg",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1397723049782-AVXCT5VZEDL9QQRYXTIQ/HOR_Wahnsinn_Print+300x420_Englisch4.jpg",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1397723053368-3ALOFWNA671R9IGSXUKF/HOR_Wahnsinn_Print+300x420_Englisch3.jpg",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1397723080996-RK8GRBVLN706P8Z4OI6A/HOR_Wahnsinn_Print+300x420_Englisch2.jpg",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1397926916171-B38F6QDVOO5NSHCNXTH3/wwsid_2.png",
    ],
  },
  {
    slug: "life", oldSlug: "/new-page-1",
    client: "Life", title: "",
    images: [
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1626689272310-4W9SZSSPLD37ITW93R8Z/IMG_1013.jpeg",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1613938633137-GKK6W2DWY72WY304N6GG/B7F41208-657D-4232-BB51-8425C46EA195.jpg",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/8fcc3f2a-a85e-4042-b4e9-354b18b0c8d9/IMG_1441.jpg",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1613941501075-422WRTQDACEOWLOS1DLO/9AF733E9-B9F1-443F-8F77-83729CB4CF9A.jpg",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1613941528145-NOUI5SK5YXGPQDSYRDZ6/2B1C1CBB-227D-419E-8C63-9E5482B53302.jpg",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1626689466829-ZLN6WBD1AVPDNTDUSRQE/UNADJUSTEDNONRAW_thumb_782f.jpg",
      "https://images.squarespace-cdn.com/content/v1/53386fe9e4b0753fa1640922/1613941599122-ZDIDN5TTMDN15HKIGD28/IMG_6233.jpeg",
    ],
  },
];

// Nicht verwendet (bewusst weggelassen): McCafé (Video privat), Coop Dragon (privat), HORNBACH Kurz&Gut TAPETE/GREIFARM, MAMAFAN, Coop "Für mich und dich Und Peter", McDelivery "Follow your daydreams".
