import styled from "styled-components";
import { SwiperSlide } from "swiper/react";
import { Flex } from "../../utils";
import Colors, { adaptiveValue } from "../../utils/variable";


const BannerWrapper = styled.div`
padding: 100px 0 30px;
background-color: #fafafa;

`
const SwiperItems = styled(SwiperSlide)`
display: flex;
align-items: flex-start;
${adaptiveValue("gap", 35, 75)}

@media (max-width: 993px){
    flex-direction: column;
    align-items: center;
}
`

const SwiperItemsImage = styled.div`
   max-width: 500px;
   width: 100%;
   height: auto;

   & > img{
    width: 100%;
    object-fit: contain;
   }
`

const SwiperInfo = styled.div`
 max-width: 604px;
 width: 100%;
 text-align: left;
`

const InfoTitle = styled.h1`
width: 100%;
font-weight: 600;
${adaptiveValue("font-size", 44, 22)}
${adaptiveValue("line-height", 62, 34)}
color: ${Colors.dark};
`

const InfoText =styled.p`
font-weight: 400;
${adaptiveValue("font-size", 14, 12)}
${adaptiveValue("line-height", 24,)}
color: ${Colors.grey};
motion-offset: 20px;
width: 287px;
`

const PriceBox = styled.div`
 ${Flex.alignCenter}
 ${adaptiveValue("margin-top", 32 ,20)}
 margin-block: 20px;
 gap: 10px;
`

const PriceBadge = styled.span`
font-size: 12px;
line-height: 22px;
color: ${Colors.grey};
`

const MainPriceText = styled.p`
${adaptiveValue("font-size", 24, 18)}
${adaptiveValue("line-height",28, 18)}
color: ${Colors.dark};
`

const DiscountText = styled.p`
 font-weight: 300;
${adaptiveValue("font-size", 24, 18)}
${adaptiveValue("line-height",28, 18)}
color: ${Colors.borderColor};
text-decoration: line-through;
` 
const SwiperNavigation = styled.div`
width: 180px;
margin: 20px auto;
${Flex.alignCenter}
 gap: 20px;
`

export {BannerWrapper, SwiperItems, SwiperItemsImage, SwiperInfo, InfoTitle, InfoText, PriceBox, PriceBadge,MainPriceText,DiscountText, SwiperNavigation}