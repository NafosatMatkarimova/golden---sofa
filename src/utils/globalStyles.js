import { createGlobalStyle } from 'styled-components'
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

button{
    border: none;
}
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-pagination-bullets{
    width: auto !important;
}

.swiper-pagination-bullet{
    width: 8px;
    height: 8px;
    background-color: #add7ff;
    position: relative;
    transition: all .3s;
}

.swiper-pagination-bullet::after{
        content: "";
        position: absolute;
        top: -8px;
        left: -8.4px;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        border: 1px solid #ADD7FF;
        opacity: 0;
}


.swiper-pagination-bullet:nth-child(even){
    margin-inline: 24px;
}

.swiper-pagination-bullet-active{
    background-color: ${Colors.primarycolor};
}

.swiper-pagination-bullet-active.swiper-pagination-bullet::after {
        opacity: 1;
    }


    .swiper-button-disabled svg path {
        stroke: #A4A4A4 !important ;
    }

`;
