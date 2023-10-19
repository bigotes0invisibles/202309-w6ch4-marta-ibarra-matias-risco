import { characterData } from "../data/data.js";
import {
  type KingData,
  type CharacterData,
  type FighterData,
  type AdvisorData,
  type SquireData,
} from "../types";
import Advisor from "./Advisor/Advisor.js";
import type Character from "./Character/Character";
import Fighter from "./Fighter/Fighter.js";
import King from "./King/King.js";
import { Squire } from "./Squire/Squire.js";

export const characterDatatoClass = (charactersData: CharacterData[]) =>
  charactersData.map((characterData): Character => {
    switch (characterData.characterType) {
      case "King":
        return new King(
          characterData as KingData,
          (characterData as KingData).yearsOfReign,
        );

      case "Fighter":
        return new Fighter(
          characterData as FighterData,
          (characterData as FighterData).weapon,
          (characterData as FighterData).dexterity,
        );
      case "Advisor":
        return new Advisor(characterData as AdvisorData);

      case "Squire":
      default:
        return new Squire(characterData as SquireData);
    }
  });

const characterClass = characterDatatoClass(characterData);

export default characterClass;
