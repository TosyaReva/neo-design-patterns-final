/**
 * Блок відображення освіти в резюме
 */

import { Education } from "../models/ResumeModel";
import { IBlock } from "./BlockFactory";

export class EducationBlock implements IBlock {
  constructor(private d: Education[]) {}

  /**
   * Рендеринг блоку освіти
   */
  render(): HTMLElement {
    // Створюємо секцію
    const el = document.createElement("section");
    el.className = "section education";
    el.innerHTML = "<h2>Education</h2>";

    el.innerHTML += this.d.map(
      (education) =>
        `<p>${education.degree} ${education.field}, ${education.institution}(${education.graduation}))<p>`
    );

    return el;
  }
}
