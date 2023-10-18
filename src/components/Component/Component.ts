abstract class Component {
  private readonly element: Element;
  private readonly parentElement: Element;

  constructor(parentElement: Element, tagName: string, className: string) {
    this.element = document.createElement(tagName);
    this.element.className = className;
    this.parentElement = parentElement;
  }

  public render(): void {
    this.parentElement.appendChild(this.element);
  }

  abstract populate(): void;
}

export default Component;
}
