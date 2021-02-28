import { Serie } from "@nivo/line";

interface Filter {
  filterId: string;
  color: string;
}

export interface TopicFilter {
  filterId: string;
  color: string;
  factionIdQuery: string | null;
}

export interface BasePersonFilter {
  topics: string | null;
  politicianIdQuery: string | null;
}
export interface PersonFilter extends Filter, BasePersonFilter {
  type: "person";
  politicianIdQuery: string | null;
}

export interface BaseGroupFilter {
  topics: string | null;
  abbreviation: string | null;
  gender: string | null;
  ageCat: string | null;
  electionPlace: string | null;
  job: string | null;
}
export interface GroupFilter extends Filter, BaseGroupFilter {
  type: "group";
}

export interface TopicData extends Serie {
  data: TopicDataEntry[];
}
export interface TopicDataEntry {
  x: number;
  y: number;
}
