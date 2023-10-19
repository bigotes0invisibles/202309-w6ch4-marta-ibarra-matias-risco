export interface CharacterData {
  name: string;
  family: string;
  age: number;
  imageSource: string;
  characterType: "Fighter" | "King" | "Advisor" | "Squire";
}

export interface KingData extends CharacterData {
  yearsOfReign: number;
}
export interface AdvisorData extends CharacterData {
  advises: CharacterData;
}

export interface FighterData extends CharacterData {
  weapon: string;
  dexterity: number;
}

export interface SquireData extends CharacterData {
  kissAssLevel: number;
  serves: FighterData;
}
