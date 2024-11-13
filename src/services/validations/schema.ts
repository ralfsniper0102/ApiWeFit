import joi from "joi";
import { pattern } from "./pattern";
import PersonalType from "../../enums/personalType.enum";

const perfil = joi.object({
  id: joi
    .number(),
  personalType: joi
    .number()
    .valid(...Object.values(PersonalType))
    .required(),

  cnpj: joi
    .when("personalType", {
      is: PersonalType.JURIDICA,
      then: joi
        .string()
        .pattern(pattern.Cnpj)
        .message("Invalid cnpj")
        .required(),
      otherwise: joi.optional(),
    }),

  cpf: joi
    .string()
    .pattern(pattern.Cpf)
    .message("Invalid cpf")
    .required(),
    
  name: joi
    .string()
    .pattern(pattern.Name)
    .message("Invalid name")
    .required(),    

  mobilePhone: joi
    .string()
    .pattern(pattern.MobilePhone)
    .message("Invalid mobile phone")
    .required(),

  phone: joi
    .string()
    .pattern(pattern.Phone)
    .message("Invalid phone")
    .optional(),    

  email: joi
    .string()
    .pattern(pattern.Email)
    .message("Invalid email")
    .required(),
    
  cep: joi
    .string()
    .pattern(pattern.ZipChars)
    .message("Invalid cep")
    .required(),    

  address: joi
    .string()
    .pattern(pattern.Address)
    .message("Invalid address")
    .required(),
    
  number: joi
    .number()
    .required(),

  complement: joi
    .string()
    .pattern(pattern.Complement)
    .message("Invalid complement")
    .optional(),
    
  city: joi
    .string()
    .pattern(pattern.City)
    .message("Invalid city")
    .required(),
    
  state: joi
    .string()
    .pattern(pattern.State)
    .message("Invalid state")
    .required(),
    
  neighborhood: joi
    .string()
    .pattern(pattern.Neighborhood)
    .message("Invalid neighborhood")
    .required(),

  updatedAt: joi
    .optional(),
});

export = { perfil };
