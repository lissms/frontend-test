import React from "react";
import MenuItems from "./MenuItems";
import PropTypes from "prop-types";

function Menu(props) {
  const Items = props.itemsList.map((item, index) => {
    return (
      <li key={index}>
        <MenuItems title={item.title} text={item.text} />
      </li>
    );
  });

  return <ul>{Items}</ul>;
}

Menu.propTypes = {
  itemsList: PropTypes.array,
};

export default Menu;
