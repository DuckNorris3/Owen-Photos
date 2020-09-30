import styled from 'styled-components';

const XButton = styled.button`
  background-color: transparent;
  border: none;
  font-family: Arial, sans-serif;
  color: #DBDBDB;
  height: 20px;
  width: 20px;
  padding: 5px;
  cursor: pointer;
  outline: none;

  &:hover {
    color: white;
  }
`

const NavButton = styled.button`
  background-color: transparent;
  border: none;
  font-family: Arial, sans-serif;
  font-size: 30px;
  color: #DBDBDB;
  height: 40px;
  width: 40px;
  padding: 10px 5px;
  padding-bottom: 50px;
  cursor: pointer;
  outline: none;
  font-weight: 800;
  transition: width .1s, height .1s, font-size .1s, padding-bottom .1s;

  &:hover {
    color: white;
    height: 42px;
    width: 42px;
    font-size: 32px;
    padding-bottom: 52px;
    transition: width .1s, height .1s, font-size .1s, padding-bottom .1s;
  }
`

const PhotoNumber = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 10px;
  letter-spacing: 0.6px;
  word-spacing: 2px;
  color: #FFFFFF;
  margin: 0;
  padding: 6px;
  font-weight: 200;
  text-decoration: none;
  text-transform: none;
`

const HelpfulButton = styled.button`
  background-color:#41d9ab;
  border-radius:1px;
  border:none;
  display:inline-block;
  cursor:pointer;
  color:#ffffff;
  font-family:Arial;
  font-size:13px;
  font-weight:bold;
  padding:16px 25px;
  margin: 5px;
  margin-top: 7px;
  text-decoration:none;
  outline: none;
  text-shadow:0px 1px 0px #2f6627;
  transition: background-color 0.1s;

  &:hover {
    background-color: #3dc69e;
    transition: background-color 0.1s;
  }
`

export { XButton, NavButton, PhotoNumber, HelpfulButton };