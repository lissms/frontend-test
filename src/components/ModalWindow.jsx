import React, { useState } from "react";
import { Modal, InputTitle, Textarea, InputSubmit, Close } from "./modalWindow.styled";
import PropTypes from "prop-types";

function ModalWindow(props) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const handleFormSubmit = (ev) => {
    ev.preventDefault();
  };

  const handlerInputValueTitle = (ev) => {
    setTitle(ev.target.value);
  };
  const handlerInputValueText = (event) => {
    setText(event.target.value);
  };
  const handleClick = (ev) => {
    props.getValueForNewSections({ title: title, text: text });
    props.setHasModalOpen(false);
  };

  const CloseModalWindow = () => {
    props.setHasModalOpen(false);
  };

  return (
    <Modal>
      <div className="modal-container">
        <div className="title-modal">
          <h2>Add New Sections</h2>

          <Close onClick={CloseModalWindow}>
            <p>X</p>
          </Close>
        </div>
        <form onSubmit={handleFormSubmit}>
          <InputTitle
            onChange={handlerInputValueTitle}
            type="text"
            name="title"
            id="title"
            placeholder="add new title"
            value={title}
            required
          />
          <Textarea
            onChange={handlerInputValueText}
            name="text"
            id="text"
            cols="30"
            rows="10"
            placeholder="add a text"
            value={text}
            required
          />
          <InputSubmit
            type="submit"
            value="save"
            text={text}
            title={title}
            onClick={handleClick}
            disabled={text === "" || title === ""}
          />
        </form>
      </div>
    </Modal>
  );
}

ModalWindow.propTypes = {};

export default ModalWindow;
