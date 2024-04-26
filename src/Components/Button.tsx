import React, {useContext} from 'react';
import { ThemeContext } from '../Context';

function Button() {
    const themeName = useContext(ThemeContext);

    const isDarkTheme: boolean = themeName === 'dark';
    const style = {
        padding: '10px',
        background: isDarkTheme ? '#333333': '#ccc',
        color: isDarkTheme ? '#ccc' : '#333'
    };
    return <button style={style}>Нажми меня</button>
}

export default Button;