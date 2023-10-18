import CharacterCard from "../CharacterCard/CharacterCard.js";
import Component from "../Component/Component.js";
import { characters } from "../Characters/characters.js";

class App extends Component {
  populate(): void {
    this.element.innerHTML = `<ul class="characters-list row list-unstyled"> </ul>`;
    const parentCard = document.querySelector(".characters-list")!;
    const cardJoffrey = new CharacterCard(
      parentCard,
      "li",
      "col",
      characters[0].characterData,
    );
    cardJoffrey.render();

    const cardJaime = new CharacterCard(
      parentCard,
      "li",
      "col",
      characters[1].characterData,
    );
    cardJaime.render();

    const carddaenerys = new CharacterCard(
      parentCard,
      "li",
      "col",
      characters[2].characterData,
    );
    carddaenerys.render();

    const cardtyrion = new CharacterCard(
      parentCard,
      "li",
      "col",
      characters[3].characterData,
    );
    cardtyrion.render();
    const cardbronn = new CharacterCard(
      parentCard,
      "li",
      "col",
      characters[4].characterData,
    );
    cardbronn.render();
  }
}

export default App;
