import styled from "styled-components";
import { Link } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import Flex from "utils/flex";
import Colors from "utils/variable";



const ProductCardWrapper = styled.div`
  max-width: 288px;
  width: 100%;
  position: relative;
  background-color: ${Colors.lightGrey};
  ${Flex.flexBetween}
  flex-direction: column;
  border: 1px solid ${Colors.borderColor};
`;

const ProductImageLink = styled(Link)`
  width: 100%;
  height: 320px;
  background-color: ${Colors.lightGrey};
`;

const ProductCardInfo = styled.div`
  padding: 10px 12px;
  text-align: left;
`;

const InfoTitle = styled.h3`
  width: 100%;
  font-size: 16px;
  line-height: 26px;
  color: ${Colors.grey};
`;

const PriceBoard = styled.div`
  ${Flex.alignCenter}
  gap: 12px;
  margin-top: 10px;
`;

const Price = styled.p`
  font-size: 20px;
  line-height: 24px;
  color: ${Colors.dark};
`;

const OldPrice = styled.span`
  font-size: 18px;
  line-height: 21px;
  color: ${Colors.grey};
  text-decoration: line-through;
`;

const SaleBox = styled.span`
  position: absolute;
  top: 12px;
  background-color: ${Colors.light};
  right: 12px;
  padding: 8px 10px;
  font-size: 12px;
  line-height: 14px;
  color: ${Colors.dark};
  z-index: 15;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.03);
`;

const InCashTextBox = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  ${Flex.alignCenter};
  gap: 8px;
  background-color: ${Colors.light};
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.03);
  padding-inline: 5px;
`;

const ProductImage = styled.img`
  width: 200px !important;
  height: auto;
  object-fit: contain;
  display: block;
  margin: 0 auto;
`;

const CashText = styled.span`
  font-size: 14px;
  line-height: 24px;
  color: ${Colors.gray};
`;

export {
  ProductCardWrapper,
  ProductImageLink,
  ProductCardInfo,
  InfoTitle,
  PriceBoard,
  Price,
  OldPrice,
  SaleBox,
  ProductImage,
  CashText,
  InCashTextBox,
};
