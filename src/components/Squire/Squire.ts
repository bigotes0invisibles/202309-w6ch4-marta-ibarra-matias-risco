import Character from "../Character/Character.js";
import { type SquireData } from "../../types.js";

export class Squire extends Character {
  kissAssLevel;
  serves;

  constructor(data: SquireData) {
    super(data);
    this.kissAssLevel = this.kissAssLevelFilter(data.kissAssLevel);

    this.serves = data.serves;
  }

  communicate(): string {
    return `${super.communicate()}I'm a loser`;
  }

  cardInformation(): string {
    return `Serves: ${this.serves}`;
  }

  kissAssLevelFilter(kissAssLevel: number): number {
    if (kissAssLevel < 0) {
      return 0;
    }

    if (kissAssLevel > 10) {
      return 10;
    }

    return kissAssLevel;
  }
}
