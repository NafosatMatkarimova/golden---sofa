import React from "react";
import * as S from "./style";

const ProductCard = ({ data }) => {
  const { id, inCash, image, title, name, price, oldPrice } = data;
  return (
    <S.ProductCardWrapper>
      <S.ProductImageLink to="/">
        <S.InCashTextBox>
          <S.CashText>{inCash ? "В наличии" : "Нет в наличии"}</S.CashText>
        </S.InCashTextBox>
        <S.SaleBox>SALE</S.SaleBox>
        <img src={image} alt={title} />
      </S.ProductImageLink>
      <S.ProductCardInfo>
        <S.InfoTitle>{name}</S.InfoTitle>
        <S.PriceBoard>
          <S.Price>{price}</S.Price>
          <S.OldPrice>{oldPrice}</S.OldPrice>
        </S.PriceBoard>
      </S.ProductCardInfo>
    </S.ProductCardWrapper>
  );
};

export default ProductCard;
