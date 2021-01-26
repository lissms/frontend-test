import styled from "styled-components";

export const Modal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  width: 100vh;
  height: 100vh;
  background-color: rgba(0, 0, 255, 0.2);

  & form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
export const InputTitle = styled.input`
  width: 100%;
  height: 48px;

  border: 2px solid #21687c;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 25px;

  margin-bottom: 12px;
  &::-webkit-input-placeholder {
    color: blue;
  }
  &:-moz-placeholder {
    color: blue;
  }
  &::-moz-placeholder {
    color: blue;
  }
  &:-ms-input-placeholder {
    color: blue;
  }
`;
export const Textarea = styled.textarea`
  width: 100%;
  height: 267px;

  border: 2px solid #21687c;
  box-sizing: border-box;
  border-radius: 4px;

  padding: 25px;
  margin-bottom: 12px;
  &::-webkit-input-placeholder {
    color: blue;
  }
  &:-moz-placeholder {
    color: blue;
  }
  &::-moz-placeholder {
    color: blue;
  }
  &:-ms-input-placeholder {
    color: blue;
  }
`;
export const InputSubmit = styled.input`
  width: 100%;
  height: 48px;
  background: gray;
  border-radius: 4px;
  color: blue;
  border: none;
  -webkit-appearance: none;
  -webkit-border-radius: none;
`;
export const Close = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;

  background-color: white;
  border-radius: 200px;
  position: absolute;
  top: 191px;
  right: 271px;
  cursor: pointer;
  & p {
    font-size: 25px;
    color: gray;
  }
`;
