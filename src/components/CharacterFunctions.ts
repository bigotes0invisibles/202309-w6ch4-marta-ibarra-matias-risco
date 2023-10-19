import {
  type KingData,
  type CharacterData,
  type FighterData,
  type AdvisorData,
  type SquireData,
} from "../types";
import Advisor from "./Advisor/Advisor";
import type Character from "./Character/Character";
import Fighter from "./Fighter/Fighter";
import King from "./King/King";
import { Squire } from "./Squire/Squire";

export const characterDatatoClass = (charactersData: CharacterData[]) =>
  charactersData.map((characterData): Character | undefined => {
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
        return new Squire(characterData as SquireData);
      default:
        return undefined;
    }
  });
