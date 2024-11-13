import Perfil from "../database/models/Perfil";
import IPerfilCreate from "../interfaces/IPerfil";

export const cleanProfileFields = (perfil: IPerfilCreate): IPerfilCreate => {
  return {
    personalType: perfil.personalType,
    cnpj: perfil.cnpj?.trim().replace(/\D/g, "") ?? "",
    cpf: perfil.cpf?.trim().replace(/\D/g, "") ?? "",
    name: perfil.name?.trim(),
    mobilePhone: perfil.mobilePhone?.trim().replace(/\D/g, "") ?? "",
    phone: perfil.phone?.trim().replace(/\D/g, "") ?? "",
    email: perfil.email?.trim(),
    cep: perfil.cep?.trim().replace(/\D/g, "") ?? "",
    address: perfil.address?.trim(),
    number: perfil.number,
    complement: perfil.complement?.trim(),
    city: perfil.city?.trim(),
    state: perfil.state?.trim(),
    neighborhood: perfil.neighborhood?.trim(),
  };
};

export const cleanProfileFieldsUpdate = (perfil: Perfil): Partial<Perfil> => {
  return {
    personalType: perfil.personalType,
    cnpj: perfil.cnpj?.trim().replace(/\D/g, "") ?? "",
    cpf: perfil.cpf?.trim().replace(/\D/g, "") ?? "",
    name: perfil.name?.trim(),
    mobilePhone: perfil.mobilePhone?.trim().replace(/\D/g, "") ?? "",
    phone: perfil.phone?.trim().replace(/\D/g, "") ?? "",
    email: perfil.email?.trim(),
    cep: perfil.cep?.trim().replace(/\D/g, "") ?? "",
    address: perfil.address?.trim(),
    number: perfil.number,
    complement: perfil.complement?.trim(),
    city: perfil.city?.trim(),
    state: perfil.state?.trim(),
    neighborhood: perfil.neighborhood?.trim(),
    updatedAt: new Date(),
  };
};
