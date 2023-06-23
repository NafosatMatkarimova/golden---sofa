import styled from "styled-components";
import { SwiperSlide } from "swiper/react";
import { Colors, Flex } from "utils";
import { adaptiveValue } from "utils/variable";

const BannerWrapper = styled.div`
  padding: 100px 0 30px;
  background: ${Colors.lightGrey};
`;

const SwiperItems = styled(SwiperSlide)`
  ${Flex.spaceBetween}
  ${adaptiveValue("gap", 105, 75)}

@media (max-width: 993px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SwiperItemsImage = styled.div`
  max-width: 500px;
  width: 100%;
  height: auto;
  
  > image {
      width: 100%;
      object-fit: contain;
      background-clip: initial;
  }
`;

const SwiperInfo = styled.div`
  max-width: 604px;
  width: 100%;
  text-align: left;
`;

const InfoTitle = styled.h1`
  width: 100%;
  font-weight: 600;
  ${adaptiveValue("font-size", 44, 22)}
  ${adaptiveValue("line-height", 64, 34)}
  color: ${Colors.dark};
`;

const InfoText = styled.p`
  width: 287px;
  font-weight: 400;
  ${adaptiveValue("font-size", 14, 12)}
  ${adaptiveValue("line-height", 24, 18)}
  color: ${Colors.grey};
  margin-top: 20px;
`;

const PriceBox = styled.div`
  ${Flex.alignCenter}
  gap: 10px;
  ${adaptiveValue("margin-top", 32, 20)}
  margin-block: 20px;
`;

const PriceBadge = styled.span`
  font-size: 12px;
  line-height: 22px;
  color: ${Colors.grey};
`;

const MainPriceText = styled.p`
  ${adaptiveValue("font-size", 24, 18)}
  ${adaptiveValue("line-height", 28, 21)}
  color: ${Colors.dark};
`;

const DiscountText = styled.p`
  font-weight: 300;
  ${adaptiveValue("font-size", 24, 18)}
  ${adaptiveValue("line-height", 28, 21)}
  color: ${Colors.borderColor};
  text-decoration: line-through;
`;

const SwiperNavigation = styled.div`
  width: 180px;
  ${Flex.center}
  margin-inline: auto;
  ${adaptiveValue("margin-top", 50, 32)}
  ${adaptiveValue("margin-bottom", 48, 40)}
  gap: 10px;

  @media (max-width: 576px) {
    width: 100%;
    justify-content: space-between;
  }
`;

const SwiperNavBtn = styled.button`
  background-color: transparent;
  display: block;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export {
  BannerWrapper,
  SwiperItems,
  SwiperItemsImage,
  SwiperInfo,
  InfoTitle,
  InfoText,
  PriceBox,
  PriceBadge,
  MainPriceText,
  DiscountText,
  SwiperNavigation,
  SwiperNavBtn,
};
