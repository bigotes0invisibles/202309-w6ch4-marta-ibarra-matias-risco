import Component from "../Component/Component.js";
class App extends Component {
  constructor( parentElement:HTMLElement){
    super(parentElement,"div","app")
  }
  populate(): void {
    const container=document.createElement("div");
    container.className="container";
    this.element.appendChild(container);
  }
}

export default App;
