<div align="center">

# 🔗 SlimURL

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://hub.docker.com/r/kaabilcoder/slimurl-fullstack)
[![AWS EC2](https://img.shields.io/badge/AWS_EC2-FF9900?style=for-the-badge&logo=amazonec2&logoColor=white)](https://aws.amazon.com/ec2/)
[![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)](https://github.com/kaabilcoder/slimUrl/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

**A modern, production-grade URL shortening service — containerized, CI/CD powered, and cloud-deployed.**

[🌐 Live Demo](http://54.242.102.142:8000/) · [🐛 Report Bug](https://github.com/kaabilcoder/slimUrl/issues) · [✨ Request Feature](https://github.com/kaabilcoder/slimUrl/issues)

</div>

---

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Architecture](#-architecture)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Local Development](#local-development)
  - [Docker (Quick Start)](#-docker-quick-start)
- [Environment Variables](#-environment-variables)
- [DevOps & Deployment](#-devops--deployment)
  - [Multistage Docker Build](#multistage-docker-build)
  - [Docker Health Checks](#docker-health-checks)
  - [GitHub Actions CI/CD](#github-actions-cicd)
  - [AWS EC2 Deployment](#aws-ec2-deployment)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 About

**SlimURL** is a full-stack URL shortening service built with **TypeScript**, **Express.js**, and **MongoDB Atlas**. It is production-ready with a complete DevOps pipeline — multistage Docker builds, automated CI/CD via GitHub Actions, container health checks, and one-click deployment to AWS EC2.

Whether you're sharing links on social media, tracking marketing campaigns, or simply need cleaner URLs — SlimURL is fast, reliable, and battle-tested in the cloud.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔗 **URL Shortening** | Instantly convert long URLs into short, shareable links |
| 📊 **Click Analytics** | Real-time click tracking for every shortened URL |
| 📋 **Copy to Clipboard** | One-click copy for shortened URLs |
| 📜 **URL History** | Full table view of all URLs with statistics |
| 📱 **Responsive Design** | Seamless experience on all screen sizes |
| 🎨 **Modern UI** | Clean interface built with Tailwind CSS & EJS |
| 🐳 **Docker Ready** | Multistage Docker build for minimal production images |
| ♻️ **Health Checks** | Built-in Docker health check for zero-downtime monitoring |
| 🚀 **CI/CD Pipeline** | Automated build, push, and deploy via GitHub Actions |
| ☁️ **Cloud Deployed** | Hosted on AWS EC2 with `--restart unless-stopped` |

---

## 🏗 Architecture

```
┌──────────────────────────────────────────────────────────────────┐
│                        GitHub Repository                         │
│                                                                  │
│  push to main ──► GitHub Actions CI/CD Pipeline                  │
│                        │                                         │
│              ┌─────────▼──────────┐                              │
│              │  1. npm ci + build │                              │
│              │  2. Docker build   │                              │
│              │  3. Push to Hub   │                              │
│              └─────────┬──────────┘                              │
└────────────────────────┼─────────────────────────────────────────┘
                         │ SSH deploy
                         ▼
          ┌──────────────────────────────┐
          │        AWS EC2 Instance      │
          │                              │
          │  ┌────────────────────────┐  │
          │  │   Docker Container     │  │
          │  │   slimurl:latest       │  │
          │  │   Port: 8000           │  │
          │  │   Health: /health      │  │
          │  └──────────┬─────────────┘  │
          └─────────────┼────────────────┘
                        │
                        ▼
          ┌──────────────────────────────┐
          │     MongoDB Atlas (Cloud)    │
          │     urlShortner database     │
          └──────────────────────────────┘
```

---

## 🛠 Tech Stack

### Application

| Layer | Technology |
|---|---|
| **Language** | TypeScript 5.x |
| **Runtime** | Node.js 20 (LTS) |
| **Framework** | Express.js 5.x |
| **Database** | MongoDB Atlas + Mongoose ODM |
| **Templating** | EJS |
| **Styling** | Tailwind CSS + Font Awesome |

### DevOps & Infrastructure

| Tool | Purpose |
|---|---|
| **Docker** | Multistage containerization |
| **Docker Hub** | Container image registry |
| **GitHub Actions** | CI/CD automation pipeline |
| **AWS EC2** | Cloud compute hosting |
| **MongoDB Atlas** | Managed cloud database |

---

## 🚀 Getting Started

### Prerequisites

Ensure the following are installed on your machine:

- [Node.js](https://nodejs.org/) v20+
- [npm](https://www.npmjs.com/) (bundled with Node)
- [Docker](https://www.docker.com/get-started) (for containerized runs)
- A [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account (or local MongoDB)

---

### Local Development

**1. Clone the repository**
```bash
git clone https://github.com/kaabilcoder/slimUrl.git
cd slimUrl
```

**2. Install dependencies**
```bash
npm install
```

**3. Configure environment variables**
```bash
cp .env.example .env
# Edit .env with your actual MongoDB URI and settings
```

**4. Build & start**
```bash
# Build TypeScript → JavaScript
npm run build

# Start production server
npm start

# — or — build + start in one step (dev workflow)
npm run dev
```

**5. Open in browser**
```
http://localhost:8000/home
```

---

### 🐳 Docker Quick Start

Prefer containers? Get running in seconds with the pre-built image from Docker Hub.

**1. Pull the image**
```bash
docker pull kaabilcoder/slimurl-fullstack:latest
```

**2. Run the container**
```bash
docker run -d \
  --name slimurl \
  --restart unless-stopped \
  -p 8000:8000 \
  -e MONGODB_URI="mongodb+srv://user:pass@cluster.mongodb.net/urlShortner?retryWrites=true&w=majority" \
  -e DB_NAME=urlShortner \
  -e PORT=8000 \
  -e NODE_ENV=production \
  kaabilcoder/slimurl-fullstack:latest
```

**3. Verify it's healthy**
```bash
docker ps          # status should be "healthy"
docker logs slimurl
```

**4. Access the app**
```
http://localhost:8000/home
```

---

## 🔑 Environment Variables

Copy `.env.example` to `.env` and fill in your values:

```bash
cp .env.example .env
```

| Variable | Description | Example | Required |
|---|---|---|---|
| `MONGODB_URI` | Full MongoDB Atlas connection string | `mongodb+srv://user:pass@cluster...` | ✅ |
| `DB_NAME` | MongoDB database name | `urlShortner` | ✅ |
| `PORT` | Port the server listens on | `8000` | ✅ |
| `NODE_ENV` | Environment mode | `production` | ❌ |

> **⚠️ Never commit your `.env` file.** It is already listed in `.gitignore`.
> For CI/CD deployments, use GitHub Secrets (see below).

---

## ⚙️ DevOps & Deployment

### Multistage Docker Build

The `Dockerfile` uses a **two-stage build** to keep the production image lean and secure:

```
┌─────────────────────────────────────┐
│  Stage 1 — builder (node:20-alpine) │
│  • Install ALL deps (including dev) │
│  • Run tsc: compile TS → JS         │
│  • Copy views into dist/            │
└──────────────────┬──────────────────┘
                   │  COPY --from=builder
┌──────────────────▼──────────────────┐
│  Stage 2 — final (node:20-alpine)   │
│  • Install production deps ONLY     │
│  • Copy compiled dist/ output       │
│  • Install curl (for health check)  │
│  • EXPOSE 8000                      │
│  • CMD: node dist/index.js          │
└─────────────────────────────────────┘
```

**Build locally:**
```bash
docker build -t slimurl:local .
```

**Run your local build:**
```bash
docker run -d \
  --name slimurl \
  -p 8000:8000 \
  --env-file .env \
  slimurl:local
```

---

### Docker Health Checks

The container includes a **built-in health check** to ensure the application is responsive:

```dockerfile
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD curl -f http://localhost:8000 || exit 1
```

| Parameter | Value | Description |
|---|---|---|
| `--interval` | `30s` | Check every 30 seconds |
| `--timeout` | `5s` | Fail if no response in 5s |
| `--start-period` | `10s` | Grace period on startup |
| `--retries` | `3` | Mark unhealthy after 3 failures |

**Inspect health status:**
```bash
docker inspect --format='{{json .State.Health}}' slimurl | jq
```

---

### GitHub Actions CI/CD

Every push to `main` automatically triggers the full pipeline:

```
push → main
        │
        ▼
 ┌──────────────────────┐
 │  Job 1: build-and-push │
 │  ─────────────────── │
 │  1. Checkout code    │
 │  2. Setup Node 20    │
 │  3. npm ci           │
 │  4. npm run build    │
 │  5. Docker login     │
 │  6. Build & push →   │
 │     Docker Hub       │
 └──────────┬───────────┘
            │ needs: build-and-push
            ▼
 ┌──────────────────────┐
 │  Job 2: deploy       │
 │  ─────────────────── │
 │  1. SSH into EC2     │
 │  2. Write .env from  │
 │     GitHub Secrets   │
 │  3. docker pull      │
 │  4. docker stop/rm   │
 │  5. docker run       │
 └──────────────────────┘
```

**Required GitHub Secrets** — set these in `Settings → Secrets and variables → Actions`:

| Secret | Description |
|---|---|
| `DOCKERHUB_USERNAME` | Your Docker Hub username |
| `DOCKERHUB_TOKEN` | Docker Hub access token (not password) |
| `EC2_HOST` | Public IP or DNS of your EC2 instance |
| `EC2_SSH_KEY` | Private SSH key for EC2 access (`~/.ssh/id_rsa`) |
| `MONGODB_URI` | Full MongoDB Atlas connection string |

---

### AWS EC2 Deployment

The GitHub Actions pipeline auto-deploys on every `main` push. For **manual deployment**:

**1. SSH into your EC2 instance**
```bash
ssh -i your-key.pem ubuntu@<EC2_PUBLIC_IP>
```

**2. Install Docker (one-time setup)**
```bash
sudo apt update && sudo apt install -y docker.io
sudo systemctl enable --now docker
sudo usermod -aG docker ubuntu
```

**3. Set environment and run**
```bash
echo "MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/urlShortner?retryWrites=true&w=majority" > .env
echo "DB_NAME=urlShortner" >> .env
echo "PORT=8000" >> .env

docker pull kaabilcoder/slimurl-fullstack:latest

docker stop slimurl || true
docker rm slimurl || true

docker run -d \
  --name slimurl \
  --restart unless-stopped \
  -p 8000:8000 \
  --env-file .env \
  kaabilcoder/slimurl-fullstack:latest
```

**4. Open EC2 Security Group ports**

Make sure your EC2 Security Group allows inbound traffic on **port 8000** (or use Nginx as a reverse proxy on port 80/443).

---

## 💻 Usage

### Shorten a URL
1. Navigate to `http://localhost:8000/home`
2. Paste your long URL into the input field
3. Click **Shorten URL**
4. Click the copy button to grab your short link

### View Analytics
- The dashboard lists all shortened URLs
- Each row shows the original URL, short ID, and total click count
- Stats update in real-time on every redirect

### Redirect
```
GET http://localhost:8000/url/:shortId
```
Automatically redirects to the original URL and increments the click counter.

---

## 📁 Project Structure

```
slimUrl/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions CI/CD pipeline
├── src/
│   ├── index.ts                # App entry point
│   ├── routes/                 # Express route handlers
│   ├── models/                 # Mongoose schemas
│   ├── controllers/            # Business logic
│   └── views/                  # EJS templates
├── dist/                       # Compiled JavaScript output
├── Dockerfile                  # Multistage Docker build
├── .dockerignore
├── .env.example                # Environment variable template
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🤝 Contributing

Contributions are what make open source great. Any contribution is **greatly appreciated**!

1. **Fork** the repository
2. Create your feature branch
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. Commit your changes
   ```bash
   git commit -m 'feat: add amazing feature'
   ```
4. Push to your branch
   ```bash
   git push origin feature/amazing-feature
   ```
5. Open a **Pull Request** against `main`

> Please follow [conventional commits](https://www.conventionalcommits.org/) for commit messages.

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

**Built with ❤️ by [Kaabil Coder](https://github.com/kaabilcoder)**

[![GitHub](https://img.shields.io/badge/GitHub-kaabilcoder-181717?style=flat-square&logo=github)](https://github.com/kaabilcoder)
[![Docker Hub](https://img.shields.io/badge/Docker_Hub-kaabilcoder-2496ED?style=flat-square&logo=docker&logoColor=white)](https://hub.docker.com/u/kaabilcoder)

⭐ **Star this repo if it helped you!** ⭐

</div>
