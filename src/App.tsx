import Router from "./router";
import GlobalStyle from "./styles/globalstyles";
import { ReactQueryDevtools } from "react-query/devtools";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router />
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </>
  );
};

export default App;
