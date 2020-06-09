import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto&family=Ubuntu:wght@700&display=swap');

    :root {
    --primary-color: ${props => props.theme.colors.primary};
    --title-color: ${props=> props.theme.colors.title};
    --text-color: ${props => props.theme.colors.text};
    }

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    body {
    background: #F0F0F5;
    -webkit-font-smoothing: antialiased;
    color: var(--text-color);
    }

    body, input, button {
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    }

    h1, h2, h3, h4, h5, h6 {
    color: var(--title-color);
    font-family: Ubuntu;
    }
`;