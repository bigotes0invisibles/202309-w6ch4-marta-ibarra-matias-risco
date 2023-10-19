import Character from "../Character/Character.js";
import { type KingData } from "../../types.js";

class King extends Character {
  yearsOfReign;

  constructor(data: KingData, yearsOfReign: number) {
    super(data);
    this.yearsOfReign = yearsOfReign;
  }

  protected communicate() {
    return `${this.name} says: `;
  }

  protected die(): void {
    this.isAlive = false;
  }
}

export default King;
