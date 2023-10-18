import type Character from "../Character/Character";

export interface CharacterData {
  name: string;
  family: string;
  age: number;
  imageSource: string;
}

export interface KingData extends CharacterData {
  yearsOfReign: number;
}
export interface AdvisorData extends CharacterData {
  advises: Character;
}

export interface FighterData extends CharacterData {
  weapon: string;
  dexterity: number;
}
