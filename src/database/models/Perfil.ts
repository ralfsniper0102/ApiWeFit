import { Model } from "sequelize";
import db from ".";
import sequelize from "sequelize";

class Perfil extends Model {
  declare id: number;
  declare personalType: number;
  declare cnpj: string;
  declare cpf: string;
  declare name: string;
  declare mobilePhone: string;
  declare phone: string;
  declare email: string;
  declare cep: string;
  declare address: string;
  declare number: number;
  declare complement: string;
  declare city: string;
  declare state: string;
  declare neighborhood: string;
  declare updatedAt: Date;
}

Perfil.init(
  {
    id: {
      type: sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },

    personalType: {
      type: sequelize.INTEGER,
      allowNull: false,
    },
    cnpj: {
      type: sequelize.STRING,
      allowNull: true,
    },
    cpf: {
      type: sequelize.STRING,
      allowNull: false,
    },
    name: {
      type: sequelize.STRING,
      allowNull: false,
    },
    mobilePhone: {
      type: sequelize.STRING,
      allowNull: false,
    },
    phone: {
      type: sequelize.STRING,
      allowNull: true,
    },
    email: {
      type: sequelize.STRING,
      allowNull: false,
    },
    cep: {
      type: sequelize.STRING,
      allowNull: false,
    },
    address: {
      type: sequelize.STRING,
      allowNull: false,
    },
    number: {
      type: sequelize.INTEGER,
      allowNull: false,
    },
    complement: {
      type: sequelize.STRING,
      allowNull: true,
    },
    city: {
      type: sequelize.STRING,
      allowNull: false,
    },
    state: {
      type: sequelize.STRING,
      allowNull: false,
    },
    neighborhood: {
      type: sequelize.STRING,
      allowNull: false,
    },
    createdAt: {
      type: sequelize.DATE,
      allowNull: false,
      defaultValue: sequelize.NOW,
    },
    updatedAt: {
      type: sequelize.DATE,
      allowNull: true,
      defaultValue: sequelize.NOW,
    },
  },
  {
    sequelize: db,
    tableName: "perfil",
  }
);

export default Perfil;
