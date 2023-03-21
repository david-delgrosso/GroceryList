import { React, useState } from "react";
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeContext } from "./ThemeContext";
import './App.css'
import { ThemeProvider } from "@mui/material";
import { lightTheme, darkTheme } from "./Theme";
import { PageContext } from "./PageContext";
import { UrlContext } from "./UrlContext";

function App() {
  const [theme, setTheme] = useState("light")
  const [page, setPage] = useState("groceries")
  const ip = process.env.REACT_APP_IP;
  const muiTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={muiTheme}>
        <div>
          <UrlContext.Provider value={ip}>
            <Navbar updatePage={setPage} />
            <PageContext.Provider value={page}>
              <Main />
            </PageContext.Provider>
            <Footer />
          </UrlContext.Provider>
        </div>
      </ThemeProvider >
    </ThemeContext.Provider>
  );
}

export default App;
