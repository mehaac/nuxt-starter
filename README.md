# Nuxt Starter

This is a minimal starter project built with Nuxt 3, using **Bun**.

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone git@github.com:mehaac/nuxt-starter.git
   cd nuxt-starter
   ```

2. **Install dependencies:**

   ```bash
   bun install
   ```

3. **Configure Environment:**

   - Create a `.env` file in the root directory for your environment variables.
   - Use `.env.example` as a template if available.

## Development

Start the development server at `http://localhost:3000`:

```bash
bun run dev
```

### Linting and Type Checking

For code consistency and type safety:

- **Lint** the code with:

  ```bash
  bun run lint
  ```

- **Type Check** using:

  ```bash
  bun run typecheck
  ```

## Building for Production

1. **Build the Application:**

   ```bash
   bun run build
   ```

2. **Preview the Production Build Locally:**

   ```bash
   bun run preview
   ```

## Docker Deployment

This starter includes a Dockerfile for containerized deployments:

1. **Build the Docker Image:**

   ```bash
   docker build -t nuxt-starter .
   ```

2. **Run the Container:**

   ```bash
   docker run -p 3000:3000 nuxt-starter
   ```

The app will be accessible at `http://localhost:3000`.

## Project Structure

- **/src**: Contains the source code for your Nuxt 3 application.
- **/tests**: Contains test files to ensure the application's reliability.

## Scripts

- `bun run dev`: Start the development server.
- `bun run build`: Build the application for production.
- `bun run preview`: Preview the production build.
- `bun run lint`: Lint the codebase with ESLint.
- `bun run typecheck`: Type-check the codebase using TypeScript.

made by @mehaac
