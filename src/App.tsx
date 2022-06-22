import Router from "./router";
import GlobalStyle from "./styles/globalstyles";
import { ReactQueryDevtools } from "react-query/devtools";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/theme";

const App = () => {
  return (
    <>
      <ThemeProvider theme={false ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Router />
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </ThemeProvider>
    </>
  );
};

export default App;
