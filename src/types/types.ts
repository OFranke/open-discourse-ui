export type Session = {
  electoralTerm: string;
  session: string;
  date: string;
};

export type Speech = {
  id: string;
  session: string;
  electoralTerm: string;
  firstName: string;
  lastName: string;
  politicianId: string;
  speechContent: string;
  factionId: string;
  documentUrl: string;
  positionShort: string;
  positionLong: string;
  date: string;
};

export type Faction = {
  id: string;
  fullName: string;
  abbreviation: string;
};

export type Politician = {
  id: string;
  firstName: string;
  lastName: string;
};
