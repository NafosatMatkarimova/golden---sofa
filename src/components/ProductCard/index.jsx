import React, { useContext } from "react";
import Rate from "components/Rate";
import * as S from "./style";

import MainContext from "context/CartContext";
import { Button } from "@mui/material";





const ProductCard = ({ data, celect}) => {
  const { inCash, image, title, name, price, oldPrice, id, mark } = data;
  const cartToggle = () => {
    return celect ? removeFromCart (id) : addToCart (data)
  }
  const {addToCart, removeFromCart} = useContext (MainContext);
  const {cartItems} = useContext(MainContext)
  return (
    <S.ProductCardWrapper>
      <S.ProductImageLink to={`/product/detail/${id}`}>
        <S.InCashTextBox>
          <S.CashText>{inCash ? "В наличии" : "Нет в наличии"}</S.CashText>
        </S.InCashTextBox>
        <S.SaleBox>SALE</S.SaleBox>
        <img src={image} alt={title} />
      </S.ProductImageLink>
      <S.ProductCardInfo>
        <S.RateText>
        <Rate mark={mark}/>
        <S.RateTextInfo>(12) отзывов</S.RateTextInfo>
        </S.RateText>
        <S.InfoTitle>{name}</S.InfoTitle>
        <S.PriceBoard>
          <S.Price>{price}</S.Price>
          <S.OldPrice>{oldPrice}</S.OldPrice>
        </S.PriceBoard>
        <Button oneclik= {cartToggle}>{celect ? "Remove from cart" : "Add to cart"}</Button>
      </S.ProductCardInfo>
    </S.ProductCardWrapper>
  );
};

export default ProductCard;
