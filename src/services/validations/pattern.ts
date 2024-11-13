const textPattern = /^[a-zA-Z\u00C0-\u017F\s'()-]{3,}$/;

export const pattern = {
  Email: /^[a-zA-Z0-9._-]{3,}@[a-zA-Z0-9.-]{3,}\.[a-zA-Z]{2,}$/,
  Phone: /^[0-9]{10}$/,
  MobilePhone: /^[0-9]{11}$/,
  Name: /^[a-zA-Z\u00C0-\u017F\s']{3,}$/,
  ZipChars: /^[0-9]{8}$/,
  Cnpj: /^[0-9]{14}$/,
  Cpf: /^[0-9]{11}$/,
  Address: textPattern,
  Complement: /^[a-zA-Z\u00C0-\u017F\s'()-.0-9]{3,}$/,
  City: textPattern,
  State: /^[a-zA-Z\u00C0-\u017F\s'()-.0-9]{2,}$/,
  Neighborhood: textPattern,
};