# AdvancedAppFrontEnd – Install and Setup Guide (Windows and macOS)

This document explains how to install, configure, and run AdvancedAppFrontEnd on Windows and macOS.

The project is a React + Vite single page application with React Router DOM, Bootstrap 5 loaded by CDN, and PWA support.

---

## 1. Prerequisites

### 1.1 Git

You will need Git to clone the repository.

- Download from: https://git-scm.com/downloads

### 1.2 Node.js and npm

This project requires:

- Node.js version 18 or higher.
- npm (bundled with Node.js).

The setup scripts check that Node is at least version 18.

Check:

```bash
node -v
npm -v
```

---

## 2. Clone the repository

```bash
git clone https://github.com/Enetact/AdvancedAppFrontEnd.git
cd AdvancedAppFrontEnd
```

---

## 3. Windows setup

Use the PowerShell script `setup-windows.ps1`.

This script:

1. Verifies or installs Node.js (version 18 or newer) using `winget` or `choco` if available.
2. Installs npm dependencies using `npm ci` when `package-lock.json` exists, otherwise `npm install --include=dev`.
3. Starts the Vite dev server with `npm run dev`.

### 3.1 Allow local scripts (if needed)

Open PowerShell as Administrator and run:

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

Choose Yes when prompted.

### 3.2 Run the script

From PowerShell in the project directory:

```powershell
.\setup-windows.ps1
```

To skip Node installation (if you manage Node separately):

```powershell
.\setup-windows.ps1 -SkipNodeInstall
```

When the script finishes, open the printed localhost URL in your browser.

---

## 4. macOS and Linux setup

Use `setup-linux.sh`. While named for Linux, it also works on macOS with a shell and curl installed.

This script:

1. Ensures Node.js is installed.
2. Installs a suitable Node version with `nvm` if Node is missing or too old.
3. Installs dependencies (`npm ci` or `npm install --include=dev`).
4. Starts `npm run dev`.

From Terminal:

```bash
cd /path/to/AdvancedAppFrontEnd
chmod +x setup-linux.sh
./setup-linux.sh
```

---

## 5. Manual installation (any OS)

If you do not want to use the helper scripts:

```bash
cd /path/to/AdvancedAppFrontEnd
npm install --include=dev
npm run dev
```

Open the printed localhost URL.

---

## 6. Building for production

Create a production build:

```bash
npm run build
```

Preview the build locally:

```bash
npm run preview
```

---

## 7. Troubleshooting

### Node version too old

If Node is below version 18, the setup scripts either update it or ask you to update manually.

### Dependencies fail to install

Delete `node_modules` and optionally `package-lock.json`, then run:

```bash
npm install --include=dev
```

After that, start the dev server with `npm run dev`.
