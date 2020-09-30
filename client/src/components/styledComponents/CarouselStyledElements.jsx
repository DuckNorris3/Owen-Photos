import styled from 'styled-components';

const XButton = styled.button`
  background-color: transparent;
  border: none;
  font-family: Arial, sans-serif;
  color: white;
  height: 20px;
  width: 20px;
  padding: 5px;
  cursor: pointer;
  outline: none;

  &:hover {
    color: gray;
  }
`

export { XButton };