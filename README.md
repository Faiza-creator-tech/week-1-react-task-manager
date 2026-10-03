# Task Manager (React + Vite)

A component-driven Task Manager built with **React** and **Vite**. This project is a rebuild of my Month 1 JavaScript Task Manager, done as the Week 1 task of the AUREX Full-Stack Internship (Month 2).

## Live Demo
week-1-react-task-manager-gules.vercel.app

## Screenshots

| Empty state | Tasks added | Completed task |
|---|---|---|
| [Empty state](screenshots/Empty.png) | [Tasks added](screenshots/tasks.png) | [Completed task](screenshots/Completed.png) |

## Features

**Required features**
- Add new tasks using a controlled form input
- Display tasks dynamically using list mapping (with unique `key` props)
- Toggle task completion (checkbox with a strike-through on completed tasks)
- Delete tasks from the list
- Input validation: empty (or spaces-only) tasks cannot be added

**Extra features**
- Edit an existing task (the form switches to "Save" mode)
- Press **Enter** to add or save a task
- Input is auto-focused on page load and after adding or editing
- Tasks are saved in the browser using **localStorage**, so they stay after a refresh

## Tech Stack

- React
- Vite
- Tailwind CSS
- uuid (for unique task ids)

## Component Structure

```
App
├── Header
├── TaskForm        (controlled input, submission, validation)
└── TaskList        (maps through the tasks array)
    └── TaskItem    (single task display and actions)
```

## How the Data Flows

- All state (`todo`, `todos`, `editId`) lives in **`App`**, which is their closest common parent.
- Data goes **down** to children through props (`todos`, `todo`, `item`).
- Actions go **up** through functions passed as props (`onToggle`, `onEdit`, `onDelete`, `onSubmit`, `onChange`). When a button in `TaskItem` is clicked, it calls the matching function defined in `App`, which updates the state, and React re-renders the UI.

## Folder Structure

```
week-1-react-task-manager/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── TaskForm.jsx
│   │   ├── TaskList.jsx
│   │   └── TaskItem.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
└── package.json
```

## Getting Started

**Prerequisites:** Node.js (LTS) and npm.

```bash
# 1. Clone the repository
git clone https://github.com/YOUR-USERNAME/week-1-react-task-manager.git

# 2. Go into the project folder
cd week-1-react-task-manager

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Then open the local link shown in the terminal (usually `http://localhost:5173`).

To create a production build:

```bash
npm run build
```

## Learning Outcomes

- Setting up a React project with Vite and understanding its folder structure
- Writing JSX and creating reusable functional components
- Passing data with props and passing functions as props for child-to-parent communication
- Managing UI state with `useState` and lifting state up
- Handling events: `onClick`, `onChange`, `onSubmit`
- Building controlled form inputs with basic validation
- Rendering lists with `map` and unique `key` props
- Updating state immutably using `map`, `filter`, and the spread operator
- Using `useRef` and `useEffect` for input focus and saving data to localStorage
- Styling with Tailwind CSS
- Using Git and GitHub, and deploying a React app

## Author

Faiza 
AUREX Full-Stack Internship, Month 2, Week 1
