import { type CharacterData } from "../../types.js";
class Character {
  isAlive: boolean;
  series: string;
  name;
  imageSource;
  age;
  family;

  constructor(characterData: CharacterData) {
    this.isAlive = true;
    this.imageSource = characterData.imageSource;
    this.name = characterData.name;
    this.age = characterData.age;
    this.family = characterData.family;
  }

  protected communicate() {
    return `${this.name} says: `;
  }

  protected die(): void {
    this.isAlive = false;
  }
}

export default Character;
