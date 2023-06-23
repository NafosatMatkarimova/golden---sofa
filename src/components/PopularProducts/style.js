import styled from "styled-components";
import Colors, { adaptiveValue } from "utils/variable";
import { Flex } from "utils";
import { SwiperNavigation } from "components/Banner/style";
import { SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

const PopularWrapper = styled.section`
  width: 100%;
  ${adaptiveValue("padding-bottom", 100, 40)}
`;

const PopularHeader = styled.div`
  ${Flex.spaceBetween}
  ${adaptiveValue("margin-bottom", 64, 24)}
`;

const PopularSwiperNavigation = styled(SwiperNavigation)`
  margin-inline: inherit;
`;

const ProductCard = styled(SwiperSlide)`
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
  max-height: 320px;
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
  PopularWrapper,
  PopularHeader,
  PopularSwiperNavigation,
  ProductCard,
  ProductImageLink,
  ProductCardInfo,
  InfoTitle,
  PriceBoard,
  Price,
  OldPrice,
  SaleBox,
  InCashTextBox,
  CashText,
  ProductImage,
};
