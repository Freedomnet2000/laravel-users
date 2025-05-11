Laravel + React + Inertia.js – User Management Dashboard
A full-stack web application built with Laravel, React, and Inertia.js, featuring user authentication, a dynamic dashboard, and CRUD operations for user management.

🚀 Technologies Used
Backend: Laravel 10

Frontend: React 18 with Inertia.js

Authentication: Laravel Breeze with Sanctum

Styling: Tailwind CSS

Build Tool: Vite

📦 Installation
Clone the repository:

bash
Copy
Edit
git clone https://github.com/your-username/your-repo.git
cd your-repo
Install PHP dependencies:

bash
Copy
Edit
composer install
Install JavaScript dependencies:

bash
Copy
Edit
npm install
Set up environment variables:

bash
Copy
Edit
cp .env.example .env
php artisan key:generate
Configure your database:

Update the .env file with your database credentials.

Run migrations:

bash
Copy
Edit
php artisan migrate
Start the development servers:

Laravel backend:

bash
Copy
Edit
php artisan serve
Vite frontend:

bash
Copy
Edit
npm run dev
Access the application:

Open your browser and navigate to http://localhost:8000.

🧰 Features
User registration and login

Protected dashboard displaying all users

Edit and delete user functionality

Middleware protection for authenticated routes

Responsive design with Tailwind CSS

📁 Project Structure
routes/web.php: Defines web routes

app/Models/User.php: User model

resources/js/Pages/Dashboard.jsx: Dashboard page

resources/js/Pages/EditUser.jsx: User edit page

resources/js/Layouts/AuthenticatedLayout.jsx: Layout for authenticated users