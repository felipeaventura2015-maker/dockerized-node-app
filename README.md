# 🐳 Dockerized Node App

<p align="center">
  <img src="https://skillicons.dev/icons?i=nodejs,docker,js,linux,github" />
</p>

<p align="center">

![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-Application-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Linux](https://img.shields.io/badge/Linux-Environment-FCC624?style=for-the-badge&logo=linux&logoColor=black)
![GitHub](https://img.shields.io/badge/GitHub-Versioning-181717?style=for-the-badge&logo=github)

</p>

---

# 📖 About The Project

This project demonstrates practical knowledge using:

- 🐳 Docker
- ⚙️ Docker Compose
- 🌐 Containerized applications
- 🖥️ Linux environment
- 📦 Node.js applications
- 🔧 GitHub version control

The application runs inside a Docker container and can be executed using Docker Compose or Docker Run.

---

# 🛠️ Technologies

| Technology | Purpose |
|------------|----------|
| Node.js | Backend application |
| Docker | Containerization |
| Docker Compose | Container orchestration |
| JavaScript | Main language |
| Linux | Development environment |
| GitHub | Version control |

---

# 📂 Project Structure

```bash
.
├── Dockerfile
├── docker-compose.yml
├── package.json
├── package-lock.json
├── app.js
└── README.md
```

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/feliperodrigssss/dockerized-node-app.git
```

```bash
cd dockerized-node-app
```

---

# 🐳 Running With Docker

## Docker Run

```bash
docker run -d -p 6000:6000 feliperodrigssss/appnode1.1
```

Application available at:

```bash
http://localhost:6000
```

---

# ⚙️ Running With Docker Compose

## Start Containers

```bash
docker compose up
```

## Run In Background

```bash
docker compose up -d
```

---

# 📄 Docker Compose Example

```yml
services:
  app:
    image: feliperodrigssss/appnode1.1
    container_name: app
    ports:
      - "6000:6000"
```

---

# 🐋 Docker Image

```bash
feliperodrigssss/appnode1.1
```

---

# 🌍 Deploy Online

You can deploy this application using:

- Railway
- Render
- Fly.io
- AWS EC2
- DigitalOcean
- Google Cloud

## Simple Deploy Using Render

1. Push project to GitHub
2. Create Render account
3. Click:
   - New +
   - Web Service
4. Connect repository
5. Render detects Dockerfile automatically
6. Deploy 🚀

---

# 📌 Useful Docker Commands

## List Running Containers

```bash
docker ps
```

## Show Container Logs

```bash
docker logs app
```

## Stop Container

```bash
docker stop app
```

## Remove Container

```bash
docker rm app
```

## List Docker Images

```bash
docker images
```

---

# 🎯 Project Goal

This project was created to demonstrate practical skills with:

- Docker containers
- Docker Compose
- Node.js applications
- Linux environments
- GitHub repositories
- DevOps fundamentals

---

# 📸 Preview

<p align="center">
  <img width="250" src="https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png">
</p>

---

# 👨‍💻 Author

## Felipe Rodrigues

- GitHub: https://github.com/feliperodrigssss

---

<p align="center">

## ⭐ Star this repository if you liked the project!

</p>
