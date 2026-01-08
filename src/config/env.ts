import dotenv from 'dotenv';

dotenv.config();

export class Env {
  static readonly PORT = process.env.PORT || 4000;
  static readonly NODE_ENV = process.env.NODE_ENV || 'development';
}
