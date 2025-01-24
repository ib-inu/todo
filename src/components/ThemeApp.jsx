import App from '../App.jsx';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { lightTheme, darkTheme, GlobalStyles } from '../helper/theme.js';

const ThemedApp = () => {
    const theme = useSelector((state) => state.user.theme);
    const selectedTheme = theme === "light" ? lightTheme : darkTheme;

    return (
        <ThemeProvider theme={selectedTheme}>
            <GlobalStyles />
            <App />
        </ThemeProvider>
    );
};

export default ThemedApp;