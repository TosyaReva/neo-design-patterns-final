/**
 * Блок відображення заголовка резюме
 */

import { ResumeModel } from "../models/ResumeModel";
import { IBlock } from "./BlockFactory";

export class HeaderBlock implements IBlock {
  constructor(private d: ResumeModel["header"]) {}

  /**
   * Рендеринг блоку заголовка
   */
  render(): HTMLElement {
    // Створюємо контейнер для заголовка
    const header = document.createElement("header");
    header.className = "section header";

    const markup = `
    <h1>${this.d.fullName}</h1>
    <p><i>${this.d.title}</i></p>
    <p>${this.d.contacts.email} ${this.d.contacts.phone} ${this.d.contacts.location}</p>
    `;
    header.innerHTML = markup;

    return header;
  }
}
