# VetCare

Sistema web para gerenciamento de clínica veterinária desenvolvido para a disciplina **Arquitetura de Aplicações Web — 2026.1**.

## Descrição

O VetCare é uma aplicação web para gerenciamento de clientes e pets de uma clínica veterinária.

A aplicação permite:

- Cadastro de clientes
- Listagem de clientes
- Cadastro de pets
- Listagem de pets
- Registro e login de usuários
- Consumo assíncrono da API no frontend

---

## Tecnologias utilizadas

### Backend
- Node.js
- Express
- MongoDB
- Mongoose
- JWT
- Swagger

### Frontend
- React
- Vite
- Axios
- React Router DOM

### Infraestrutura
- Docker
- Docker Compose

---

## Pré-requisitos

Instalar:

- Node.js v22+
- Docker Desktop
- Git

---

## Como executar

### 1. Clonar o projeto

```bash
git clone https://github.com/gustavohm3/vetcare.git
```

---

### 2. Subir o MongoDB

```bash
docker compose up -d
```

---

### 3. Rodar o backend

```bash
cd backend
npm install
npm run dev
```

Backend disponível em:

http://localhost:5000

---

### 4. Rodar o frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend disponível em:

http://localhost:5173

---

## Documentação Swagger

A documentação da API está disponível em:

http://localhost:5000/api-docs

---

## Variáveis de ambiente

Criar arquivo `.env` dentro de `backend`:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/vetcare
JWT_SECRET=segredo123
```

---

## Endpoints principais

### Autenticação
- POST /auth/register
- POST /auth/login

### Clientes
- GET /clients
- POST /clients
- PUT /clients/:id
- DELETE /clients/:id

### Pets
- GET /pets
- POST /pets
- PUT /pets/:id
- DELETE /pets/:id

---

## Autor

Gustavo Henrique