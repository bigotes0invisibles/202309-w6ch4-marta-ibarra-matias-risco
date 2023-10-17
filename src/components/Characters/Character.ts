import type CharacterData from "../Types/types";

class Character {
  isAlive: boolean;
  series: string;
  characterData;

  constructor(characterData: CharacterData) {
    this.characterData = characterData;
  }

  protected communicate() {
    return `${this.characterData.name} says: `;
  }

  protected die(): void {
    this.isAlive = false;
  }
}
export default Character;
