import React from "react";
import PropTypes from "prop-types";

function MenuItems(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  );
}

MenuItems.propTypes = {};

export default MenuItems;
