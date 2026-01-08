// src/middlewares/ErrorHandler.ts
import { Response } from "express";

export class ErrorHandler {
  static handle(
    err: Error,
    res: Response
  ): void {
    console.error(err);
    res.status(500).json({
      success: false,
      message: err.message || "Internal Server Error"
    });
  }
}
