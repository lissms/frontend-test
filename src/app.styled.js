import styled from "styled-components";

export const Btn = styled.div`
  width: 180px;
  height: 38px;
  border-radius: 8px;
  border: solid 2px rgb(91, 141, 207);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  cursor: pointer;
  color: rgb(91, 141, 207);
  transition: transform ease 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`;
