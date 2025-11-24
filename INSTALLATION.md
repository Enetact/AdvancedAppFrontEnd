# AdvancedAppFrontEnd – Install and Setup Guide (Windows / macOS)

This document explains how to install, configure, and run the **AdvancedAppFrontEnd (Club PWA Prototype)** on Windows and macOS.  
The project is a React + Vite Single Page Application (SPA) with React Router and PWA support.

---

## 1. Prerequisites

### 1.1 Git

You will need Git to clone the repository.

- Download from: https://git-scm.com/downloads  
- During installation, you can generally accept the defaults.

### 1.2 Node.js and npm

This project requires:

- **Node.js**: version **18 or higher**
- **npm**: installed automatically with Node.js

Recommended:

- Use the latest LTS release (Node 18 or 20).

Check your versions:

```bash
node -v
npm -v
```

If `node -v` is less than 18, please upgrade Node.js.

---

## 2. Cloning the Repository

From a terminal (PowerShell on Windows, Terminal on macOS):

```bash
git clone https://github.com/Enetact/AdvancedAppFrontEnd.git
cd AdvancedAppFrontEnd
```

If your clone URL is different (SSH or internal mirror), use that instead.

---

## 3. Project Scripts Overview

The project defines these npm scripts:

- `npm run dev` – Start the Vite development server (for local development).
- `npm run build` – Create a production build.
- `npm run preview` – Preview the production build locally.
- `npm run setup` – Install dependencies (including dev) via `npm install --include=dev`.

You’ll use these in the steps below.

---

## 4. Windows Setup

There is a dedicated PowerShell script for Windows: **`setup-windows.ps1`**.  
This script:

1. Checks for Node.js and ensures the version is at least 18.
2. If Node.js is missing or too old, installs/updates Node using **winget** or **choco** (if available).
3. Installs npm dependencies (prefers `npm ci` if `package-lock.json` exists, otherwise `npm install --include=dev`).
4. Starts the Vite dev server with `npm run dev`.

### 4.1 Requirements

- Windows 10/11
- PowerShell 5+  
- Script execution allowed for local scripts
- Recommended: `winget` or Chocolatey (`choco`) installed so the script can auto-install Node.js if needed

### 4.2 Allow Script Execution (if needed)

Open **PowerShell as Administrator** and run:

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

Confirm with **Y** when prompted.

### 4.3 Running the Windows Setup Script

In PowerShell, from the project directory:

```powershell
cd path\to\AdvancedAppFrontEnd
.\setup-windows.ps1
```

The script will:

1. Verify or install Node.js.
2. Install dependencies.
3. Start the dev server (by default at something like `http://localhost:5173`).

#### Optional: Skip Node Installation

If you already manage Node.js and don’t want the script to touch it:

```powershell
.\setup-windows.ps1 -SkipNodeInstall
```

### 4.4 Running the App Manually (Windows)

If you prefer not to use the script:

```powershell
cd path\to\AdvancedAppFrontEnd
npm install --include=dev
npm run dev
```

Then open the printed localhost URL in your browser.

---

## 5. macOS Setup

There is no macOS-specific script, but you can reuse the **Linux-style setup script** `setup-linux.sh`, or run the equivalent commands manually.

The script:

1. Ensures Node.js is installed and at least version 18 (installs via **nvm** if needed).
2. Installs dependencies (`npm ci` if possible, otherwise `npm install --include=dev`).
3. Starts the Vite dev server via `npm run dev`.

### 5.1 Install Homebrew (Recommended)

If you don’t already have Node.js or nvm, install Homebrew:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Then install Node.js, for example:

```bash
brew install node
```

Confirm Node.js version:

```bash
node -v
```

Make sure it’s **18+**.

### 5.2 Using the Linux Script on macOS

From **Terminal**:

```bash
cd /path/to/AdvancedAppFrontEnd
chmod +x setup-linux.sh
./setup-linux.sh
```

This will:

1. Check Node.js and install/upgrade using nvm if necessary.
2. Install npm dependencies.
3. Start the dev server.

### 5.3 Running the App Manually (macOS)

If you prefer to manage Node.js yourself:

```bash
cd /path/to/AdvancedAppFrontEnd
npm install --include=dev
npm run dev
```

Open the printed localhost URL (e.g., `http://localhost:5173`) in your browser.

---

## 6. Building for Production

Once dependencies are installed (on any OS):

```bash
npm run build
```

This creates an optimized production bundle, typically in the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

Vite will print a URL you can open in your browser.

---

## 7. Common Issues & Troubleshooting

### 7.1 Node Version Too Old

**Symptoms:**

- The setup script warns that Node is too old.
- `npm install` / `npm run dev` fails with engine or syntax errors.

**Fix:**

- Upgrade Node.js to version 18+.
- Windows: rerun `.\setup-windows.ps1` (without `-SkipNodeInstall` if you want it to manage Node).
- macOS: update via Homebrew or rerun `./setup-linux.sh`.

---

### 7.2 Port Already in Use

If `npm run dev` fails because the port is already in use:

- Close any other dev server using that port.
- Or run:

```bash
npm run dev -- --port 5174
```

and open the new port in your browser.

---

### 7.3 Dependency Installation Failures

If `npm install` or `npm ci` fails:

1. Remove `node_modules` and (optionally) `package-lock.json`.
2. Run:

   ```bash
   npm install --include=dev
   ```

On Windows, you can also rerun `.\setup-windows.ps1`.  
On macOS, rerun `./setup-linux.sh`.

---

## 8. Quick Start Summary

### Windows

```powershell
git clone https://github.com/Enetact/AdvancedAppFrontEnd.git
cd AdvancedAppFrontEnd
.\setup-windows.ps1
```

### macOS

```bash
git clone https://github.com/Enetact/AdvancedAppFrontEnd.git
cd AdvancedAppFrontEnd
chmod +x setup-linux.sh
./setup-linux.sh
```

After the dev server starts, open the shown localhost URL in your browser to use the app.
