import { createGlobalStyle } from "styled-components";

const lightTheme = {
  body: "#FFF",
  text: "#1F1F1F",
  container: "#EEF6EF",
  isActive: "#35793729",
  main: "#EEF6EF",
  todos: "#fff",
  btnBg: "#35793729",
  btnColor: "#357937"
};

const darkTheme = {
  body: "#1F1F1F",
  text: "#FFF",
  container: "#2C2C2C",
  isActive: "#35793739",
  main: "#496E4B33",
  todos: "#232323",
  btnBg: "#347136",
  btnColor: "#CFCFCF",

};

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
  }

`;

export { lightTheme, darkTheme, GlobalStyles };
