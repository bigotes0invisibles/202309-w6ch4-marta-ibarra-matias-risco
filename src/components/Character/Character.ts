import { type CharacterData } from "../../types.js";
class Character {
  isAlive: boolean;
  series: string;
  characterData;

  constructor(characterData: CharacterData) {
    this.characterData = characterData;
    this.isAlive = true;
  }

  protected communicate() {
    return `${this.characterData.name} says: `;
  }

  protected die(): void {
    this.isAlive = false;
  }
}

export default Character;
