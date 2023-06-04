import { createGlobalStyle } from 'styled-components'


export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Rubik:wght@400;500;600;700&display=swap');
*{
    padding: 0;
margin: 0;
box-sizing: border-box;
list-style: none;
text-decoration: none;
}

body{
    font-family: Roboto;
}
main {
    height: 80vh;
}

`;
