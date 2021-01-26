import styled from "styled-components";

export const MenuSections = styled.div`
  width: 60%;
  margin: 20px;
  & .menu-sections {
    border-bottom: solid 2px gray;
  }
`;
export const Title = styled.h3`
  color: blue;
  padding: 16px;
`;
export const Text = styled.p`
  color: gray;
  padding: 16px;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ArrowBtn = styled.div`
  display: flex;
  width: 52px;
  height: 52px;
  padding: 20px;
  border-radius: 100px;
  transform: rotate(180deg);
  justify-content: center;
  align-items: center;
  cursor: pointer;
  & .arrow {
    width: 10px;
    height: 3px;
    background: blue;
    transform-origin: left;
    transform: ${(props) => (props.hasFlag ? `rotate(45deg) translateY(-5px);` : `rotate(-45deg) translateY(5px);`)};
    transition: transform ease 0.5s;
  }
  & .arrow-bottom {
    width: 10px;
    height: 3px;
    background: blue;
    transform-origin: right;
    transform: ${(props) => (props.hasFlag ? `rotate(-45deg) translateY(-5px);` : `rotate(45deg) translateY(5px);`)};
    transition: transform ease 0.5s;
  }
`;
