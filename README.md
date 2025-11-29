# 🔗 SlimURL

<div align="center">

![SlimURL Logo](https://img.shields.io/badge/SlimURL-URL%20Shortener-blue?style=for-the-badge)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://hub.docker.com/r/kaabilcoder/slimurl-fullstack)

**A modern, fast, and efficient URL shortening service with real-time analytics**

[Live Demo](http://54.242.102.142:8000/) • [Report Bug](https://github.com/kaabilcoder/slimUrl/issues) • [Request Feature](https://github.com/kaabilcoder/slimUrl/issues)

</div>

---

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Local Installation](#local-installation)
  - [Docker Installation](#-docker-installation)
- [Configuration](#-configuration)
- [Usage](#-usage)
- [Deployment](#-deployment)
- [API Documentation](#-api-documentation)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 About

**SlimURL** is a modern, full-stack URL shortening service built with TypeScript, Express.js, and MongoDB. It provides a clean, responsive interface for creating and managing shortened URLs with real-time click tracking and analytics.

Whether you're sharing links on social media, tracking marketing campaigns, or simply need shorter URLs, SlimURL offers a fast and reliable solution.

---

## ✨ Features

- 🔗 **URL Shortening**: Convert long URLs into short, manageable links
- 📊 **Click Tracking**: Monitor how many times your shortened URLs have been accessed
- 📋 **Copy to Clipboard**: One-click copying of shortened URLs
- 📜 **History Table**: View all your shortened URLs with detailed click statistics
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- 🎨 **Modern UI**: Clean and intuitive interface built with Tailwind CSS
- ⚡ **Fast Performance**: Optimized backend with Express.js and MongoDB
- 🔒 **Secure**: Built with TypeScript for type safety and reliability
- 🐳 **Docker Support**: Easy deployment with Docker containerization

---

## 🛠 Tech Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: MongoDB with Mongoose ODM

### Frontend
- **Template Engine**: EJS
- **Styling**: Tailwind CSS
- **Icons**: Font Awesome

### DevOps
- **Containerization**: Docker
- **Cloud Platform**: AWS EC2
- **CI/CD**: GitHub Actions (optional)

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **MongoDB** (v4.4 or higher) - [Download](https://www.mongodb.com/try/download/community)
- **npm** or **yarn** - Comes with Node.js
- **Docker** (optional) - [Download](https://www.docker.com/get-started)

### Local Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kaabilcoder/slimUrl.git
   cd slimUrl
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   
   Create a `.env` file in the root directory:
   ```env
   MONGODB_URI=mongodb://localhost:27017/urlShortner
   DB_NAME=urlShortner
   PORT=8000
   NODE_ENV=development
   ```

4. **Build the project**
   ```bash
   npm run build
   ```

5. **Start the server**
   
   **Production mode:**
   ```bash
   npm start
   ```
   
   **Development mode (with hot reload):**
   ```bash
   npm run dev
   ```

6. **Access the application**
   
   Open your browser and navigate to:
   ```
   http://localhost:8000/home
   ```

---

## 🐳 Docker Installation

SlimURL is available as a pre-built Docker image, making deployment incredibly simple!

### Quick Start with Docker

1. **Pull the Docker image**
   ```bash
   docker pull kaabilcoder/slimurl-fullstack:v1
   ```

2. **Run the container**
   ```bash
   docker run -d \
     --name slimurl \
     -p 8000:8000 \
     -e MONGODB_URI=your_mongodb_connection_string \
     -e DB_NAME=urlShortner \
     -e PORT=8000 \
     kaabilcoder/slimurl-fullstack:v1
   ```

3. **Access the application**
   ```
   http://localhost:8000/home
   ```
---

## ⚙️ Configuration

### Environment Variables

| Variable | Description | Default | Required |
|----------|-------------|---------|----------|
| `MONGODB_URI` | MongoDB connection string | - | ✅ |
| `DB_NAME` | Database name | `urlShortner` | ✅ |
| `PORT` | Application port | `8000` | ✅ |
| `NODE_ENV` | Environment mode | `development` | ❌ |

### MongoDB Setup

**Local MongoDB:**
```env
MONGODB_URI=mongodb://localhost:27017/urlShortner
```

**MongoDB Atlas (Cloud):**
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/urlShortner?retryWrites=true&w=majority
```

---

## 💻 Usage

### Creating a Short URL

1. Navigate to the home page at `http://localhost:8000/home`
2. Enter your long URL in the input field
3. Click "Shorten URL"
4. Copy your shortened URL with one click

### Viewing Analytics

- The dashboard displays all your shortened URLs
- View click counts for each URL
- Monitor URL performance in real-time

### Accessing Shortened URLs

Navigate to: `http://localhost:8000/url/{shortId}`

---

## 🌐 Deployment

### AWS EC2 Deployment

SlimURL is deployed on AWS EC2 with Docker for easy scaling and management.

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Kaabil Coder**

- GitHub: [@kaabilcoder](https://github.com/kaabilcoder)
- Docker Hub: [kaabilcoder](https://hub.docker.com/u/kaabilcoder)

---

## 🙏 Acknowledgments

- [Express.js](https://expressjs.com/) - Fast, unopinionated web framework
- [MongoDB](https://www.mongodb.com/) - NoSQL database
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Font Awesome](https://fontawesome.com/) - Icon library

---

## 📞 Support

If you have any questions or need help, feel free to:

- Open an [issue](https://github.com/kaabilcoder/slimUrl/issues)
- Reach out via [GitHub Discussions](https://github.com/kaabilcoder/slimUrl/discussions)

---

<div align="center">

**⭐ Star this repository if you find it helpful! ⭐**

Made with ❤️ by [Kaabil Coder](https://github.com/kaabilcoder)

</div>
