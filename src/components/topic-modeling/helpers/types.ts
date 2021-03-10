import { Serie } from "@nivo/line";

interface UiFilterParams {
  filterId: string;
  color: string;
}

export interface FormFilterParams {
  topics: string | null;
  actor: string | null;
  gender: string | null;
  age: string | null;
  state: string | null;
  job: string | null;
}
export interface FilterParams extends UiFilterParams, FormFilterParams {}

export interface ApiFilterPerson
  extends Required<Pick<FormFilterParams, "topics">> {
  politicians: string;
}
export interface ApiFilterParty
  extends Required<Pick<FormFilterParams, "topics">>,
    Partial<Pick<FormFilterParams, "gender" | "age" | "state" | "job">> {
  party?: string;
}

export interface TopicData extends Serie {
  data: TopicDataEntry[];
}
export interface TopicDataEntry {
  x: number;
  y: number;
}

export interface Annotation {
  title: string;
  description: string;
}
