import React from 'react';
import * as S from "./style";
import { PhoneIcon } from 'assets/images/svgIcons';

const BurgerMenu = ({open ,handleClick}) => {
    console.log(open);
  return (
    <S.BurgerMenuWrapper open={open}>
     <S.BurgerMenuNav>
        <S.BurgerMenuNavLink to="/" onClick={handleClick}>Главная</S.BurgerMenuNavLink>
        <S.BurgerMenuNavLink to="/catalog" onClick={handleClick}>Каталог</S.BurgerMenuNavLink>
        <S.BurgerMenuNavLink to="/discount" onClick={handleClick}>Оптовая продажа</S.BurgerMenuNavLink>
        <S.BurgerMenuNavLink to="/about-us" onClick={handleClick}>О нас</S.BurgerMenuNavLink>
     </S.BurgerMenuNav>
      <S.BurgerMenuFooter>
      <S.FooterPhoneContent href={`tel:+${79668855499}`}>
            <PhoneIcon/>
            +7(966) 88 55 499
     </S.FooterPhoneContent>
     <S.BurgerMenuRecall>
     Обратный звонок
     </S.BurgerMenuRecall>
      </S.BurgerMenuFooter>
    </S.BurgerMenuWrapper>
  )
}

export default BurgerMenu;