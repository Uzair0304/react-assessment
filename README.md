## Technologies Used

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [ESLint](https://eslint.org/) with Prettier and Standard configurations
- [Husky](https://typicode.github.io/husky/) for Git hooks

## Installation

To get started with Rentmor locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone git@github.com:techIlsa/directrope.git
   cd web
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:

   Copy the `.env.example` file to `.env.development` when runnung development mode or `.env.production` when runnung production. Then configure it with your local environment settings.

   ```bash
   cp .env.example .env.development
   ```

   ```bash
   cp .env.example .env.production
   ```

## Usage

To run the application in development mode:

```bash
npm run dev
```

To build the application for production:

```bash
npm run build
```

To start the application in production mode:

```bash
npm run start
```

## Project Structure

```plaintext
web/
├── .husky/
├── .next/
├── .vscode/
├── node_modules/
├── public/
├── src/
│   ├── app/
│   ├── assets/
│   ├── components/
│   ├── ui/
│   └── utils/
├── .env.development
├── .env.example
├── .env.production
├── .eslintignore
├── .eslintrc.json
├── .gitignore
├── .prettierignore
├── .prettierrc
├── next.config.mjs
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json
```
# frontend
