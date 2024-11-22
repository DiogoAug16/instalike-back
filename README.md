# Instalike Backend

A Node.js/Express backend service for managing social media posts with image upload capabilities. This service provides RESTful APIs for creating and retrieving posts with associated images.

## Features

- Create posts with descriptions and images
- Retrieve all posts
- Image upload handling
- MongoDB integration for data persistence
- RESTful API architecture

## Technologies Used

- Node.js (>= 14.0.0)
- Express.js - Web framework
- MongoDB - Database
- Multer - File upload handling

## Prerequisites

- Node.js (>= 14.0.0)
- npm (>= 6.0.0)
- MongoDB database

## Installation

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with your MongoDB connection string:
```env
STRING_CONEXAO=your_mongodb_connection_string
```

## Available Scripts

- `npm run dev` - Start the development server with hot reload
- `npm start` - Start the production server

## API Endpoints

### Posts

- `GET /posts` - Retrieve all posts
- `POST /posts` - Create a new post
  - Body: `{ "descricao": "string", "alt": "string" }`
- `POST /upload` - Upload an image for a post
  - Form data: `imagem` (file)

## Project Structure

```
├── server.js              # Application entry point
├── src/
│   ├── config/
│   │   └── dbConfig.js    # Database configuration
│   ├── controllers/
│   │   └── postsController.js  # Request handlers
│   ├── models/
│   │   └── postsModel.js      # Database models
│   └── routes/
│       └── postsRoutes.js     # API routes
└── uploads/               # Directory for uploaded images
```

## Environment Variables

- `STRING_CONEXAO` - MongoDB connection string

## Development

To start the development server with hot reload:

```bash
npm run dev
```

The server will start on `http://localhost:3000`.

## Production

To start the production server:

```bash
npm start
```

## License

UNLICENSED
