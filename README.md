# 🌍 WorldWise – Travel Tracking Application

A modern React-based travel application that allows users to mark cities they have visited on an interactive map. The project demonstrates client-side routing, state management using React Context API, custom hooks, and a mock REST API powered by **json-server**.

---

## 📸 Preview

<img width="3000" height="1742" alt="image" src="https://github.com/user-attachments/assets/b4a86073-b4ec-493c-be63-9619aea40363" />
<img width="2997" height="1699" alt="image" src="https://github.com/user-attachments/assets/c10e4514-96af-4fdb-92e0-768c3f9248ab" />
<img width="2986" height="1727" alt="image" src="https://github.com/user-attachments/assets/ca53929e-3074-48b3-af56-4eafcdc547be" />
<img width="2990" height="1743" alt="image" src="https://github.com/user-attachments/assets/d39f3678-df46-41f2-aca1-631b38d73012" />


---

# ✨ Features

* 🗺️ Interactive map for tracking visited cities
* 📍 Add, view, and manage visited locations
* 🔍 Retrieve map coordinates using URL parameters
* 🌎 Browser geolocation support
* 🔐 Authentication flow using React Context
* 📱 Fully responsive design
* ⚡ Fast development with Vite
* 🎯 Modern React architecture
* 🗃️ Mock REST API using json-server

---

# 🛠️ Built With

### Frontend

* React
* React Router DOM
* Context API
* CSS Modules
* Vite

### Development Tools

* ESLint
* npm
* json-server

---

# 📂 Project Structure

```text
my-app/
├── data/
│   └── cities.json              # Mock REST API database
│
├── dist/                        # Production build output
│
├── public/
│   ├── bg.jpg                   # Background image
│   ├── icon.png                 # Application icon
│   ├── img-1.jpg                # Promotional image
│   ├── img-2.jpg
│   ├── logo.png                 # WorldWise logo
│   ├── vite.svg                 # Default Vite asset
│   └── _redirects               # Netlify SPA routing (recommended)
│
├── src/
│   ├── assets/                  # Static assets
│   ├── components/              # Reusable UI components
│   ├── contexts/                # React Context providers
│   ├── hooks/                   # Custom React hooks
│   ├── pages/                   # Application pages
│   ├── App.css
│   ├── App.jsx                  # Main routing component
│   ├── index.css
│   └── main.jsx                 # Application entry point
│
├── .gitignore
├── .nvmrc                       # Node.js version (v20)
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

---

# 🚀 Getting Started

## Prerequisites

Install the following before running the project:

* Node.js (v20 or later)
* npm

Verify installation:

```bash
node -v
npm -v
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/Rizwan-46/worldwise.git
```

Navigate to the project folder:

```bash
cd worldwise
```

Install dependencies:

```bash
npm install
```

---

# ▶️ Running the Project

## Start the React development server

```bash
npm run dev
```

---

## Start the mock REST API

Open another terminal and run:

```bash
npm run server
```

or

```bash
npx json-server --watch data/cities.json --port 8000
```

The API will be available at:

```
http://localhost:8000/cities
```

---

# 📦 Build for Production

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

# 🌐 Deployment Notes

This project is optimized for deployment on static hosting providers such as **Netlify** and **Vercel**.

## Node Version

The `.nvmrc` file locks the build environment to:

```
Node.js v20
```

This ensures consistent builds across local development and cloud deployment.

---

## Case-Sensitive Imports

All component imports must exactly match their filenames.

Example:

```jsx
import Sidebar from "./Sidebar";
```

Avoid mismatched casing:

```jsx
import sidebar from "./sidebar";
```

Linux deployment servers are case-sensitive and incorrect imports will cause build failures.

---

## Netlify SPA Routing

React Router requires a redirect rule.

Create a file:

```text
public/_redirects
```

with the following content:

```text
/* /index.html 200
```

This prevents 404 errors when refreshing browser pages.

---

## API Limitation

The project currently uses **json-server**, which only runs locally.

For production deployments, replace the local API with a cloud backend such as:

* Supabase
* Firebase
* Appwrite
* MongoDB Atlas + Express API

---

# 📜 Available Scripts

| Command           | Description                       |
| ----------------- | --------------------------------- |
| `npm install`     | Install project dependencies      |
| `npm run dev`     | Start Vite development server     |
| `npm run build`   | Create production build           |
| `npm run preview` | Preview production build          |
| `npm run server`  | Start json-server (if configured) |
| `npm run lint`    | Run ESLint                        |

---

# 🏗️ React Concepts Demonstrated

* React Components
* React Router
* Context API
* Custom Hooks
* State Management
* Props
* Controlled Forms
* CSS Modules
* Dynamic Routing
* API Fetching
* Geolocation API
* URL Search Parameters

---

# 🔮 Future Improvements

* User registration
* Real authentication backend
* Persistent cloud database
* Search cities
* Dark mode
* Favorite cities
* Weather integration
* Travel statistics dashboard
* Offline support (PWA)

---

# 👨‍💻 Author

**Rizwan**

GitHub: https://github.com/Rizwan-46
