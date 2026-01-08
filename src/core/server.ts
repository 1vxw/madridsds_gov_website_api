import { App } from "./app.js";
import { Env } from "../config/env.js";

export class Server {
  static start(): void {
    const app = new App().app;
    app.listen(Env.PORT, () =>
      console.log(`API running on port ${Env.PORT}`)
    );
  }
}
