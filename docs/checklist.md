# ✅ Project Dockerization Checklist

## 📁 Folder Structure

- [x] `/components` - Next.js frontend
- [x] `/server` - Express or backend server
- [x] `/db` - JSON Server with `db.json`
- [x] `/docker-compose.yml` in root
- [x] `Dockerfile` in `/client` and `/server`

---

## 🛠 Dockerfiles

### Client Dockerfile

- [x] Uses `node:20-alpine`
- [x] Copies dependencies and installs
- [x] Builds Next.js app
- [x] Exposes port `3000`

### Server Dockerfile

- [x] Uses `node:20-alpine`
- [x] Installs dependencies
- [x] Exposes port `5000`

---

## ⚙ Docker Compose

- [x] Defines `client`, `server`, and `json-server` services
- [x] Mounts `db.json` into `json-server`
- [x] Exposes ports:
  - [x] 3000 (frontend)
  - [x] 5000 (backend)
  - [x] 4000 (JSON server)
- [x] Passes `NEXT_PUBLIC_API_BASE` as env

---

## 🌐 Environment Variables

- [x] `NEXT_PUBLIC_API_BASE=http://localhost:5000` set in `.env` or Compose

---

## 🔄 Networking

- [x] `depends_on` used to ensure backend starts before frontend
- [x] All services talk over `localhost:<port>` internally

---

## 🧪 Run & Test

- [x] `docker-compose up --build`
- [x] Check:
  - [x] `localhost:3000` shows frontend
  - [x] `localhost:5000` serves API
  - [x] `localhost:4000` shows mock JSON server

---

## 📦 Optional (Next Steps)

- [ ] Add MongoDB service
- [ ] Add volumes for hot reload
- [ ] Add production-ready Nginx reverse proxy
- [ ] Add `.dockerignore` and `.env` files
- [ ] Deploy to Render/Railway/VPS

---
