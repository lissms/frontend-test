import React, { useState } from "react";
import PropTypes from "prop-types";
import { Title, Text, ArrowBtn, TitleContainer, MenuSections, TextContainer } from "./menuItem.styled";

function MenuItems(props) {
  const [hasFlag, setHasFlag] = useState(false);

  const handlerOpenText = (ev) => {
    setHasFlag(hasFlag ? false : true);
    console.log("çv.target.id", ev.currentTarget.id);
  };
  return (
    <MenuSections>
      <div className="menu-sections">
        <TitleContainer>
          <Title>{props.title}</Title>
          <ArrowBtn onClick={handlerOpenText} id={props.id} hasFlag={hasFlag}>
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

MenuItems.propTypes = {};

export default MenuItems;
