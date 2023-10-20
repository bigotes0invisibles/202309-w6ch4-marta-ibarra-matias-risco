import Character from "../Character/Character.js";
import { type AdvisorData } from "../../types.js";

class Advisor extends Character {
  advises;

  constructor(data: AdvisorData) {
    super(data);
    this.advises = data.advises;
  }

  communicate(): string {
    return `${super.communicate()}I have a funny feeling that I'm going to die`;
  }

  cardInformation(): string {
    return `Advises to:${this.advises}`;
  }
}

export default Advisor;
