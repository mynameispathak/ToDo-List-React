import React from "react";

function InputArea(props) {
  const [inputText, setInputText] = React.useState("");

  function handleChange(event) {
    const value = event.target.value;
    setInputText(value);
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      <button
        onClick={() => {
          if (inputText !== "") {
            props.onAdd(inputText);
            setInputText("");
          }
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
