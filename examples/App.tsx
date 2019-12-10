import React, { FC } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import Page from "./Page";
import { TopTipsProvider } from "../build";
import "./weui.min.css";
import "../build/index.css";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3266cc"
    },
    secondary: {
      main: "#3266cc"
    }
  }
});

interface Props {}
const App: FC<Props> = ({}) => {
  return (
    <MuiThemeProvider theme={theme}>
      <TopTipsProvider>
        <Page />
      </TopTipsProvider>
    </MuiThemeProvider>
  );
};

export default App;
