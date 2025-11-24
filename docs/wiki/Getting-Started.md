# Getting Started

This page explains how to install, configure, and run **AdvancedAppFrontEnd** on Windows and macOS.

---

## Prerequisites

### Git

You’ll need Git to clone the repository:

- https://git-scm.com/downloads

### Node.js and npm

This project requires:

- **Node.js** ≥ 18
- **npm** (bundled with Node.js)

Check your versions:

```bash
node -v
npm -v
```

If Node is below 18, upgrade before continuing.

---

## Clone the Repository

```bash
git clone https://github.com/Enetact/AdvancedAppFrontEnd.git
cd AdvancedAppFrontEnd
```

---

## Windows Setup

Use the PowerShell script `setup-windows.ps1`.

This script will:

1. Check Node.js and ensure the version is at least 18.
2. Install or update Node via `winget` or `choco` if available.
3. Install dependencies with `npm ci` (if `package-lock.json` exists) or `npm install --include=dev`.
4. Start the dev server with `npm run dev`.

### Allow Local Scripts (if needed)

Run PowerShell as Administrator:

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

Confirm with `Y`.

### Run the Setup Script

```powershell
cd path\to\AdvancedAppFrontEnd
.\setup-windows.ps1
```

To skip Node installation (if you manage Node yourself):

```powershell
.\setup-windows.ps1 -SkipNodeInstall
```

---

## macOS Setup

On macOS you can reuse the Linux-style script `setup-linux.sh`, which is designed to:

1. Ensure Node.js ≥ 18 (install via **nvm** if needed).
2. Install dependencies (`npm ci` or `npm install --include=dev`).
3. Run `npm run dev`.

From Terminal:

```bash
cd /path/to/AdvancedAppFrontEnd
chmod +x setup-linux.sh
./setup-linux.sh
```

---

## Manual Setup (Any OS)

You can always set things up manually:

```bash
cd /path/to/AdvancedAppFrontEnd
npm install --include=dev
npm run dev
```

---

## Build for Production

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

See the [CHANGELOG](../../CHANGELOG.md) for what’s included in the latest version.
