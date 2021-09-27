<h1 align="center">
    Search Zip Code - Backend.
    <h5 align="center">
      Api com integração com o serviço ViaCEP.
    </h5>
</h1>


## 📚 Índice

<p align="center">
  <a href="#thought_balloon-introdução">:small_blue_diamond: Introdução</a>
  <a href="#warning-pré-requisitos">:small_blue_diamond: Pré-requisitos</a>
  <a href="#arrow_forward-como-rodar-a-aplicação">:small_blue_diamond: Como rodar a aplicação</a>
  <a href="#rocket-testes">:small_blue_diamond: Testes</a>
  <a href="#open_file_folder-linguagem-e-bibliotecas-utilizadas">:small_blue_diamond: Linguagem e bibliotecas utilizadas</a>
</p>


## :thought_balloon: Introdução

Projeto realizado com o objetivo de ajudar um usuário a consultar o cep de um determinado local.
A api utiliza o serviço ViaCEP para efetuar a consulta inicial, após a primeira consulta a api realiza cache dos dados para efetuar uma consulta mais rápida e eficiente.


## :warning: Pré-requisitos

- [x] [Node.js](https://nodejs.org/en/download)
- [x] [Git](https://git-scm.com)
- [x] [Yarn](https://yarnpkg.com/)
- [x] [Docker](https://www.docker.com/)
- [x] [Docker Compose](https://docs.docker.com/compose/)

## :arrow_forward: Como rodar a aplicação

Este projeto foi realizando utilizando NodeJS, Express e TypeORM.

```bash
# Clone o repositório
$ git clone git@github.com:Coldiblaster/search-zip-code-back-end.git
# Entre na pasta
$ cd search-zip-code-back-end
# Instale as dependências
$ yarn
# Abra o código fonte no visual studio code
$ code .
# Crie o Banco de Dados relacional
$ docker-compose up
# Rode as migrations
$ yarn migration:run
# Inicie o Projeto
$ yarn dev:server
```

## :rocket: Testes

Os testes do projeto foi realizando utilizando o framework Jest

```bash
# Iniciar a validação dos testes
$ yarn test
```

## :open_file_folder: Linguagem e bibliotecas utilizadas

- [x] [NodeJs](https://nodejs.org/en/)
- [x] [TypeORM](https://typeorm.io/#/)
- [x] [Jest](https://jestjs.io/pt-BR/)
- [x] [Typescript](https://www.typescriptlang.org/)
- [x] [Axios](https://axios-http.com/)
- [x] [Express](https://expressjs.com/pt-br/)
