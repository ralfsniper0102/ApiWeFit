import { ModelStatic } from "sequelize";
import Perfil from "../database/models/Perfil";
import { resp, respM } from "../utils/resp";
import schema from "./validations/schema";
import { cleanProfileFields, cleanProfileFieldsUpdate } from "../utils/remove";
import IPerfil from "../interfaces/IPerfil";
const { Op } = require("sequelize");

class PerfilService {
  private model: ModelStatic<Perfil> = Perfil;

  async create(perfil: IPerfil) {
    perfil = cleanProfileFields(perfil);

    const { error } = schema.perfil.validate(perfil);
    if (error) return resp(400, error.message);

    try {
      let perfilExists;

      perfilExists = await this.model.findOne({
        where: { email: perfil.email },
      });

      if (perfilExists) return resp(409, "Email already exists");

      switch (perfil.personalType) {
        case 1:
          perfilExists = await this.model.findOne({
            where: { cpf: perfil.cpf },
          });
          if (perfilExists) return resp(409, "Cpf previously registered");
          perfil.cnpj = undefined;
          break;

        case 2:
          perfilExists = await this.model.findOne({
            where: {
              [Op.or]: [{ cnpj: perfil.cnpj }, { cpf: perfil.cpf }],
            },
          });
          if (perfilExists) {
            return resp(
              409,
              perfilExists.cnpj ? "Cnpj already exists" : "Cpf already exists"
            );
          }
          break;
      }
    } catch (error) {
      return resp(500, "Error searching perfil");
    }

    try {
      await this.model.create({ ...perfil });
    } catch (error) {
      return resp(500, "Error creating perfil");
    }

    return respM(201, undefined);
  }

  async getAll() {
    let perfils;

    try {
      perfils = await this.model.findAll();
    } catch (error) {
      return resp(500, "Error searching perfils");
    }
    if (perfils.length === 0) return resp(404, "No perfils found");

    return resp(200, perfils);
  }

  async getById(id: number) {
    let perfil;
    try {
      perfil = await this.model.findByPk(id);

      if (!perfil) return resp(404, "Perfil not found");
    } catch (error) {
      return resp(500, "Error searching perfil");
    }

    return resp(200, perfil);
  }

  async update(id: number, perfil: Perfil) {
    perfil = cleanProfileFieldsUpdate(perfil) as Perfil;
    const { error } = schema.perfil.validate(perfil);
    if (error) return resp(400, error.message);

    try {
      const existingPerfil = await this.model.findOne({ where: { id } });

      if (!existingPerfil) return resp(404, "Perfil not found");

      let existing = await this.model.findOne({
        where: { email: perfil.email },
      });
      if (existing) return resp(409, "Email already exists");

      switch (perfil.personalType) {
        case 1:
          existing = await this.model.findOne({
            where: { cpf: perfil.cpf },
          });
          if (existing) return resp(409, "CPF already exists");
          perfil.cnpj = "";
          break;

        case 2:
          existing = await this.model.findOne({
            where: {
              [Op.or]: [{ cnpj: perfil.cnpj }, { cpf: perfil.cpf }],
            },
          });
          if (existing) {
            return resp(
              409,
              existing.cnpj ? "CNPJ already exists" : "CPF already exists"
            );
          }
          break;
      }

      await existingPerfil.update(perfil);
      
      return respM(200, undefined);
    } catch (error) {
      return resp(500, "Error updating perfil");
    }
  }

  async delete(id: number) {
    try {
      const existingPerfil = await this.model.findOne({ where: { id } });
      if (!existingPerfil) return resp(404, "Perfil not found");

      await existingPerfil.destroy();
    } catch (error) {
      return resp(500, "Error deleting perfil");
    }
    return respM(200, undefined);
  }
}

export default PerfilService;
