import Character from "../Character/Character.js";
import { type KingData } from "../../types.js";

class King extends Character {
  yearsOfReign;

  constructor(data: KingData) {
    super(data);
    this.yearsOfReign = data.yearsOfReign;
  }

  cardInformation(): string {
    return `Years of Reign: ${this.yearsOfReign}`;
  }

  protected communicate() {
    return `${this.name} says: `;
  }

  protected die(): void {
    this.isAlive = false;
  }
}

export default King;
