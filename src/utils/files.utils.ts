import fs from 'fs/promises';
import path from 'path';
import {JsonReponse} from "../types/apiResponse.js";

export class FileUtils {
  basePath: string;

  constructor(basePath: string) {
    this.basePath = path.join(process.cwd(), basePath);
  }

  async readJSON<T>(file: string): Promise<T> {
    const data: string = await fs.readFile(
      path.join(this.basePath, file),
      'utf-8',
    );
    const a : JsonReponse =  JSON.parse(data) as JsonReponse;
    const count = a.data.length;
    a.count = count;
    return a as T;

  }

  async readMarkdown(file: string): Promise<string> {
    return fs.readFile(path.join(this.basePath, file), 'utf-8');
  }
}
