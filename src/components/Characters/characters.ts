import King from "../King/King";
import Fighter from "../Fighter/Fighter";
import Advisor from "../Advisor/Advisor";

const joffreyCharacterData = {
  id: 1,
  name: "Joffrey",
  family: "Baratheon",
  age: 16,
  yearsOfReign: 2,
  imageSource: "joffrey.jpg",
};

const jaimeCharacterData = {
  id: 2,
  name: "Jaime",
  family: "Lannister",
  age: 45,
  weapon: "sword",
  dexterity: 7,
  imageSource: "jaime.jpg",
};

const daenerysCharacterData = {
  id: 3,
  name: "Daenerys",
  family: "Targaryen",
  age: 30,
  weapon: "dragon",
  dexterity: 10,
  imageSource: "daenerys.jpg",
};

const tyrionCharacterData = {
  id: 4,
  name: "Tyrion",
  family: "Lannister",
  age: 40,
  advises: "daenerys",
  imageSource: "tyrion.jpg",
};

const bronnCharacterData = {
  id: 5,
  name: "Bronn",
  family: "Blackwater",
  age: 54,
  imageSource: "bronn.jpg",
};

const joffrey = new King(joffreyCharacterData, 2);
const jaime = new Fighter(jaimeCharacterData, "sword", 7);
const daenerys = new Fighter(daenerysCharacterData, "Dragons", 10);
const tyrion = new Advisor(tyrionCharacterData, daenerys);
const bronn = new Squire(bronnCharacterData, 0, jaime);

export const characters = [jaime, joffrey, daenerys, tyrion, bronn];
