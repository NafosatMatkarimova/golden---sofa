import React from 'react'
import { DiscountText, HeaderTopWrapper, RecollText, TextContent } from './style';

const HeaderTop = () => {
  return (
    <HeaderTopWrapper>
    <TextContent>
    <DiscountText>
    Скидка 10% по промокоду “ZAMOK” на все заказы до 10.09
    </DiscountText>
    <RecollText href='tel:+998919999'>
    Обратный звонок
    </RecollText>
    </TextContent>
    </HeaderTopWrapper>
  )
}

export default HeaderTop;