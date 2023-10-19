import {
  type FighterData,
  type CharacterData,
  type KingData,
  type AdvisorData,
  type SquireData,
} from "../types.js";

export const characterData: CharacterData[] = [];

const joffreyCharacterData: KingData = {
  name: "Joffrey",
  family: "Baratheon",
  age: 16,
  yearsOfReign: 2,
  imageSource: "joffrey.jpg",
  characterType: "King",
};

characterData.push(joffreyCharacterData);

const jaimeCharacterData: FighterData = {
  name: "Jaime",
  family: "Lannister",
  age: 45,
  weapon: "sword",
  dexterity: 7,
  imageSource: "jaime.jpg",
  characterType: "Fighter",
};

characterData.push(jaimeCharacterData);

const daenerysCharacterData: FighterData = {
  name: "Daenerys",
  family: "Targaryen",
  age: 30,
  weapon: "dragon",
  dexterity: 10,
  imageSource: "daenerys.jpg",
  characterType: "Fighter",
};

characterData.push(daenerysCharacterData);

const tyrionCharacterData: AdvisorData = {
  name: "Tyrion",
  family: "Lannister",
  age: 40,
  advises: daenerysCharacterData,
  imageSource: "tyrion.jpg",
  characterType: "Advisor",
};

characterData.push(tyrionCharacterData);

const bronnCharacterData: SquireData = {
  name: "Bronn",
  family: "Blackwater",
  age: 54,
  kissAssLevel: 0,
  serves: jaimeCharacterData,
  imageSource: "bronn.jpg",
  characterType: "Squire",
};

characterData.push(bronnCharacterData);
