import { NextFunction, Request, Response } from "express";
import PerfilService from "../services/perfil.service";

class PerfilController {
  private service = new PerfilService();

  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const { status, message } = await this.service.getAll();
      res.status(status).json(message);
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { status, message } = await this.service.create(req.body);
      res.status(status).json(message);
    } catch (error) {
      next(error);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const { status, message } = await this.service.getById(
        parseInt(req.params.id)
      );
      res.status(status).json(message);
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { status, message } = await this.service.update(
        req.body.id,
        req.body
      );
      res.status(status).json(message);
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { status, message } = await this.service.delete(
        parseInt(req.params.id)
      );
      res.status(status).json(message);
    } catch (error) {
      next(error);
    }
  }
}

export default PerfilController;
