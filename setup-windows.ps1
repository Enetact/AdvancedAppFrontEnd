# Windows 11 setup for Club PWA Prototype (React + Vite + Bootstrap)
# - Ensures Node >= 18 (via winget or choco)
# - Installs npm dependencies
# - Starts Vite dev server
# No icons, no colors, no special characters.

param(
    [switch] $SkipNodeInstall
)

function Test-Command {
    param([string]$Name)
    return [bool](Get-Command $Name -ErrorAction SilentlyContinue)
}

$MinNodeMajor = 18

Write-Host "Checking Node.js installation..."

if (-not $SkipNodeInstall) {

    $hasNode = Test-Command "node"

    if ($hasNode) {
        $nodeVersion = node -v  # Example: v20.11.1

        if ($nodeVersion -match '^v(\d+)\.') {
            $major = [int]$Matches[1]

            if ($major -lt $MinNodeMajor) {
                Write-Host "Node version is too old. Updating Node.js..."

                if (Test-Command "winget") {
                    Write-Host "Installing Node.js LTS using winget..."
                    winget install -e --id OpenJS.NodeJS.LTS --silent --accept-package-agreements --accept-source-agreements
                }
                elseif (Test-Command "choco") {
                    Write-Host "Installing Node.js LTS using Chocolatey..."
                    choco install nodejs-lts -y
                }
                else {
                    Write-Host "Node.js needs to be at least version $MinNodeMajor. Install from https://nodejs.org and run this script again."
                    exit 1
                }
            }
            else {
                Write-Host "Node version is sufficient."
            }
        }
        else {
            Write-Host "Unable to parse Node version. Continuing..."
        }
    }
    else {
        Write-Host "Node.js not found. Installing Node.js..."

        if (Test-Command "winget") {
            Write-Host "Installing Node.js LTS using winget..."
            winget install -e --id OpenJS.NodeJS.LTS --silent --accept-package-agreements --accept-source-agreements
        }
        elseif (Test-Command "choco") {
            Write-Host "Installing Node.js LTS using Chocolatey..."
            choco install nodejs-lts -y
        }
        else {
            Write-Host "No package manager found. Install Node.js manually from https://nodejs.org then run this script again."
            exit 1
        }
    }
}
else {
    Write-Host "Skipping Node installation (SkipNodeInstall flag set)."
}

Write-Host "Installing npm dependencies..."

if (Test-Path "package-lock.json") {
    npm ci
} else {
    npm install --include=dev
}

Write-Host "Starting Vite development server..."
npm run dev
