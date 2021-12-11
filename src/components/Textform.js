import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleClear = () => {
    setText("");
    props.showAlert("All text Cleared", "success");

  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    console.log(newText);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");

  };
  const handleCopy = () =>{
    navigator.clipboard.writeText(text);
    props.showAlert("All text Copied", "success");
  };

  const countWords = () => {
    return text.split(/\n| /).filter((e) => {
      return e !== "";
    }).length;
  };
  const [text, setText] = useState("");
  // text = "other text"; wrong way to change text
  // setText("other text"); // right way to change text
  let titleColor = props.mode === "dark" ? "#d8e6db" : "#5a635c";
  let bgColor = props.mode === "dark" ? "#5a635c" : "#d8e6db";
  return (
    <>
      <div style={{ color: titleColor, backgroundColor: bgColor }}>
        <div className="my-3">
          <label htmlFor="myBox" className="form-label display-6">
            {props.heading}
          </label>
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-success" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-danger mx-2" onClick={handleClear}>
          Clear text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove extra spaces
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy whole textarea
        </button>
      </div>
      <div className="container border p-2 my-3">
        <p className="display-5">Result</p>
        <p>
          Words: {countWords(text)}
          <br />
          Characters: : {text.trim().length}
          <br />
          Time to read: {(text.split(" ").length - 1) * 0.008} minutes
        </p>
        <p className="display-5">Preview</p>
        <p>{text}</p>
      </div>
    </>
  );
}
