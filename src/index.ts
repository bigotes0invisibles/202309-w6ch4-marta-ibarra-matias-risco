import App from "./components/App/App.js";

const body = document.querySelector("body")!;
const container = new App(body, "div", "conatiner");

container.render();
