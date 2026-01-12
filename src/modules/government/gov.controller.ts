import { Request, Response, NextFunction } from 'express';
import { GovService } from './gov.service.js';
import { BrgyDir, KOfficals, PublicOffices } from '../../types/gov.types.js';
export class GovController {
  constructor(private readonly service: GovService = new GovService()) {}

  keyOfficials = async (
    _: Request,
    res: Response<KOfficals>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      return res.json(await this.service.getKeyOfficials());
    } catch (e) {
      next(e);
    }
  };

  directoryOfBarangays = async (
    _: Request,
    res: Response<BrgyDir>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      return res.json(await this.service.getDirectoryOfBarangays());
    } catch (e) {
      next(e);
    }
  };

  publicOffices = async (
    _: Request,
    res: Response<PublicOffices>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      return res.json(await this.service.getPublicOffices());
    } catch (e) {
      next(e);
    }
  };
}
