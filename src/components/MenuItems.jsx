import React, { useState } from "react";
import PropTypes from "prop-types";
import { Title, Text, ArrowBtn, TitleContainer, MenuSections } from "./menuItem.styled";

function MenuItems(props) {
  const [hasFlag, setHasFlag] = useState(false);

  const handlerFWork = (ev) => {
    setHasFlag(hasFlag ? false : true);
    console.log("çv.target.id", ev.currentTarget.id);
  };
  return (
    <MenuSections>
      <div className="menu-sections">
        <TitleContainer>
          <Title>{props.title}</Title>
          <ArrowBtn onClick={handlerFWork} id={props.id} hasFlag={hasFlag}>
            <div className="arrow"></div>
            <div className="arrow-bottom"></div>
          </ArrowBtn>
        </TitleContainer>
        <Text>{props.text}</Text>
      </div>
    </MenuSections>
  );
}

MenuItems.propTypes = {};

export default MenuItems;
