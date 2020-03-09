import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider, CSSReset, theme } from "@chakra-ui/core";



const ThemedApp = () => {

    const customTheme = {
        ...theme,
        colors: {
            ...theme.colors,
            lightMossGreen: '#B8D8BA',
            bone: '#D9DBBC',
            veryPaleOrange: '#FCDDBC',
            marvelous: '#EF959D',
            wenge: '#69585F'
        }
    }

    return (
        <ThemeProvider theme={customTheme}> 
            <CSSReset /> 
            <App /> 
        </ThemeProvider>
    )
}

ReactDOM.render(<ThemedApp />, document.getElementById('root'));

serviceWorker.unregister();
