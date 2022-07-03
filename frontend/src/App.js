import React from "react"
import "./App.css"

// material UI
import indigo from "@material-ui/core/colors/indigo"
import createMuiTheme from "@material-ui/core/styles/createMuiTheme"
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles"

// component
import NavBar from "./components/NavBar"
import ApiContextProvider from "./context/ApiContext"
import Main from "./components/Main"

// theme color
const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: {
      main: "#f44336",
    },
  },
  typography: {
    fontFamily: '"Comic Neue",cursive',
  },
})

const App = () => {
  return (
    <ApiContextProvider>
      <MuiThemeProvider theme={theme}>
        <NavBar />
        <Main />
      </MuiThemeProvider>
    </ApiContextProvider>
  );
}

export default App
