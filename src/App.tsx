import React, {createContext, useState, useCallback} from 'react';
import logo from './logo.svg';
import './App.css';
import Affiliate from './Pages/Affiliate';
import { ThemeContext } from './Context';

interface themeObject {
  [key:string]: string
}

const themeSwitch: themeObject = {
  default: 'dark',
  dark: 'default'
};

function App() {
  const [theme, setTheme]: [string, Function] = useState('default');
  const btnHandleClick = useCallback(() => {
      setTheme(themeSwitch[theme]);
  }, []);
  return (
    <ThemeContext.Provider value={theme}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <section>
          <Affiliate/>
        </section>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
