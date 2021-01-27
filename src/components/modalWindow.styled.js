import styled from "styled-components";

export const Modal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  width: 100vh;
  height: 100vh;
  background-color: rgba(0, 43, 69, 0.8);

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
    color: rgb(91, 141, 207);
  }
  &:-moz-placeholder {
    color: rgb(91, 141, 207);
  }
  &::-moz-placeholder {
    color: rgb(91, 141, 207);
  }
  &:-ms-input-placeholder {
    color: rgb(91, 141, 207);
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
    color: rgb(91, 141, 207);
  }
  &:-moz-placeholder {
    color: rgb(91, 141, 207);
  }
  &::-moz-placeholder {
    color: rgb(91, 141, 207);
  }
  &:-ms-input-placeholder {
    color: rgb(91, 141, 207);
  }
`;
export const InputSubmit = styled.input`
  width: 100%;
  height: 48px;
  border-radius: 4px;
  color: rgb(91, 141, 207);
  border: none;
  -webkit-appearance: none;
  -webkit-border-radius: none;
`;
export const Close = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 200px;
  border: solid 2px rgb(91, 141, 207);
  position: absolute;
  top: 191px;
  right: 271px;
  cursor: pointer;
  & p {
    font-size: 15px;
    color: rgb(91, 141, 207);
  }
`;
