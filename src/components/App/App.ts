import Component from "../Component/Component";

class App extends Component {
  populate(): void {
    this.element.innerHTML = `    <ul class="characters-list row list-unstyled"> </ul>
`;
  }
}

export default App;
