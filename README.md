
# Teste Backend

Este é um projeto de teste de backend desenvolvido em Node.js, utilizando o framework Express.js e a arquitetura Model-Controller-REST (MCR).

## Funcionalidades
- Cadastro e consulta de Perfil
- Validação de campos e verificação de duplicidade 
- Persistencia dos dados no Banco de dados
- Documentado com Swagger

## Documentação
- http://localhost:3000/swagger/index.html

## Autor
- [@ralfsniper0102](https://www.github.com/ralfsniper0102)

## Linguagens
- Typescript
- Javascript

## Framework
- Express

## ORM
- Sequelize

## Libs
- Joi (Validador)
- Mysql2 (Conexão com DB MySQL)
- Swagger-jsdoc (Documentação)
- Swagger-themes 
- Swagger-ui-express


## Banco de Dados
- MySQL


## Executando o Projeto:

- docker-compose up
- npm run dev

## Iniciando Projeto com os seguinte comandos (Caso seja necessário criar o volume do banco novamente):

- docker-compose up
- npx sequelize db:create 
- npx sequelize db:migrate