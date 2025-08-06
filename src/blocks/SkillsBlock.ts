/**
 * Блок відображення навичок резюме
 */

import { Skills } from "../models/ResumeModel";
import { IBlock } from "./BlockFactory";

export class SkillsBlock implements IBlock {
  constructor(private d: Skills) {}

  /**
   * Рендеринг блоку навичок
   */
  render(): HTMLElement {
    // Створюємо секцію
    const sec = document.createElement("section");
    sec.className = "section skills";
    sec.innerHTML = "<h2>Skills</h2>";

    const markup = `<ul>
      ${Object.entries(this.d)
        .map(
          ([key, value]) => `<li>
          <b>${key}:</b> ${value.join(", ")}
        </li>`
        )
        .join("")}
    </ul>`;

    sec.innerHTML += markup;

    return sec;
  }
}
