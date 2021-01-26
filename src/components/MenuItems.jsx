import React, { useState } from "react";
import PropTypes from "prop-types";
import { Title, Text, ArrowBtn, TitleContainer, MenuSections } from "./menu.styled";

function MenuItems(props) {
  const [hasFlag, setHasFlag] = useState(false);

  const handlerFWork = () => {
    setHasFlag(hasFlag ? false : true);
  };
  return (
    <MenuSections>
      <div className="menu-sections">
        <TitleContainer>
          <Title>{props.title}</Title>
          <ArrowBtn onClick={handlerFWork} hasFlag={hasFlag}>
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
