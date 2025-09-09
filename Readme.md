# Recipe Sharing Platform

## Objective
Begin building a Recipe Sharing Platform using React and Tailwind CSS. This task focuses on setting up the project foundation, including the creation of the React app, installing Tailwind CSS, and preparing a clean workspace for further development.

## Project Overview
The Recipe Sharing Platform will allow users to browse, add, and share recipes. It will feature multiple pages including a home page with a list of recipes, a detailed view for individual recipes, and a form to submit new recipes.

## Task Description
Start by setting up a new React project integrated with Tailwind CSS. This initial setup lays the groundwork for developing a responsive and visually appealing application.

## Step 1: Create a New React Project
### React Project Setup
Open your terminal and set up a new React application:
```sh
npm create vite@latest recipe-sharing-platform -- --template react
cd recipe-sharing-platform
```

## Step 2: Install and Configure Tailwind CSS
### Tailwind CSS Installation
Add Tailwind CSS and its dependencies to your project:
```sh
npm install -D tailwindcss postcss autoprefixer
```
Set up Tailwind CSS using the Tailwind CLI:
```sh
npx tailwindcss init -p
```
Modify the `tailwind.config.js` to enable purging of unused styles in production builds:
```javascript
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // You can set it to 'media' or 'class' if needed
  theme: {
    extend: {},
  },
  plugins: [],
};
```
Configure your project to include Tailwind in your CSS. Add this to `src/index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Step 3: Verify Tailwind CSS Integration
### Test Tailwind CSS Setup
Run your React application to ensure Tailwind CSS is integrated correctly:
```sh
npm run dev
```
Check the browser to see if the app loads without any errors and Tailwind’s styles are applied (you can test by adding a Tailwind utility class like `text-blue-500` to a component).

## Repo
GitHub repository: alx-fe-reactjs
Directory: recipe-sharing-platform
