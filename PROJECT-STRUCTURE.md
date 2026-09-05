# AdvancedAppFrontEnd - Project Structure

## Overview

This is a **React 19** Progressive Web Application (PWA) built with **Vite** as the build tool and bundler. The application uses React Router for navigation and is structured as a single-page application with multiple route-based pages.

---

## Technology Stack

- **Framework:** React 19.2.0
- **Routing:** React Router DOM 7.9.4
- **Build Tool:** Vite 7.1.12
- **Dev Server:** Vite Development Server
- **Package Manager:** npm
- **Node Version:** >=18.0.0

---

## Project Hierarchy

```
AdvancedAppFrontEnd/
│
├── 📁 public/                      # Static assets served directly
│   └── (PWA icons, manifest files)
│
├── 📁 src/                         # Source code
│   ├── 📄 main.jsx                 # Application entry point
│   ├── 📄 App.jsx                  # Root component with routing
│   ├── 📄 styles.css               # Global styles
│   ├── 📄 sw-register.js           # Service worker registration
│   │
│   └── 📁 pages/                   # Page components (routes)
│       ├── 📄 Home.jsx             # Home page (/)
│       ├── 📄 About.jsx            # About page (/about)
│       ├── 📄 Club.jsx             # Club page (/club)
│       ├── 📄 Community.jsx        # Community page (/community)
│       ├── 📄 Gallery.jsx          # Gallery page (/gallery)
│       └── 📄 Roadmap.jsx          # Roadmap page (/roadmap)
│
├── 📁 docs/                        # Documentation
│   └── 📁 wiki/                    # Wiki documentation
│
├── 📁 dist/                        # Production build output
│   ├── 📁 assets/                  # Bundled JS/CSS assets
│   ├── 📁 icons/                   # PWA icons
│   ├── 📄 index.html               # Production HTML
│   ├── 📄 manifest.json            # PWA manifest
│   └── 📄 service-worker.js        # Service worker
│
├── 📁 node_modules/                # npm dependencies
│
├── 📄 index.html                   # HTML template
├── 📄 vite.config.js               # Vite configuration
├── 📄 package.json                 # npm configuration
├── 📄 jsconfig.json                # JavaScript IDE configuration
│
├── 📄 AdvancedAppFrontEnd.sln      # Visual Studio solution
├── 📄 AdvancedAppFrontEnd.esproj   # Visual Studio project file
│
├── 📄 README.md                    # Project documentation
├── 📄 INSTALLATION.md              # Installation guide
├── 📄 CHANGELOG.md                 # Version history
├── 📄 PROMPT-ENGINEERING.md        # Development guidelines
│
└── 🔧 Setup Scripts
    ├── 📄 setup-windows.ps1        # Windows setup script
    ├── 📄 setup-linux.sh           # Linux setup script
    ├── 📄 runwindows.ps1           # Windows run script
    ├── 📄 bashcli.sh               # Bash CLI helper
    └── 📄 install-and-run-macos.sh.txt  # macOS instructions
```

---

## Application Architecture

### Entry Point Flow

1. **index.html** - HTML template loads the app
2. **src/main.jsx** - Bootstraps React app, registers service worker
3. **src/App.jsx** - Root component with React Router configuration
4. **src/pages/** - Individual page components

### Routing Structure

| Route        | Component     | Description        |
| ------------ | ------------- | ------------------ |
| `/`          | Home.jsx      | Landing page       |
| `/about`     | About.jsx     | About information  |
| `/club`      | Club.jsx      | Club details       |
| `/community` | Community.jsx | Community features |
| `/gallery`   | Gallery.jsx   | Image gallery      |
| `/roadmap`   | Roadmap.jsx   | Project roadmap    |

---

## Build & Development

### Available Scripts

```bash
npm run dev      # Start development server (Vite)
npm run build    # Build for production
npm run preview  # Preview production build
npm run setup    # Install dependencies
npm start        # Alias for npm run dev
```

### Development Server

- **URL:** http://localhost:5173 (default Vite port)
- **Hot Module Replacement (HMR):** Enabled
- **Fast Refresh:** React Fast Refresh enabled

---

## IDE Support

### Visual Studio

- Open **AdvancedAppFrontEnd.sln** in Visual Studio
- Solution includes proper build commands and folder structure
- Press F5 to start development server

### VS Code / Other IDEs

- **jsconfig.json** provides:
  - IntelliSense for JavaScript and React
  - Path aliases (`@/`, `@pages/`, `@styles/`)
  - JSX syntax support
  - Import suggestions

---

## Progressive Web App (PWA)

This project is configured as a PWA with:

- **Service Worker** - Offline support and caching
- **Web Manifest** - Install to home screen
- **Icons** - Various sizes for different devices

Service worker registration happens in `src/sw-register.js` and is called from `src/main.jsx`.

---

## Key Features

✅ Modern React 19 with hooks  
✅ Fast development with Vite HMR  
✅ Client-side routing with React Router  
✅ PWA capabilities (offline-first)  
✅ Cross-platform setup scripts  
✅ Visual Studio integration

---

## Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start development server:**

   ```bash
   npm run dev
   ```

3. **Open in browser:**

   ```
   http://localhost:5173
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## Notes

- The project uses **ES Modules** (`"type": "module"` in package.json)
- Requires **Node.js >= 18.0.0**
- Built files are output to the `dist/` directory
- Service worker enables offline functionality

---

_Last Updated: December 25, 2024_
