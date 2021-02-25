import { DataProps } from "@bit/limebit.chakra-ui-recipes.select-input";

export const topicFilterOptions: DataProps[] = [
  { key: "0", label: "Wohnungswesen" },
];

export const genderFilterOptions: DataProps[] = [
  { key: "0", label: "Männlich" },
  { key: "1", label: "Weiblich" },
];

export const factionFilterOptions: DataProps[] = [
  { key: "0", label: "FDP" },
  { key: "1", label: "SPD" },
];

export const electionPlaceFilterOptions: DataProps[] = [
  { key: "0", label: "Hessen" },
  { key: "1", label: "Niedersachsen" },
];

export const ageFilterOptions: DataProps[] = [
  { key: "0", label: "< 50" },
  { key: "1", label: "> = 50" },
];

export const jobFilterOptions: DataProps[] = [
  { key: "0", label: "Handwerk" },
  { key: "1", label: "Sonstiges" },
];
