import App from "../App/App";
import Character from "../Character/Character";
import CharacterCard from "../CharacterCard/CharacterCard";
import Component from "../Component/Component";
import { CharacterData } from "../Types/types";

abstract class CharacterList extends Component {
  constructor(
    parentElement: Element,
    private characters: CharacterData[],
  ) {
    super(parentElement, "ul", "character-list");
  }

  populate(): void {
    this.characters.forEach((character) => {
      const item = document.createElement("li");
      item.className = "character-list";
      this.element.appendChild(item);

      const newItem = new CharacterCard(item, character as CharacterData);
    });
  }
}

export default CharacterList;
