import React from "react";
import PropTypes from "prop-types";

function ModalWindow(props) {
  return (
    <div>
      <form action="">
        <input type="text" name="title" id="title" placeholder="add new title" required />
        <textarea name="text" id="text" cols="30" rows="10" placeholder="add a text" required></textarea>
        <input type="button" value="submitted" />
      </form>
    </div>
  );
}

ModalWindow.propTypes = {};

export default ModalWindow;
