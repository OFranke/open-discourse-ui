import { DataProps } from "../topic-filters/select-input";
export const topicFilterOptions: DataProps[] = [
  {
    key: "0",
    label: "Volkswirtschaft",
  },
  { key: "1", label: "Bürger_Innenrechte" },
  { key: "2", label: "Gesundheitswesen" },
  { key: "3", label: "Landwirtschaft" },
  { key: "4", label: "Arbeit" },
  { key: "5", label: "Bildung" },
  { key: "6", label: "Umwelt" },
  { key: "7", label: "Energie" },
  { key: "8", label: "Transport" },
  { key: "9", label: "Recht & Kriminalität" },
  { key: "10", label: "Sozialpolitik" },
  { key: "11", label: "Wohnungswesen" },
  { key: "12", label: "Binnenhandel" },
  { key: "13", label: "Verteidigungspolitik" },
  { key: "14", label: "Technologie" },
  { key: "15", label: "Außenhandel" },
  { key: "16", label: "Außenpolitik" },
  { key: "17", label: "Öffentliche Verwaltung" },
  { key: "18", label: "Sport" },
  { key: "19", label: "Wiedervereinigung" },
  { key: "20", label: "Volkswirtschaft: Steuern" },
  { key: "21", label: "Volkswirtschaft: Haushalt" },
  { key: "22", label: "Bürger_Innenrechte: Gleichstellung" },
  { key: "23", label: "Bürger_Innenrechte: Datenschutz" },
  { key: "24", label: "Bürger_Innenrechte: Flucht, Asyl & Einbürgerung" },
  { key: "25", label: "Gesundheitswesen: Covid19" },
  { key: "26", label: "Landwirtschaft: Nahrungsmittel" },
  { key: "27", label: "Landwirtschaft: Tierschutz" },
  { key: "28", label: "Arbeit: Arbeitnehmer_Innenrechte" },
  { key: "29", label: "Arbeit: Mindeslohn" },
  { key: "30", label: "Arbeit: Leih- & Zeitarbeit" },
  { key: "31", label: "Bildung: Hochschule & Unversität" },
  { key: "32", label: "Bildung: Schule" },
  { key: "33", label: "Bildung: Berufliche Ausbildung" },
  { key: "34", label: "Bildung: Forschung" },
  { key: "35", label: "Umwelt: Atommüll & Chemische Giftstoffe" },
  { key: "36", label: "Umwelt: Dieselskandal" },
  { key: "37", label: "Umwelt: Klima- & Umweltschutz" },
  { key: "38", label: "Energie: Kernenergie" },
  { key: "39", label: "Energie: Fossile Energie" },
  { key: "40", label: "Energie: Erneuerbare Energie" },
  { key: "41", label: "Transport: Automobil & Straßenverkehr" },
  { key: "42", label: "Transport: Flug" },
  { key: "43", label: "Transport: Bahn" },
  { key: "44", label: "Transport: Schiffahrt" },
  { key: "45", label: "Recht & Kriminalität: Polizei & Grenzschutz" },
  { key: "46", label: "Recht & Kriminalität: Drogenpolitik " },
  { key: "47", label: "Recht & Kriminalität: Familienangelegenheiten " },
  { key: "48", label: "Recht & Kriminalität: Zivil und Strafrecht" },
  { key: "49", label: "Recht & Kriminalität: Sexualstrafrecht " },
  { key: "50", label: "Recht & Kriminalität: Innerdeutscher Terrorismus" },
  { key: "51", label: "Recht & Kriminalität: Wirtschaftskriminalität" },
  { key: "52", label: "Sozialpolitik: Renten" },
  { key: "53", label: "Sozialpolitik: Geringverdiener" },
  { key: "54", label: "Sozialpolitik: Kindergeld & Jugendhilfe" },
  { key: "55", label: "Sozialpolitik: Bürger_Innenversicherung" },
  { key: "56", label: "Binnenhandel: Verbraucherschutz" },
  { key: "57", label: "Binnenhandel: Mittelstand" },
  { key: "58", label: "Verteidigungspolitik: Nachkriegsordnung" },
  { key: "59", label: "Verteidigungspolitik: Rüstungskontrolle " },
  {
    key: "60",
    label:
      "Verteidigungspolitik: Militärische Unterstützung und Waffenlieferung",
  },
  { key: "61", label: "Technologie: Digitalisierung" },
  { key: "62", label: "Technologie: Rundfunk" },
  { key: "63", label: "Außenhandel: Globalisierung & Weltwirtschaft" },
  { key: "64", label: "Außenhandel: Handelsabkommen" },
  { key: "65", label: "Außenpolitik: Entwicklungspolitik" },
  { key: "66", label: "Außenpolitik: Europa" },
  { key: "67", label: "Außenpolitik: Naher Osten" },
  { key: "68", label: "Außenpolitik: Ost-West Konflikt" },
  { key: "69", label: "Öffentliche Verwaltung: Föderalismus" },
  { key: "70", label: "Öffentliche Verwaltung: Post" },
  {
    key: "71",
    label:
      "Öffentliche Verwaltung: Soziale Leistungen für Angestellte im öffentlichen Dienst",
  },
  { key: "72", label: "Öffentliche Verwaltung: Korruption & Lobbyismus" },
];
export const genderFilterOptions: DataProps[] = [
  { key: "0", label: "Männer" },
  { key: "1", label: "Frauen" },
  // { key: "2", label: "unknown" },
];
export const partyFilterOptions: DataProps[] = [
  { key: "0", label: "CDU/CSU" },
  { key: "1", label: "SPD" },
  { key: "2", label: "FDP" },
  { key: "3", label: "Gruene" },
  { key: "4", label: "DIE LINKE" },
  {
    key: "5",
    label: "AfD",
    searchList: [
      "Fetter Mann mit Hundekrawatte",
      "Alter Iltis",
      "Hoden Sack",
      "Stinkende Nille",
    ],
  },
  // { key: "6", label: "other" },
];
export const stateFilterOptions: DataProps[] = [
  { key: "0", label: "Ost" },
  { key: "1", label: "West" },
  // { key: "2", label: "unknown" },
];
export const ageFilterOptions: DataProps[] = [
  { key: "0", label: "Jünger als 50" },
  { key: "1", label: "50 oder Älter" },
  // #{ key: "2", label: "unknown" },
];
export const jobFilterOptions: DataProps[] = [
  { key: "0", label: "Recht" },
  { key: "1", label: "Wirtschaft" },
  { key: "2", label: "Naturwissenschaft" },
  { key: "3", label: "Gesellschaftswissenschaft" },
  { key: "4", label: "Agrar" },
  { key: "5", label: "Journalismus" },
  { key: "6", label: "Handwerk" },
  // { key: "7", label: "other" },
];
