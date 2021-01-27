import React, { useState } from "react";
import PropTypes from "prop-types";
import { Title, Text, ArrowBtn, TitleContainer, MenuSections, TextContainer } from "./menuItem.styled";

function MenuItems(props) {
  const [hasFlag, setHasFlag] = useState(false);

  const handlerOpenText = () => {
    setHasFlag(hasFlag ? false : true);
  };

  return (
    <MenuSections>
      <div className="menu-sections">
        <TitleContainer>
          <Title>{props.title}</Title>
          <ArrowBtn onClick={handlerOpenText} hasFlag={hasFlag}>
            <div className="arrow"></div>
            <div className="arrow-bottom"></div>
          </ArrowBtn>
        </TitleContainer>
        <TextContainer hasFlag={hasFlag}>
          <Text>{props.text}</Text>
        </TextContainer>
      </div>
    </MenuSections>
  );
}

MenuItems.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

export default MenuItems;
