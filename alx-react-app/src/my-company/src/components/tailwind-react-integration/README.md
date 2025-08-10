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