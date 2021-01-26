import React from "react";
import PropTypes from "prop-types";

function MenuItems(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.text}</p>
    </div>
  );
}

MenuItems.propTypes = {};

export default MenuItems;
