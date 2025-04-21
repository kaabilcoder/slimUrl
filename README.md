# SlimURL - Modern URL Shortener

<div align="center">
  <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" />
  <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" />
</div>

## 📝 Description

SlimURL is a modern, fast, and efficient URL shortening service built with TypeScript, Express.js, and MongoDB. It features a clean, responsive UI powered by Tailwind CSS and provides an intuitive way to create and manage shortened URLs.

### ✨ Features

- **URL Shortening**: Convert long URLs into short, manageable links
- **Click Tracking**: Monitor how many times your shortened URLs have been accessed
- **Copy to Clipboard**: One-click copying of shortened URLs
- **History Table**: View all your shortened URLs with click statistics
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean and intuitive interface built with Tailwind CSS

## 🚀 Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Setup Steps

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
   MONGODB_URI=your_mongodb_connection_string
   DB_NAME=urlShortner
   PORT=8000
   ```

4. **Build the project**

   ```bash
   npm run build
   ```

5. **Start the server**

   ```bash
   npm start
   ```

   For development:

   ```bash
   npm run dev
   ```

6. **Access the application**
   Open your browser and navigate to `http://localhost:8000/home`

## 🛠️ Tech Stack

- **Backend**

  - Node.js
  - Express.js
  - TypeScript
  - MongoDB with Mongoose

- **Frontend**
  - EJS Templates
  - Tailwind CSS
  - Font Awesome Icons
  -

## 📧 Contact

If you have any questions or suggestions, feel free to open an issue.

---

<div align="center">
  Made with ❤️ by saurabh
</div>
