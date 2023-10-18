import King from "../King/King";
import Fighter from "../Fighter/Fighter";
import Advisor from "../Advisor/Advisor";
import { Squire } from "../Squire/Squire";

const joffreyCharacterData = {
  id: 1,
  name: "Joffrey",
  family: "Baratheon",
  age: 16,
  yearsOfReign: 2,
  imageSource: "joffrey.jpg",
};
const joffrey = new King(joffreyCharacterData, 2);

const jaimeCharacterData = {
  id: 2,
  name: "Jaime",
  family: "Lannister",
  age: 45,
  weapon: "sword",
  dexterity: 7,
  imageSource: "jaime.jpg",
};
const jaime = new Fighter(jaimeCharacterData, "sword", 7);

const daenerysCharacterData = {
  id: 3,
  name: "Daenerys",
  family: "Targaryen",
  age: 30,
  weapon: "dragon",
  dexterity: 10,
  imageSource: "daenerys.jpg",
};
const daenerys = new Fighter(daenerysCharacterData, "Dragons", 10);

const tyrionCharacterData = {
  id: 4,
  name: "Tyrion",
  family: "Lannister",
  age: 40,
  advises: daenerys,
  imageSource: "tyrion.jpg",
};
const tyrion = new Advisor(tyrionCharacterData);

const bronnCharacterData = {
  id: 5,
  name: "Bronn",
  family: "Blackwater",
  age: 54,
  kissAssLevel: 0,
  serves: jaime,
  imageSource: "bronn.jpg",
};

const bronn = new Squire(bronnCharacterData);

export const characters = [jaime, joffrey, daenerys, tyrion, bronn];
