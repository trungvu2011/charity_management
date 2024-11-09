# Project Setup Guide

This project consists of two main parts: a Node.js backend and a React.js frontend. Follow the steps below to set up and run the project.

## Prerequisites

Make sure you have the following installed on your machine:
- Node.js (v14.17.0)
- npm (v6.x or higher)

## Backend (Node.js)

### Installation

1. Navigate to the `Nodejs` directory:
    ```sh
    cd Nodejs
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

### Configuration

1. Copy the `.env example` file to `.env` and update the environment variables as needed:
    ```sh
    cp .env\ example .env
    ```

2. Update the database configuration in the `Nodejs/src/config/config.json` file to match your MySQL setup:
    ```json
    {
      "development": {
        "username": "root",
        "password": null,
        "database": "charity_management_db",
        "host": "127.0.0.1",
        "dialect": "mysql",
        "logging": false,
        "query": {
          "raw": true
        },
        "timezone": "+07:00"
      }
    }
    ```

### Database Setup

1. Create the database in MySQL:
    ```sql
    CREATE DATABASE your_database_name;
    ```

2. Run the migrations to set up the database schema:
    ```sh
    npx sequelize-cli db:migrate
    ```

### Running the Server

1. Start the server:
    ```sh
    npm start
    ```

The backend server should now be running on the port specified in your `.env` file.

## Frontend (React.js)

### Installation

1. Navigate to the `Reactjs` directory:
    ```sh
    cd Reactjs
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

### Configuration

1. Copy the `.env.example` file to `.env` and update the environment variables as needed:
    ```sh
    cp .env.example .env
    ```

### Running the Application

1. Start the development server:
    ```sh
    npm start
    ```

The frontend application should now be running on [http://localhost:3000](http://localhost:3000).

## Building the Application

To create a production build of the React.js application, run the following command in the `Reactjs` directory:
```sh
npm run build
