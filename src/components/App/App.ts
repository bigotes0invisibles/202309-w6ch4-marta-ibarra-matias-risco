import characterClass from "../CharacterFunctions.js";
import CharacterList from "../CharacterList/CharacterList.js";
import Component from "../Component/Component.js";
class App extends Component {
  constructor(parentElement: HTMLElement) {
    super(parentElement, "div", "app");
  }

  populate(): void {
    const container = document.createElement("div");
    if (container === null) {
      throw Error("error");
    }

    container.className = "container";
    this.element.appendChild(container);
    const characterList = new CharacterList(
      container as HTMLElement,
      characterClass,
    );
    characterList.render();
  }
}

export default App;
