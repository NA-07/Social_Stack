# Full-Stack Social Media Application

A full-stack social media app built with React, Vite, Redux, Material UI, Spring Boot, Spring Security, JPA, MySQL, and WebSockets. The application supports authentication, posts, comments, reels, stories, profile editing, user search, follows, and real-time chat.

## Project Overview

This repository contains two applications:

- `client/` - React + Vite frontend
- `springboot-social/` - Spring Boot backend

The backend exposes the REST and WebSocket APIs. The frontend consumes those APIs and handles the UI, state management, uploads, and live chat.

## Main Features

- JWT-based login and registration
- Create, edit, delete, like, and save posts
- Add comments to posts
- Upload and view reels
- Create and view stories
- Search users and follow/unfollow accounts
- Real-time private chat over WebSockets
- Profile page with editable user details

## Tech Stack

### Frontend

- React
- Vite
- Redux Toolkit
- React Router
- Material UI
- Axios
- Formik and Yup
- SockJS and STOMP

### Backend

- Spring Boot
- Spring Web
- Spring Security
- Spring Data JPA
- WebSocket
- MySQL
- JWT authentication

## Repository Layout

```text
client/
	src/
		components/
		config/
		Pages/
		state/
		utils/
	package.json
	.env.example

springboot-social/
	src/
		main/
			java/
			resources/
		test/
	pom.xml
	src/main/resources/application.example.properties

README.md
LICENSE
.gitignore
```

## Before You Upload To GitHub

Upload these files and folders:

- `client/src/`
- `client/public/`
- `client/package.json`
- `client/package-lock.json`
- `client/vite.config.js`
- `client/tailwind.config.js`
- `client/postcss.config.js`
- `client/index.html`
- `client/.env.example`
- `springboot-social/src/main/java/`
- `springboot-social/src/main/resources/`
- `springboot-social/src/test/`
- `springboot-social/pom.xml`
- `springboot-social/mvnw`
- `springboot-social/mvnw.cmd`
- `springboot-social/.mvn/`
- `springboot-social/src/main/resources/application.example.properties`
- `README.md`
- `LICENSE`
- `.gitignore`

Do not upload these items:

- `client/node_modules/`
- `client/dist/`
- `client/.env`
- `springboot-social/target/`
- `springboot-social/.env`
- Any local secret files, keys, or credentials

If `target/` or `dist/` already exists in your working tree, keep them out of the Git commit.

## Required Environment Variables

### Frontend

Copy `client/.env.example` to `client/.env` and set these values:

- `VITE_API_BASE_URL` - backend base URL, for example `http://localhost:5000`
- `VITE_SOCKET_URL` - WebSocket base URL, usually the same as the backend
- `VITE_CLOUDINARY_CLOUD_NAME` - Cloudinary cloud name
- `VITE_CLOUDINARY_UPLOAD_PRESET` - Cloudinary upload preset

### Backend

Use environment variables or adapt `springboot-social/src/main/resources/application.example.properties`.

- `SERVER_PORT` - backend port, default `5000`
- `SPRING_DATASOURCE_URL` - MySQL JDBC URL
- `SPRING_DATASOURCE_USERNAME` - MySQL username
- `SPRING_DATASOURCE_PASSWORD` - MySQL password
- `SPRING_JPA_HIBERNATE_DDL_AUTO` - JPA schema mode, for example `update`
- `JWT_SECRET` - long random JWT signing secret

## Local Setup

### 1. Prerequisites

- Node.js and npm
- Java 21 or compatible JDK
- Maven 3.9+ or the bundled Maven wrapper
- MySQL running locally
- Cloudinary account for image and video uploads

### 2. Backend Setup

1. Create a MySQL database named `social`.
2. Set the backend environment variables.
3. Start the backend from `springboot-social`.

Example command:

```bash
./mvnw spring-boot:run
```

On Windows PowerShell:

```powershell
.\mvnw.cmd spring-boot:run
```

### 3. Frontend Setup

1. Install dependencies in `client`.
2. Create `client/.env` from the example file.
3. Start the frontend dev server.

Example commands:

```bash
npm install
npm run dev
```

### 4. Build For Production

Frontend:

```bash
npm run build
```

Backend:

```bash
./mvnw clean package
```

## Configuration Notes

- The frontend reads API, WebSocket, and Cloudinary values from environment variables.
- The backend reads database and JWT settings from environment variables.
- The repo no longer contains hard-coded database passwords or third-party image links.
- The README and example config files are meant to help other developers clone and run the app without guessing setup details.

## Troubleshooting

- If the frontend cannot connect to the backend, confirm `VITE_API_BASE_URL` and `VITE_SOCKET_URL` point to the correct server.
- If image uploads fail, confirm `VITE_CLOUDINARY_CLOUD_NAME` and `VITE_CLOUDINARY_UPLOAD_PRESET` are valid.
- If backend login fails, confirm `JWT_SECRET` is set and MySQL is reachable.
- If JPA cannot connect, confirm the database name, username, password, and MySQL service are correct.

## License

This project is published under the MIT License.
