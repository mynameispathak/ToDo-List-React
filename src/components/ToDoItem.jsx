import React, { useState } from "react";

function ToDoItem(props) {
  // var isClicked = false;
  const [isDone, setISDone] = useState(false);

  function handleClick() {
    setISDone((prevValue) => !prevValue);
  }

  return (
    <li
      onClick={handleClick}
      style={{ textDecoration: isDone && "line-through" }}
    >
      {props.item}
    </li>
  );
}

export default ToDoItem;
