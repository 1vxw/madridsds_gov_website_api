import fs from "fs/promises";
import path from "path";

export class AboutRepository {
  private readonly basePath: string = path.join(
    process.cwd(),
    "src/data/static/about"
  );

  async readJSON<T>(file: string): Promise<T> {
    const data: string = await fs.readFile(
      path.join(this.basePath, file),
      "utf-8"
    );
    return JSON.parse(data) as T;
  }

  async readMarkdown(file: string): Promise<string> {
    return fs.readFile(
      path.join(this.basePath, file),
      "utf-8"
    );
  }
}
