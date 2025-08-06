/**
 * Блок відображення короткого опису резюме
 */

import { ResumeModel } from "../models/ResumeModel";
import { IBlock } from "./BlockFactory";

export class SummaryBlock implements IBlock {
  constructor(private d: ResumeModel["summary"]) {}

  /**
   * Рендеринг блоку короткого опису
   */
  render(): HTMLElement {
    // Створюємо секцію
    const el = document.createElement("section");
    el.className = "section summary";

    const markup = `
    <h2>Summary</h2>
    ${this.d.text}
    `;

    el.innerHTML = markup;

    return el;
  }
}
