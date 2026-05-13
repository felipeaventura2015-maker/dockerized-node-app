<div align="center">

# 🐳 Dockerized Node App

Aplicação Node.js totalmente containerizada usando Docker e Docker Compose.

<img src="https://skillicons.dev/icons?i=docker,nodejs,js,github,linux" />

![Docker](https://img.shields.io/badge/Docker-Containerized-blue?style=for-the-badge&logo=docker)
![NodeJS](https://img.shields.io/badge/Node.js-Backend-green?style=for-the-badge&logo=node.js)
![Linux](https://img.shields.io/badge/Linux-Ubuntu-orange?style=for-the-badge&logo=linux)
![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)

</div>

---

# 📖 Sobre o projeto

O objetivo deste projeto é demonstrar conhecimentos práticos em:

- 🐳 Docker
- 📦 Docker Compose
- ⚙️ Containerização de aplicações
- 🌐 Publicação de imagens Docker
- 🖥️ Linux
- 🔧 Node.js
- 📁 GitHub

A aplicação roda dentro de um container Docker e pode ser iniciada facilmente utilizando Docker Compose ou Docker Run.

---

# 🛠️ Tecnologias utilizadas

| Tecnologia | Descrição |
|---|---|
| Node.js | Backend da aplicação |
| Docker | Containerização |
| Docker Compose | Orquestração |
| JavaScript | Linguagem principal |
| Linux | Ambiente de desenvolvimento |
| GitHub | Versionamento |

---

# 📂 Estrutura do projeto

```bash
.
├── Dockerfile
├── docker-compose.yml
├── package.json
├── package-lock.json
├── app.js
└── README.md
🐳 Executando com Docker
🔹 Rodando com Docker Run
docker run -d -p 6000:6000 feliperodrigssss/appnode1.1

A aplicação ficará disponível em:

http://localhost:6000
⚙️ Executando com Docker Compose
🔹 Subindo os containers
docker compose up

Ou em background:

docker compose up -d
📄 Exemplo do docker-compose.yml
services:
  app:
    image: feliperodrigssss/appnode1.1
    container_name: app
    ports:
      - "6000:6000"
🐋 Imagem Docker
🔹 Docker Hub
feliperodrigssss/appnode1.1
🚀 Como fazer deploy online

Você pode publicar sua aplicação gratuitamente utilizando:

Plataforma	Tipo
Railway	Fácil para iniciantes
Render	Deploy automático
Fly.io	Docker nativo
AWS EC2	Profissional
DigitalOcean	VPS
Google Cloud	Cloud profissional
🔹 Deploy simples usando Render
Suba o projeto no GitHub
Crie conta no Render
Clique em:
New +
Web Service
Conecte seu GitHub
Selecione o repositório
O Render detectará o Dockerfile automaticamente
Deploy 🚀
🎯 Objetivo

Este projeto foi criado para praticar e demonstrar habilidades em:

criação de containers
Docker Compose
publicação de imagens
execução de aplicações Node.js
ambientes Linux
GitHub
conceitos DevOps
📸 Preview
🐳 Docker Container Running
<p align="center"> <img width="700" src="https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png"> </p>
📌 Comandos úteis
Ver containers rodando
docker ps
Ver logs
docker logs app
Parar container
docker stop app
Remover container
docker rm app
Ver imagens Docker
docker images
👨‍💻 Autor
Felipe Rodrigues
GitHub: https://github.com/feliperodrigssss
<div align="center">
⭐ Se gostou do projeto, deixe uma estrela no repositório!
</div> ```
