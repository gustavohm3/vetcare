# VetCare

Projeto desenvolvido para a disciplina de Arquitetura de Aplicações Web.

O sistema simula uma clínica veterinária simples, permitindo o cadastro de clientes e pets através de uma API REST integrada com MongoDB.

Além do backend, também foi desenvolvido um frontend em React consumindo a API de forma assíncrona.

---

# Funcionalidades

- Cadastro de clientes
- Listagem de clientes
- Cadastro de pets
- Listagem de pets
- Registro e login de usuários
- Documentação da API com Swagger

---

# Tecnologias utilizadas

## Backend
- Node.js
- Express
- MongoDB
- Mongoose
- JWT
- Swagger

## Frontend
- React
- Vite
- Axios

## Outros
- Docker
- Docker Compose

---

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

*Endpoints principais*

*Auth*

POST /auth/register
POST /auth/login

*Clients*

GET /clients
POST /clients
PUT /clients/:id
DELETE /clients/:id

*Pets*

GET /pets
POST /pets
PUT /pets/:id
DELETE /pets/:id

*Observações*

O projeto foi desenvolvido utilizando MongoDB em container Docker para facilitar a configuração do ambiente local.

O frontend consome os dados da API utilizando Axios e atualização assíncrona sem recarregar a página.

*Autor*

Gustavo Henrique