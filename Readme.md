# ALX Simple Quiz Project

This repository contains three simple web applications built with HTML, CSS, and JavaScript:

1. **Simple Interactive Quiz** - A basic quiz application that checks user answers
2. **Simple Calculator** - A calculator that performs basic arithmetic operations
3. **User Data Fetcher** - An application that fetches and displays user data from an API

## Project Structure

## 1. Simple Interactive Quiz

A quiz application that asks a math question and checks if the user's answer is correct.

### Files:
- `index.html` - Quiz HTML structure
- `styles.css` - Quiz styling
- `quiz.js` - Quiz functionality

### JavaScript Code (quiz.js):
```javascript
// Function to check the user's answer
function checkAnswer() {
    // Define the correct answer
    const correctAnswer = "4";
    
    // Retrieve the user's selected answer
    const selectedRadioButton = document.querySelector('input[name="quiz"]:checked');
    let userAnswer = null;
    
    // Check if an answer was selected
    if (selectedRadioButton) {
        userAnswer = selectedRadioButton.value;
    }
    
    // Get the feedback element
    const feedbackElement = document.getElementById("feedback");
    
    // Compare user's answer with the correct answer
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
// Arithmetic functions
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    // Handle division by zero
    if (number2 === 0) {
        return "Cannot divide by zero";
    }
    return number1 / number2;
}

// Function to get and parse input values
function getNumbers() {
    const num1 = parseFloat(document.getElementById('number1').value) || 0;
    const num2 = parseFloat(document.getElementById('number2').value) || 0;
    return { num1, num2 };
}

// Event listener for addition
document.getElementById('add').addEventListener('click', function() {
    const { num1, num2 } = getNumbers();
    const result = add(num1, num2);
    document.getElementById('calculation-result').textContent = result;
});

// Event listener for subtraction
document.getElementById('subtract').addEventListener('click', function() {
    const { num1, num2 } = getNumbers();
    const result = subtract(num1, num2);
    document.getElementById('calculation-result').textContent = result;
});

// Event listener for multiplication
document.getElementById('multiply').addEventListener('click', function() {
    const { num1, num2 } = getNumbers();
    const result = multiply(num1, num2);
    document.getElementById('calculation-result').textContent = result;
});

// Event listener for division
document.getElementById('divide').addEventListener('click', function() {
    const { num1, num2 } = getNumbers();
    const result = divide(num1, num2);
    document.getElementById('calculation-result').textContent = result;
});
// Async function to fetch user data
async function fetchUserData() {
    // Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    
    // Select the data container element
    const dataContainer = document.getElementById('api-data');
    
    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);
        
        // Convert response to JSON
        const users = await response.json();
        
        // Clear the loading message
        dataContainer.innerHTML = '';
        
        // Create and append user list
        const userList = document.createElement('ul');
        
        // Loop through users and create list items
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });
        
        // Append the user list to the data container
        dataContainer.appendChild(userList);
        
    } catch (error) {
        // Handle errors during fetch
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}

// Invoke fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);
````

# GitHub User Search Application

This project allows you to search for GitHub users and view their basic profile information using the GitHub API.

## Features

- Search for GitHub users by username
- View avatar, name, and profile link
- Handles loading and error states

## Setup Instructions

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Start the development server:**
   ```sh
   npm run dev
   ```

## Usage

- Enter a GitHub username in the search box and click "Search".
- If the user exists, their avatar, name, and profile link will be displayed.
- If loading, a "Loading..." message appears.
- If the user is not found, an error message is shown.

## Project Structure

- `src/components/Search.jsx`: Search component and results display
- `src/services/githubService.js`: API integration logic

## License

MIT

# Registration Form Component

This is a simple registration form component built with React.

## Features

- Controlled form inputs for username, email, and password
- Basic client-side validation
- Submission handler with success message

## Installation and Usage

1. **Clone the repository:**
   ```sh
   git clone <repository-url>
   ```

2. **Navigate to the project directory:**
   ```sh
   cd <project-directory>
   ```

3. **Install dependencies:**
   ```sh
   npm install
   ```

4. **Start the development server:**
   ```sh
   npm start
   ```

5. **Access the application:**
   Open your browser and go to `http://localhost:3000`.

## Component Structure

- `RegistrationForm`: Main component for the registration form

## License

MIT

```javascript
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  username: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required')
});

function FormikForm() {
  return (
    <Formik
      initialValues={{ username: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        alert('Registration successful!');
        setSubmitting(false);
        resetForm();
        // Simulate API call here
      }}
    >
      {({ isSubmitting }) => (
        <Form style={{ maxWidth: 400, margin: '0 auto', padding: 20 }}>
          <h2>Register (Formik)</h2>
          <Field
            type="text"
            name="username"
            placeholder="Username"
            style={{ display: 'block', margin: '10px 0', width: '100%' }}
          />
          <ErrorMessage name="username" component="div" style={{ color: 'red' }} />
          <Field
            type="email"
            name="email"
            placeholder="Email"
            style={{ display: 'block', margin: '10px 0', width: '100%' }}
          />
          <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
          <Field
            type="password"
            name="password"
            placeholder="Password"
            style={{ display: 'block', margin: '10px 0', width: '100%' }}
          />
          <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
          <button type="submit" disabled={isSubmitting} style={{ padding: '8px 16px' }}>
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikForm;
```
```javascript
import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/formikForm';

function App() {
  return (
    <div>
      <RegistrationForm />
      <FormikForm />
    </div>
  );
}

export default App;
```
# React Query Demo

This project demonstrates advanced data fetching, caching, and updating in React using React Query and the JSONPlaceholder API.

## Features

- Fetches posts from [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts)
- Caches data for 5 minutes to reduce API calls
- Manual refetch button to update posts
- Handles loading and error states

## Setup

1. Install dependencies:
   ```sh
   npm install
   ```

2. Start the development server:
   ```sh
   npm run dev
   ```

## Usage

- Posts are loaded and cached automatically.
- Click "Refetch Posts" to manually update the data.
- Loading and error messages are displayed as needed.

## Project Structure

- `src/App.jsx`: Main app setup with React Query provider
- `src/components/PostsComponent.jsx`: Data fetching and display logic

## License

MIT