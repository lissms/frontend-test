import React, { useState } from "react";
import PropTypes from "prop-types";

function ModalWindow(props) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const handlerInputValueTitle = (ev) => {
    setTitle(ev.target.value);
  };
  const handlerInputValueText = (event) => {
    setText(event.target.value);
  };
  const handleClick = (ev) => {
    props.getValueForNewSections({ title: title, text: text });
  };

  return (
    <div>
      <form>
        <input
          onChange={handlerInputValueTitle}
          type="text"
          name="title"
          id="title"
          placeholder="add new title"
          value={title}
          required
        />
        <textarea
          onChange={handlerInputValueText}
          name="text"
          id="text"
          cols="30"
          rows="10"
          placeholder="add a text"
          value={text}
          required
        />

        <input type="button" value="submitted" onClick={handleClick} />
      </form>
    </div>
  );
}

ModalWindow.propTypes = {};

export default ModalWindow;
