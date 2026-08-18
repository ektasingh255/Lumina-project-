@echo off
title Lumina Preview
cd /d "%~dp0"
start "Lumina Server" /min cmd /c "npm run dev -- --host 127.0.0.1 --port 4173 --strictPort"
timeout /t 3 /nobreak >nul
start "" http://127.0.0.1:4173
