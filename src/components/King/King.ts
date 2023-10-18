import Character from "../Characters/Character";
import { type KingData } from "../Types/types";

class King extends Character {
  yearsOfReign;

  constructor(data: KingData, yearsOfReign: number) {
    super(data);
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
