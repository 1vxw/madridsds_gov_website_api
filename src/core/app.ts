import express, { Application } from "express";
import cors from "cors";
import routes from "../routes/index.js";
import { ErrorHandler } from "../middleware/ErrorHandler.js";

export class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
    this.errors();
  }

  private middlewares(): void {
    this.app.use(express.json());
    this.app.use(cors());
  }

  private routes(): void {
    this.app.use("/api", routes);
  }

  private errors(): void {
    this.app.use(ErrorHandler.handle);
  }
}
