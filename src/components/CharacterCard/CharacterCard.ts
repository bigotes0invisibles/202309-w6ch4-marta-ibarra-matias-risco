import Component from "../Component/Component.js";
import type Character from "../Character/Character.js";

class CharacterCard extends Component {
  charaterData;

  constructor(parentElement: Element, data: Character) {
    super(parentElement, "article", "character");
    this.charaterData = data;
  }

  populate(): void {
    const { age, family, imageSource, isAlive, name } = this.charaterData;
    this.element.innerHTML = `      
          <div class="card character__card">
            <img src="images/${imageSource}" alt="${name} ${family}" class="character__picture card-img-top" />
            <div class="card-body">
              <h2 class="character__name card-title h4">${name} ${family}</h2>
              <div class="character__info">
                <ul class="list-unstyled">
                  <li>Age: ${age} yrs</li>
                  <li>
                    State:
                    <i class="fas fa-thumbs-${isAlive ? "up" : "down"}"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
            `;
  }
}

export default CharacterCard;
