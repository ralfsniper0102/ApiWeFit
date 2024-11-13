interface IPerfilCreate{
    personalType: number,
    cnpj?: string,
    cpf: string,
    name: string,
    mobilePhone: string,
    phone: string,
    email: string,
    cep: string,
    address: string,
    number: number,
    complement?: string,
    city: string,
    state: string,
    neighborhood: string,
}

export default IPerfilCreate