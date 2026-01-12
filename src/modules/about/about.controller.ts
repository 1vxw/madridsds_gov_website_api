import { Request, Response, NextFunction } from 'express';
import { AboutService } from './about.service.js';
import {
  StaticSection,
  Mandate,
  OrgChart,
  Contacts,
  Mayors
} from '../../types/about.types.js';

export class AboutController {
  constructor(private readonly service: AboutService = new AboutService()) {}

  mission = async (
    _: Request,
    res: Response<StaticSection>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      res.json(await this.service.getMission());
    } catch (e) {
      next(e);
    }
  };

  vision = async (
    _: Request,
    res: Response<StaticSection>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      res.json(await this.service.getVision());
    } catch (e) {
      next(e);
    }
  };

  mandate = async (
    _: Request,
    res: Response<Mandate>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      res.json(await this.service.getMandate());
    } catch (e) {
      next(e);
    }
  };

  history = async (
    _: Request,
    res: Response<{ content: string }>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const content: string = await this.service.getHistory();
      res.json({ content });
    } catch (e) {
      next(e);
    }
  };

  orgChart = async (
    _: Request,
    res: Response<OrgChart>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      res.json(await this.service.getOrgChart());
    } catch (e) {
      next(e);
    }
  };

  contacts = async (
    _: Request,
    res: Response<Contacts>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      res.json(await this.service.getContacts());
    } catch (e) {
      next(e);
    }
  };

  mayors = async (
    _: Request,
    res: Response<Mayors>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      res.json(await this.service.getMayors());
    } catch (e) {
      next(e);
    }
  }
}
