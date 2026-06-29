# DigiShop - Multi Vendor Online Store

DigiShop is a multi-vendor e-commerce prototype for connecting customers, shopkeepers, delivery partners, and admins in one local marketplace flow. The project contains a static HTML/CSS/JavaScript frontend and a Node.js/Express backend with MongoDB models and authentication APIs.

## Features

- Customer, shopkeeper, delivery partner, and admin pages
- Customer registration with geolocation UI
- Shopkeeper dashboard with product/order interaction mockups
- Delivery dashboard flow for shop order pickup
- Dark/light theme styling and multilingual shopkeeper UI
- Express API with MongoDB, bcrypt password hashing, and JWT login

## Tech Stack

- Frontend: HTML5, CSS3, vanilla JavaScript
- Backend: Node.js, Express.js, MongoDB, Mongoose
- Auth: bcrypt, JSON Web Token

## Project Structure

```text
.
├── Front_end/              # Static frontend pages and scripts
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   ├── shopkeeper.js
│   └── delivery.js
└── Back_end/
    └── src/                # Express API source
        ├── config/
        ├── controllers/
        ├── models/
        ├── routes/
        ├── index.js
        └── package.json
```

## Getting Started

### Prerequisites

- Node.js 18 or newer
- MongoDB running locally, or a MongoDB Atlas connection string

### Backend Setup

```bash
cd Back_end/src
npm install
cp .env.example .env
npm run dev
```

Update `.env` with your MongoDB connection string and JWT secret before starting the server.

The API runs on `http://localhost:3000` by default.

### Frontend Setup

Open `Front_end/index.html` in a browser, or serve the folder with a static server:

```bash
cd Front_end
python3 -m http.server 5500
```

Then visit `http://localhost:5500`.

## Environment Variables

Create `Back_end/src/.env` from `Back_end/src/.env.example`.

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/monolith_db
JWT_SECRET=replace-with-a-long-random-secret
```

## API Routes

- `POST /api/users/register` - register a user
- `POST /api/users/login` - log in and receive a JWT
- `GET /api/users/users` - list users
- `GET /api/users/users/:id` - get user by id
- `POST /api/catagory/register` - create a category
- `GET /api/catagory/categories` - list categories

Note: the route name `catagory` is kept as-is to match the current backend code.

## GitHub Upload Checklist

- Do not commit `.env`, `node_modules`, zip files, or `.DS_Store`.
- Commit `package-lock.json` files so installs are reproducible.
- Add screenshots to this README later if you want a more visual GitHub profile page.
