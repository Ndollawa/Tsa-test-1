# TSA Test 1 --- Setup Guide

This document explains how to configure and run the **TSA Test 1**
project, including Docker, PHP/Laravel, MariaDB, Node.js, and Composer
usage.

------------------------------------------------------------------------

## 📦 Requirements

Before starting, ensure you have:

-   **Docker** & **Docker Compose** installed\
-   **Make** (optional, but recommended)
-   A `.env` file for Laravel

------------------------------------------------------------------------

## 🔧 Step 1 --- Clone the Project

``` bash
git clone https://github.com/your-org/tsa-test-1.git
cd tsa-test-1
```

------------------------------------------------------------------------

## ⚙️ Step 2 --- Create `.env` File

Copy the example environment file:

``` bash
cp .env.example .env
```

Generate the Laravel application key:

``` bash
docker compose exec app php artisan key:generate
```

Update database credentials in `.env`:

    DB_CONNECTION=mysql
    DB_HOST=db
    DB_PORT=3306
    DB_DATABASE=your_db
    DB_USERNAME=your_user
    DB_PASSWORD=your_pass

------------------------------------------------------------------------

## 🐳 Step 3 --- Build and Start Docker Containers

``` bash
docker compose up -d --build
```

This starts:

-   `app` → PHP 8 + Laravel\
-   `web` → Nginx\
-   `db` → MariaDB\
-   `node` → Node.js container

------------------------------------------------------------------------

## 📁 Step 4 --- Install Backend Dependencies (Composer)

Run composer inside the `app` container:

``` bash
docker compose exec app composer install
```
OR

``` bash
 docker exec -it Tsa-test-1 bash
```


------------------------------------------------------------------------

## 📁 Step 5 --- Install Frontend Dependencies (Node/Yarn/npm)

Inside the Node container:

``` bash
docker compose exec node npm install --legacy-peer-deps
```

Build frontend assets:

``` bash
docker compose exec node npm run build
```

Or start dev mode:

``` bash
docker compose exec node npm run dev
```

if you used  docker exec -it Tsa-test-1 bash

``` bash
node npm install --legacy-peer-deps
```

Build frontend assets:

``` bash
 npm run build
```

Or start dev mode:

``` bash
 npm run dev
```
------------------------------------------------------------------------

## 🗄 Step 6 --- Run Database Migrations

``` bash
docker compose exec app php artisan migrate
```

(Optional) seed:

``` bash
docker compose exec app php artisan db:seed
```

------------------------------------------------------------------------

## 🌐 Step 7 --- Access the Application

Laravel backend will be available at:

    http://localhost:8000

MariaDB on:

    localhost:3306

------------------------------------------------------------------------

## 🧹 Step 8 --- Stopping and Restarting

Stop containers:

``` bash
docker compose down
```

Restart:

``` bash
docker compose up -d
```

------------------------------------------------------------------------

## 📌 Notes

-   The project volumes sync automatically.
-   Logs can be viewed via:

``` bash
docker compose logs -f app
docker compose logs -f web
docker compose logs -f db
```

------------------------------------------------------------------------

## ✔️ Done!

You now have a fully working local development environment for **TSA
Test 1**.
