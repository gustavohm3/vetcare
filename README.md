VetCare 🐾

Sistema web para gerenciamento de clientes e pets de uma clínica veterinária, desenvolvido como projeto acadêmico utilizando React, Node.js, Express e MongoDB.

## Objetivo

O projeto tem como objetivo aplicar conceitos de desenvolvimento através da construção de uma aplicação capaz de realizar o cadastro e consulta de clientes e seus respectivos pets.

## Tecnologias Utilizadas

## Frontend

React
React Router DOM
Axios
Tailwind CSS

## Função de cada tecnologia

React

Construção da interface do usuário
Componentização das telas
Atualização dinâmica dos dados

React Router

Navegação entre páginas
Separação entre Dashboard, Clientes e Pets

Axios

Comunicação com a API REST

Tailwind CSS

Estilização da interface
Responsividade

## Backend

Node.js
Express
MongoDB
Mongoose
JWT
Swagger

## Função de cada tecnologia

Node.js

    Execução do backend em JavaScript

Express

    Criação das rotas da API

MongoDB

    Armazenamento dos dados

Mongoose

    Modelagem e validação dos dados

Swagger

    Documentação e testes dos endpoints

# Funcionalidades

- Cadastro de clientes
- Listagem de clientes
- Cadastro de pets
- Listagem de pets

---
## Estrutura do Projeto

Backend
    backend/
    └── src
        ├── config
        ├── controllers
        ├── middleware
        ├── models
        ├── routes
        └── server.js

## Controllers

Os controllers são responsáveis por implementar as regras de negócio da aplicação.

Eles funcionam como intermediários entre as rotas e o banco de dados. Quando uma requisição chega ao servidor, a rota direciona essa requisição para um controller, que processa os dados, realiza operações no banco e retorna uma resposta ao cliente.

Exemplo de responsabilidades dos controllers
    Receber dados enviados pelo frontend
    Validar informações
    Consultar o banco de dados
    Criar novos registros
    Retornar respostas em formato JSON

Exemplos:

    createClient()
    getClients()
    createPet()
    getPets()

## Models

Os Models representam as estruturas dos dados armazenados no banco de dados.

Utilizando o Mongoose, cada model define quais campos um documento deve possuir, seus tipos e possíveis validações.

Essa camada garante que os dados sejam armazenados de forma organizada e consistente.

Exemplos:

    Client
    Pet
    User

## Routes

As rotas são responsáveis por definir os endpoints disponíveis na API.

Cada rota associa uma URL e um método HTTP a um controller específico.

Exemplo
    router.get("/", getClients);
    router.post("/", createClient);

Nesse caso:

    GET → lista clientes
    POST → cadastra clientes

## Métodos HTTP utilizados

| Método | Função              |
| ------ | ------------------- |
| GET    | Consultar dados     |
| POST   | Criar registros     |
| PUT    | Atualizar registros |
| DELETE | Remover registros   |

## Fluxo da Aplicação

O sistema segue uma arquitetura baseada na comunicação entre frontend, backend e banco de dados.

Quando um usuário realiza uma ação na interface, a informação percorre diversas camadas até chegar ao banco.

Exemplo: Cadastro de Cliente

1. Usuário preenche o formulário
2. Frontend envia a requisição - O React utiliza o Axios para enviar os dados
3. A rota recebe a requisição - A rota identifica que a operação deve ser tratada pelo controller responsável.
4. O controller processa a operação - O controller recebe os dados e solicita ao model que realize o armazenamento.
5. O model interage com o MongoDB - O Mongoose converte os dados recebidos em um documento válido e o salva na coleção correspondente.
6. O backend retorna uma resposta - Uma resposta JSON é enviada para o frontend.
7. O frontend atualiza a interface - Após receber a resposta, o React atualiza a lista de clientes automaticamente, sem necessidade de recarregar a página.

## Endpoints Principais

Clientes
    GET /clients
    POST /clients

Pets
    GET /pets
    POST /pets

## Hospedagem

Frontend

    Vercel
Backend

    Render
Banco de Dados

    MongoDB Atlas

## Aprendizados

Durante o desenvolvimento deste projeto foram aplicados conceitos como:

    CRUD
    API REST
    Componentização com React
    Gerenciamento de rotas
    Consumo de APIs com Axios
    Node.js e Express
    Modelagem de dados com MongoDB
    Deploy em nuvem


# Como executar o projeto

*1. Clonar o repositório

```bash
git clone https://github.com/gustavohm3/vetcare.git

*2. Subir o MongoDB com Docker*

Na raiz do projeto:

docker compose up -d

*3. Rodar o backend*

cd backend
npm install
npm run dev

Backend:
http://localhost:5000

Swagger:
http://localhost:5000/api-docs

*4. Rodar o frontend*

cd frontend
npm install
npm run dev

Frontend:
http://localhost:5173

*Variáveis de ambiente*

Criar um arquivo .env dentro da pasta backend:

PORT=5000
MONGO_URI=mongodb://localhost:27017/vetcare
JWT_SECRET=segredo123

*Observações*

O projeto foi desenvolvido utilizando MongoDB em container Docker para facilitar a configuração do ambiente local.

O frontend consome os dados da API utilizando Axios e atualização assíncrona sem recarregar a página.

*Autor*

Gustavo Henrique
Projeto desenvolvido para a disciplina de Arquitetura de Aplicacoes Web.
