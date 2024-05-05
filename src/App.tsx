import React, {createContext, useState, useCallback} from 'react';
import logo from './logo.svg';
import './App.css';
import Affiliate from './Pages/Affiliate';
import {Routes, Route} from 'react-router-dom';
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
          <Routes>
            <Route path="*" element={<Affiliate/>}></Route>
            <Route path="/affiliate" element={<Affiliate/>}></Route>
          </Routes>
        </header>
        <section>
          
        </section>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
