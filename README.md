
# Login & Sign Up Form Project

## Overview

This project contains a simple **Login** and **Sign Up** form built using **React**, **Formik**, and **Yup** for form validation. It includes the following features:

- **Sign Up**: Form for users to sign up with an email and password, with password strength validation.
- **Login**: A login form with a "Remember Me" feature that stores the email in the browser’s `localStorage`.

The app uses basic form validation, password strength checking, and data persistence via `localStorage`.

## How to Run the Project

### 1. Clone the Repository

To get started, clone the repository to your local machine:

```bash
git clone https://github.com/yadavbhushan/better-assignment.git
```

### 2. Install Dependencies

Navigate to the project directory and install the required dependencies using npm:

```bash
cd react-auth-app
npm install
```

### 3. Run the Development Server

Once the dependencies are installed, start the React development server:

```bash
npm start
```

This will open the application in your default browser at `http://localhost:3000`.

---

## Design Choices

### 1. **React, Formik, and Yup**
- **React** is used to build the user interface and manage the component-based architecture.
- **Formik** is used for handling form state and validation, which simplifies the form handling and keeps the code more organized.
- **Yup** is used for schema-based form validation, ensuring that the user inputs are correctly formatted and meet the required criteria (e.g., valid email, password strength).

### 2. **State Management**
- React's `useState` hook is used to manage the state of the form (such as email, password, and the "Remember Me" checkbox).
- `useEffect` is used to check for and retrieve the previously saved email from `localStorage` (if any) when the login form is loaded.

### 3. **LocalStorage for "Remember Me"**
- The **"Remember Me"** feature in the login form uses `localStorage` to store the user's email. When selected, the email is saved and pre-filled in the login form during subsequent visits.

### 4. **Password Strength Meter**
- The **Sign Up form** includes a password strength meter, which dynamically shows the strength of the user's password as they type. This provides immediate feedback to users regarding their password choices.

---

## Assumptions and Limitations

### 1. **Assumptions**
- The project assumes that the user is familiar with basic React concepts (components, state, etc.).
- The email in the login form is stored in `localStorage`, meaning it will persist across page reloads, but will not persist across different devices or browsers.

### 2. **Limitations**
- **No Backend Integration**: The project currently does not integrate with any backend. Form submissions (for both login and sign-up) are logged to the console, and no actual authentication or user data is stored in a server.
- **No Password Security**: There is no encryption or hashing of passwords. In a real-world application, passwords would be hashed before being stored or transmitted.
- **No Error Handling**: There is no complex error handling after form submission, such as dealing with incorrect login credentials or server-side validation failures.

---

