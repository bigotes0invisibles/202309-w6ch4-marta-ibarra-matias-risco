import Character from "../Characters/Character";
import type CharacterData from "../Types/types";

class King extends Character {
  yearsOfReign: number;

  constructor(characterData: CharacterData, yearsOfReign: number) {
    super(characterData);
    this.yearsOfReign = yearsOfReign;
  }

  protected communicate() {
    return `${this.characterData.name} says: `;
  }

  protected die(): void {
    this.isAlive = false;
  }
}

export default King;
