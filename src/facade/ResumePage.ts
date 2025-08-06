import { ResumeImporter } from "../importer/ResumeImporter";
// import { resolve } from "node:path";
// import fs from "node:fs/promises";

/**
 * Фасад: єдина точка входу.
 */
export class ResumePage {
  async init(jsonPath: string): Promise<void> {
    // Завантажити дані через fetchData
    const jsonData = await this.fetchData(jsonPath);
    // Імпортувати дані через ResumeImporter
    new ResumeImporter(jsonData).import();
  }

  private async fetchData(path: string): Promise<unknown> {
    const response = await fetch(path);
    if (!response.ok) throw new Error("Data was not uploaded");

    return response.json();

    // const pathToFile = resolve(__dirname, path);
    // const raw = await fs.readFile(pathToFile, "utf-8");
    // return JSON.parse(raw);
  }
}
