import Character from "../Character/Character.js";
import { type FighterData } from "../../types.js";

class Fighter extends Character {
  weapon: string;
  dexterity: number;

  constructor(data: FighterData, weapon: string, dexterity: number) {
    super(data);
    this.weapon = weapon;
    this.dexterity = this.filterDexterity(dexterity);
  }

  cardInformation(): string {
    return `Weapon:${this.weapon}`;
  }

  communicate(): string {
    return `${super.communicate()}First I hit and then I ask`;
  }

  filterDexterity(dexterity: number): number {
    if (dexterity < 0) {
      return 0;
    }

    if (dexterity > 10) {
      return 10;
    }

    return dexterity;
  }
}

export default Fighter;
