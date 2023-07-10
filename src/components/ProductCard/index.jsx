import React from "react";
import * as S from "./style";
import Rate from "components/Rate";

const ProductCard = ({ data }) => {
  const { inCash, image, title, name, price, oldPrice, id, mark } = data;
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
      </S.ProductCardInfo>
    </S.ProductCardWrapper>
  );
};

export default ProductCard;
