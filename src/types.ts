export interface CharacterData {
  name: string;
  family: string;
  age: number;
  imageSource: string;
  characterType: "Fighter" | "King" | "Advisor" | "Squire";
}

export interface KingData extends CharacterData {
  yearsOfReign: number;
  characterType: "King";
}
export interface AdvisorData extends CharacterData {
  advises: CharacterData["name"];
  characterType: "Advisor";
}

export interface FighterData extends CharacterData {
  weapon: string;
  dexterity: number;
  characterType: "Fighter";
}

export interface SquireData extends CharacterData {
  kissAssLevel: number;
  serves: FighterData["name"];
  characterType: "Squire";
}
