import { createGlobalStyle } from 'styled-components'
import Flex from './flex';
import Colors from './variable';


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


.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  /* background: ${Colors.light}; */
  ${Flex.center}
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

button{
    border: none;
}

.swiper-Pagination-bulles{
    width: auto;
}

.swiper-pagination-ballet{
    background-color: #ADD7FF;
}

.swiper-pagination-ballet-active{
  background-color: ${Colors.primarycolor};
}

.swiper-pagination-ballet:nth-child(even){

    
}

`;
