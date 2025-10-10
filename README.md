# AI Code Reviewer 🚀

An intelligent web application that leverages the Google Gemini API to provide instant, expert-level code reviews. Paste your code and receive detailed feedback on quality, best practices, performance, and potential bugs, just as you would from a senior developer.

![AI Code Reviewer Demo](https://i.imgur.com/8E8s5v9.png)
*(Image is a representative mock-up of the application's UI)*

---

## ✨ Features

-   **Interactive Code Editor**: A clean, simple code editor with JavaScript syntax highlighting powered by PrismJS.
-   **Expert AI Analysis**: The backend uses Google's `gemini-2.0-flash` model with a detailed system instruction to act as a Senior Code Reviewer with 7+ years of experience.
-   **Comprehensive Feedback**: The review covers:
    -   Code Quality & Best Practices
    -   Efficiency & Performance Bottlenecks
    -   Error Detection & Security Vulnerabilities
    -   Readability & Maintainability
    -   Adherence to DRY & SOLID principles
-   **Formatted Output**: The AI's response is rendered as Markdown, preserving code blocks, lists, and other formatting for easy reading.
-   **Modern Tech Stack**: Built with a React/Vite frontend and a Node.js/Express backend.

---

## 🛠️ Tech Stack

-   **Frontend**:
    -   ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
    -   ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
    -   ![Axios](https://img.shields.io/badge/axios-2B3439?style=for-the-badge&logo=axios&logoColor=white)
    -   ![Prism.js](https://img.shields.io/badge/Prism.js-DD4A68?style=for-the-badge)
    -   ![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)

-   **Backend**:
    -   ![Node.js](https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
    -   ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

-   **AI Service**:
    -   ![Google Gemini](https://img.shields.io/badge/Google_Gemini-8E75B9?style=for-the-badge&logo=google&logoColor=white)

---

## 📦 Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

-   [Node.js](https://nodejs.org/) (v18.x or later recommended)
-   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
-   A Google Gemini API Key. You can get one from [Google AI Studio](https://aistudio.google.com/app/apikey).

### Project Structure

For this guide, we'll assume your project is structured with separate `frontend` and `backend` directories.

### 1. Backend Setup

First, let's configure and run the backend server.

1.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Create an environment file:**
    Create a file named `.env` in the `backend` root directory.

4.  **Add your API key to the `.env` file:**
    ```env
    # .env
    GOOGLE_GEMINI_KEY="YOUR_GOOGLE_GEMINI_API_KEY"
    ```
    Replace `YOUR_GOOGLE_GEMINI_API_KEY` with your actual key.

5.  **Start the backend server:**
    ```bash
    npm start
    ```
    The server should now be running on `http://localhost:3000`.

### 2. Frontend Setup

Now, let's get the React frontend running.

1.  **Open a new terminal** and navigate to the frontend directory:
    ```bash
    cd frontend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the frontend development server:**
    ```bash
    npm run dev
    ```
    The React application should now be running and accessible at `http://localhost:5173` (or another port if 5173 is busy).

---

## 🚀 Usage

1.  Open your web browser and navigate to the frontend URL (e.g., `http://localhost:5173`).
2.  You will see a code editor on the left and an empty review panel on the right.
3.  Paste or write any JavaScript code snippet into the editor.
4.  Click the **"Review"** button.
5.  The application will send your code to the backend, which queries the Gemini API.
6.  The AI-generated code review will appear in the right-hand panel, formatted for readability.

---

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improvements, please feel free to fork the repository, create a new branch, and submit a pull request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.
