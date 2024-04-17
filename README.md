# E-commerce-server-

This project is a TypeScript project utilizing Prisma ORM to interact with a PostgreSQL database. It provides TypeScript interfaces for the database models along with enums. Additionally, it includes services, helpers, controllers, routes, and types for managing the application logic and API endpoints.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ahadnawaz585/E-commerce-server-
   ```

2. Navigate to the project directory:

   ```bash
   cd E-commerce-server-
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up your PostgreSQL database and update the database URL in the `.env` file.

5. Run the migration to create the database schema:

   ```bash
   npx prisma migrate dev
   ```

6. Start the development server:

   ```bash
   npm run start
   ```

## Usage

- The project provides TypeScript interfaces for the database models, allowing you to interact with the database in a type-safe manner.
- Services, helpers, controllers, routes, and types are provided to manage the application logic and API endpoints efficiently.
- You can use these components in your TypeScript code to perform database operations, handle business logic, and define API endpoints.

## Project Structure

- `src/`: Contains the TypeScript source code.
  - `models/`: Contains the TypeScript interfaces for the database models.
  - `enums/`: Contains TypeScript enums used in the project.
  - `services/`: Contains services responsible for business logic.
  - `helpers/`: Contains helper functions used throughout the project.
  - `controllers/`: Contains controllers for handling HTTP requests and responses.
  - `routes/`: Contains route definitions for API endpoints.
  - `types/`: Contains additional TypeScript types used in the project.
- `prisma/`: Contains Prisma schema files and migration files.
- `README.md`: Project documentation.
- `.env`: Environment variables configuration file.
- `package.json`: Node.js project configuration file.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---
