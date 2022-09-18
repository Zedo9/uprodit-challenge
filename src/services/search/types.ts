export interface User {
  id: string;
  denomination: string;
  anonymous_denomination: string;
  name: string;
  surname: string;
  gender: Gender;
  image_id: string;
  usecase: ProfileType;
  profile_type: ProfileType;
  tjm: null | string;
  specialities: string[];
  skills: Skill[];
  achievements: Achievement[];
  stars_count: number;
  picture_direction: number;
  y: number;
  x: number;
  dateUpdate: number;
}

export interface Achievement {
  name: string;
  stars: number;
}

export enum Gender {
  Man = "man",
  Woman = "woman",
}

export enum ProfileType {
  Free = "free",
  Perso = "perso",
}

export interface SearchQuerySettings {
  startIndex: number;
  maxResults: number;
  nom?: string;
  prenom?: string;
  email?: string;
  telephone?: string;
  isFreelance?: boolean;
  allSpecialitesStr?: string;
  allSkillsStr?: string;
  onlyWithTjm?: boolean;
}

export interface Skill {
  name: string;
  level: null | string;
  stars: number;
  percentage: null | string;
}

interface IFilter {
  name: string;
  displayName: string;
}

interface Domain extends IFilter {
  subDomains: SubDomain[];
}

interface SubDomain extends IFilter {}

const computingDomain: Domain = {
  name: "computing",
  displayName: "Computing",
  subDomains: [{ name: "developer", displayName: "Developer" }],
};
