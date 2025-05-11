# Laravel + React + Inertia – User System and Dashboard

This project combines Laravel with React via Inertia.js, providing a complete user management system with a dashboard. It includes features like registration, login, user editing, and deletion.

## 🚀 Technologies

- Laravel 10
- React 18
- Inertia.js
- Laravel Breeze
- Laravel Sanctum
- Tailwind CSS
- Vite

## 📦 Installation

### Clone the project

```bash
git clone https://github.com/Freedomnet2000/laravel-users.git
cd laravel-users
```

### Install PHP dependencies

```bash
composer install
```

### Install JavaScript dependencies

```bash
npm install
```

### Configure the environment

```bash
cp .env.example .env
php artisan key:generate
```

### Set up the database

Edit your `.env` file with your database connection details.

Run the migrations:

```bash
php artisan migrate
```

### Run the servers

Start the Laravel server:

```bash
php artisan serve
```

Compile the frontend assets:

```bash
npm run dev
```

### Access the application

Open your browser and navigate to: `http://localhost:8000`

## 🧰 Features

- User registration and login
- Dashboard with a list of users
- Edit user details
- Delete users
- Route protection using middleware
- Responsive design with Tailwind CSS

## 📁 Project Structure

- `routes/web.php` – Route definitions
- `app/Models/User.php` – User model
- `resources/js/Pages/Dashboard.jsx` – Dashboard page
- `resources/js/Pages/EditUser.jsx` – User edit page
- `resources/js/Layouts/AuthenticatedLayout.jsx` – Layout for authenticated users