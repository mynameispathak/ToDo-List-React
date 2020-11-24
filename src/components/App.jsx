import React from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [inputText, setInputText] = React.useState("");
  const [items, setItems] = React.useState([]);

  function handleChange(event) {
    const value = event.target.value;
    setInputText(value);
  }

  function addItem() {
    setItems((prevItems) => [...prevItems, inputText]);
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((toDoItem) => (
            <ToDoItem item={toDoItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
