# Definitions App

A responsive and user-friendly ReactJS web application that allows users to search for word definitions using a public dictionary API. The app also includes a "Words of the Week" feature and a registration form for a word-of-the-day email list.

## Features

- **Word Lookup**: Enter any English word and retrieve its definition using the [Free Dictionary API](https://dictionaryapi.dev/).
- **Words of the Week**: View a curated list of interesting or uncommon words updated weekly.
- **Email Sign-Up**: Users can register for a word-of-the-day email list via a form with client-side validation.
- **Routing and Navigation**: Uses React Router for seamless navigation between pages.
- **Responsive Design**: Built with Bootstrap and custom CSS for mobile-friendly and accessible user experience.

## Technologies Used

- ReactJS
- React Router DOM
- JavaScript (ES6+)
- Fetch API
- Bootstrap
- HTML and CSS

## Installation

To run the project locally:

1. Clone the repository:

   **git clone https://github.com/your-username/definitions-app.git**
   
   **cd definitions-app**
   
2. Install dependencies:
  
   **npm install**
   
3. Start the development server:

   **npm start**

4. Open your browser at **http://localhost:3000**.

## Project Structure

```
Definitions App/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── css/
│   │   ├── App.css
│   │   ├── InputComponent.css
│   │   ├── Nav.css
│   │   ├── RegistrationForm.css
│   │   ├── WordsOfTheWeek.css
│   │   ├── index.css
│   │   └── styles.css
│   ├── images/
│   │   └── shutterstock.jpg
│   ├── App.js
│   ├── App.test.js
│   ├── DefinitionComponent.js
│   ├── InputComponent.js
│   ├── RegistrationForm.js
│   ├── RouteNav.js
│   ├── WordsOfTheWeek.js
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
├── package.json
├── package-lock.json
└── README.md
```

## API Reference

The app uses the free and open [Dictionary API](https://dictionaryapi.dev/):

- Endpoint: **https://api.dictionaryapi.dev/api/v2/entries/en/{word}**
- No API key or authentication required.

## Available Routes

| Route         |    Component      | Description                                        |
|---------------|-----------------  |----------------------------------------------------|
| /             | InputComponent    | Main page with word search functionality           |
| /registration | RegistrationForm  | Sign-up form with field validation                 |
| /words        | WordsOfTheWeek    | Displays a weekly list of vocabulary words         |
