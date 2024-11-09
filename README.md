# S4 Joke API Web App

## 📄 Description

This project focuses on building a web application that displays jokes to employees before the start of their workday. The app will fetch jokes from a public API and show them in a dynamic interface. It aims to enhance user productivity by incorporating humor into the work environment. The application will also track the user's feedback on each joke to gather insights for the client.

### Objectives

- Learn to consume data from a public REST API using TypeScript.
- Implement asynchronous JavaScript techniques like `async/await` and promises.
- Develop a user-friendly interface to display jokes and allow feedback.
- Track joke engagement and generate reports on user interactions.

<br>

## 📐 Project Structure

### Level 1

- **Exercise 1**: Implement the main screen that shows a joke when the user starts the app. The joke will be fetched from the "Random dad joke" API. Display the joke on the screen and log it in the console.

- **Exercise 2**: Add a "Next Joke" button that fetches a new joke from the API every time it is clicked. Display the new joke on the screen and log it to the console.

- **Exercise 3**: Implement an array `reportJokes` to track user feedback for each joke. Each entry should include the joke, a score (1 to 3), and the date of the interaction in ISO format. Provide three buttons to rate the joke: 1, 2, or 3. If no rating is given, the user can move to the next joke.

### Level 2

- **Exercise 4**: Integrate a weather API to display the current weather at the start of the application. This adds contextual information for users to enjoy before viewing the jokes.

- **Exercise 5**: Enhance the joke app by fetching jokes from multiple APIs. The jokes should be displayed randomly, alternating between jokes from different sources to keep the content fresh.

### Level 3

- **Exercise 6**: Create a responsive layout for the web app. The design should be mobile-friendly and well-structured to improve the user experience.

<br>

## 💻 Technologies Used

- TypeScript
- JavaScript (ES6)
- Fetch API
- CSS & Bootsrap

<br>

## 📋 Requirements

- **Node.js** or higher
- **TypeScript** installed
- **Fetch API** (or equivalent for making API calls)

<br>

## 🛠️ Installation

1. Clone this repository: 
  ```bash
  git clone https://github.com/dracudev/S4-TypeScript-API.git
  ```
2. Navigate to the project directory: 
  ```bash
  cd S4-TypeScript-API
  ```
3. Open the project in your text editor and start coding.
  ```bash
  code .
  ```

<br>

<br>

## ▶️ Execution

1. Install the dependencies and run the TypeScript code to see it compiled into JavaScript.
  ```bash
  npm install
  tsc -w
  ```

2. Open index.html in a browser (recommended to use the Live Server plugin in Visual Studio Code for auto-refresh).
