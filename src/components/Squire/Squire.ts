import Character from "../Character/Character.js";
import Fighter from "../Fighter/Fighter.js";
import { type SquireData } from "../../types.js";

export class Squire extends Character {
  kissAssLevel;
  serves;

  constructor(data: SquireData) {
    super(data);
    this.kissAssLevel = this.kissAssLevelFilter(data.kissAssLevel);

    if (data.serves instanceof Fighter) {
      this.serves = data.serves;
    }
  }

  communicate(): string {
    return `${super.communicate()}I'm a loser`;
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
