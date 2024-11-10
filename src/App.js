import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("");
  const [todoLists, setTodoLists] = useState([]);

  // Function to add text to the todo list
  function addTask() {
    if (text.trim() !== "") {
      // Ensure the input is not empty
      setTodoLists([...todoLists, { text: text, isDone: false }]); // Add the new task to the todo list
      setText(""); // Clear the input field
    }
  }

  // Function to mark task as done
  function toggleTaskDone(index) {
    const newTodoLists = todoLists.map((todo, i) => {
      if (i === index) {
        return { ...todo, isDone: !todo.isDone };
      }
      return todo;
    });
    setTodoLists(newTodoLists);
  }

  // Function to delete a task
  function deleteTask(index) {
    const newTodoLists = todoLists.filter((_, i) => i !== index);
    setTodoLists(newTodoLists);
  }

  return (
    <div className="App">
      <div className="container my-app">
        <h1 className="heading-1">TODO LIST APPLICATION</h1>
        <h2>DAY MUST BE ORGANIZED WITH THE WORKS</h2>

        <div className="input-group">
          <input
            type="text"
            aria-label="First name"
            className="form-control"
            value={text} // Bind input value to state
            onChange={(e) => setText(e.target.value)} // Update state on input change
            placeholder="Enter your task" // Add a placeholder for better UX
          />
          <button className="btn btn-primary" onClick={addTask}>
            ENTER
          </button>
        </div>
        <div>
          <ol className="list-group">
            {todoLists.map((todo, index) => (
              <li
                key={index}
                className={`list-group-item ${todo.isDone ? "done" : ""}`}
              >
                <span
                  onClick={() => toggleTaskDone(index)}
                  style={{
                    textDecoration: todo.isDone ? "line-through" : "none",
                  }}
                >
                  {todo.text}
                </span>
                <button
                  className="btn btn-danger btn-sm float-end"
                  onClick={() => deleteTask(index)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
