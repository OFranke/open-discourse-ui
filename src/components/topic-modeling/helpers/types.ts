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
export interface BaseGroupFilter {
  topics: string | null;
  party: string | null;
  gender: string | null;
  age: string | null;
  state: string | null;
  job: string | null;
}
export interface GroupFilter extends Filter, BaseGroupFilter {}

export interface TopicData extends Serie {
  data: TopicDataEntry[];
}
export interface TopicDataEntry {
  x: number;
  y: number;
}
