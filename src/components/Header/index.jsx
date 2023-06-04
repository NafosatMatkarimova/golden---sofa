import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderTop from './HeaderTop/index.jsx';
import BurgerMenu from './BurgerMenu/index.jsx';
import { Container } from '../Container/style.js';
import* as style from "./style.js"
import {LogoIcon, PhoneIcon, CartIcon, LikeIcon} from "../../assets/images/svgIcons";

import "./style.js"



const Header = () => {

    const [burger, setBurger] = useState(false)

        const handleClick = () => {
            setBurger(!burger)
        };
 
  return (
    < style.HeaderWrapper>
    <HeaderTop/>

    <style.HeaderNavbar>
        <Container>
            <style.HeaderNavContent>
                <style.BurgerMenuContent onClick = {() => handleClick()}>
                    <style.BurgerMenuRows/>
                    <style.BurgerMenuRows/>
                    <style.BurgerMenuRows/>
                </style.BurgerMenuContent>
                <style.LogoLink to="/">
                    <LogoIcon/>
                </style.LogoLink>
                 <style.HeaderNavLinkList>
                  <style.NavLink to='/'>Главная</style.NavLink>
                  <style.NavLink to='/'>Каталог</style.NavLink>
                  <style.NavLink to='/discount'>Оптовая продажа</style.NavLink>
                  <style.NavLink to='/about-us'>О нас</style.NavLink>
                 </style.HeaderNavLinkList>
                 <style.UserAction >
                    <style.PhoneContent href={`tel:+${79665588499}`}>
                        <PhoneIcon/>
                       +7 (966) 55 88 499
                    </style.PhoneContent>
                    <style.ActionBox>
                        <Link to="/favourite">
                        <LikeIcon/>
                        </Link>
                        <Link to="/cart">
                        <CartIcon/>
                        </Link>
                    </style.ActionBox>
                 </style.UserAction>
            </style.HeaderNavContent>
        </Container>
         <BurgerMenu open = {burger} handleClick = {handleClick}/>
    </style.HeaderNavbar>
    </style.HeaderWrapper>
  )
}

export default Header;