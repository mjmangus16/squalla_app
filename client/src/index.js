import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import * as serviceWorker from "./serviceWorker";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import { green, blue } from "@material-ui/core/colors";
// import { Provider } from "react-redux";
// import store from "./redux/store";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[900]
    },
    secondary: {
      main: blue[800]
    },
    type: "dark"
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    {/* <Provider store={store}> */}
    <App />
    {/* </Provider> */}
  </MuiThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
