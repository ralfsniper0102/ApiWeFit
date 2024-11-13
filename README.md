# Teste Backend

Este é um projeto de teste de backend desenvolvido em Node.js, utilizando o framework Express.js e a arquitetura seguindo os principios REST.

## Resumo
O projeto consiste em uma API REST para cadastro e consulta de perfis, com validação de campos, verificação de duplicidade e persistência dos dados em banco de dados. A API é documentada automaticamente com Swagger.

## Tecnologias Utilizadas
- **Node.js**: plataforma de desenvolvimento de aplicações em JavaScript
- **Express.js**: framework para desenvolvimento de aplicações web em Node.js
- **Sequelize**: ORM (Object-Relational Mapping) para interagir com o banco de dados
- **MySQL**: banco de dados relacional utilizado para armazenar os dados da aplicação
- **Swagger**: ferramenta de documentação de API para gerar documentação automática
- **Joi**: biblioteca para validação de dados
- **Mysql2**: biblioteca para conexão com o banco de dados MySQL
- **Swagger-jsdoc**: para configuração da documentação Swagger
- **Swagger-themes**: para personalização da documentação Swagger
- **Swagger-ui-express**: para exibir a documentação da API

## Arquitetura
Este projeto utiliza uma arquitetura em camadas baseada em REST, com a seguinte estrutura:

- **Models**: Responsáveis pela representação dos dados e regras de negócio
- **Controllers**: Gerenciam o fluxo da aplicação e requisições
- **REST API**: Interface de comunicação seguindo os princípios REST

## Estrutura do Projeto
A estrutura básica de diretórios do projeto é a seguinte:

- `src`: pasta raiz do projeto, contendo as pastas de modelos, controladores, serviços e rotas
  - `src/models`: contém os modelos de dados da aplicação
  - `src/controllers`: contém os controladores da aplicação
  - `src/services`: contém os serviços da aplicação
  - `src/routes`: contém as rotas da aplicação

## Banco de Dados
- **MySQL**: banco de dados utilizado para persistência de dados

## Documentação da API
A documentação da API está disponível em [http://localhost:3000/swagger/index.html](http://localhost:3000/swagger/index.html).

## Autor
- [@ralfsniper0102](https://www.github.com/ralfsniper0102)

## Linguagens
- **TypeScript**
- **JavaScript**

## Framework
- **Express**

## ORM
- **Sequelize**

## Executando o Projeto
Para instalar e executar a aplicação, siga os passos abaixo:

1. Clone o repositório da aplicação:
   ```bash
   git clone <url-do-repositorio>

2. Instale as dependências:
   ```bash
   npm install

3. Suba os containers com Docker:
   ```bash
   docker-compose up

4. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev

### Comandos Adicionais (Caso seja necessário recriar o volume do banco)

- Para criar o banco de dados:
  ```bash
  npx sequelize db:create

- Para aplicar as migrações:
  ```bash
  npx sequelize db:migrate