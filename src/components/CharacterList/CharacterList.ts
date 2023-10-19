import CharacterCard from "../CharacterCard/CharacterCard";
import Component from "../Component/Component";
import { type CharacterData } from "../../types";

abstract class CharacterList extends Component {
  constructor(
    parentElement: Element,
    private readonly characters: CharacterData[],
  ) {
    super(parentElement, "ul", "character-list");
  }

  populate(): void {
    this.characters.forEach((character) => {
      const item = document.createElement("li");
      item.className = "character-list";
      this.element.appendChild(item);

      const newItem = new CharacterCard(item, character);
      newItem.render();
    });
  }
}

export default CharacterList;
