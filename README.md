## Technologies Used

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [ESLint](https://eslint.org/) With Standard configurations
- [MUI](https://mui.com/)
- [TailwindCSS](https://tailwindcss.com/)

## Installation

To get started with app locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone git@github.com:techIlsa/directrope.git
   cd web
   ```

2. **Install dependencies**:

   ```bash
   npm install
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
├── .next/
├── .vscode/
├── node_modules/
├── public/
├── src/
|   ├── api/
│   ├── app/
│   ├── components/
│   └── lib/
├── .eslintignore
├── .eslintrc.json
├── .gitignore
├── next.config.mjs
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json
```
# Assessment Questions

- Listing Component with filters

The api just provide the single data of a random user. To get the desired number of users we need to pass the "results" param to the api which accepts a number and returns the all users without any pagination so I handled the pagination on frontend using MUI Component.

    - Filters

    I applied the gender filter on the listing page. The api accepts a "gender" param to filter the results based on male and female.

    results - for getting number of desired users
    gender - for getting the male or female users 

- Search Functionality

The api does not provide any response for search query so I used the MUI table component  search for filtering the results on frontend. In real projects, we send the input text as a query param to the get api request and then based on input text the backend server send filtered data.

- Public Profile Page

I created a new page/route to navigate on the profile page. The api does not provide data for a specific user that are listed on the listing page, so I pass the data as a query param to the path as it is the easiest and simplest way to pass data to another route. And on the profile page route i extracted the data and use accordingly


