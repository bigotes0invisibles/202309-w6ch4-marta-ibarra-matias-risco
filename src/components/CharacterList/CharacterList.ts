import CharacterCard from "../CharacterCard/CharacterCard.js";
import Component from "../Component/Component.js";
import type Character from "../Character/Character.js";

class CharacterList extends Component {
  constructor(
    parentElement: Element,
    private readonly characters: Character[],
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
