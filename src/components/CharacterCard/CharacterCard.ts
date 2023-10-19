import Component from "../Component/Component.js";
import { type CharacterData } from "../../types.js";

class CharacterCard extends Component {
  charaterData;

  constructor(parentElement: Element, data: CharacterData) {
    super(parentElement, "article", "character");
    this.charaterData = data;
  }

  populate(): void {
    this.element.innerHTML = `      
          <div class="card character__card">
            <img src="${this.charaterData.imageSource}" alt="Character's Name and family" class="character__picture card-img-top" />
            <div class="card-body">
              <h2 class="character__name card-title h4">${this.charaterData.name} ${this.charaterData.family}</h2>
              <div class="character__info">
                <ul class="list-unstyled">
                  <li>Age: ${this.charaterData.age} yrs</li>
                  <li>
                    State:
                    <i class="fas fa-thumbs-up"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
            `;
  }
}

export default CharacterCard;
