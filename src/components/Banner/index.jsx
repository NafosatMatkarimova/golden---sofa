import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from '../Container/style';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import * as S from "./style";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import img from "../../assets/images/swiperFoto/img.1.png"
import Button from '../Button';

const Banner = () => {
  return (
    <S.BannerWrapper>
     <Container>
     <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <S.SwiperItems>
            <S.SwiperItemsImage>
               <img src={img} alt="img" />
            </S.SwiperItemsImage>
            <S.SwiperInfo>
                <S.InfoTitle>
                Golden Soft GS-200Z-5 для офиса
                </S.InfoTitle>
                <S.InfoText>
                Замок дверной электронный Golden Soft GS-200Z-5 имеет роскошный глянцевый блеск, четкие линии, красивые формы.
                </S.InfoText>
                <S.PriceBox>
                    <S.PriceBadge>
                    Цена
                    </S.PriceBadge>
                    <S.MainPriceText>
                    33 000₽
                    </S.MainPriceText>
                    <S.DiscountText>
                    37 000₽
                    </S.DiscountText>
                </S.PriceBox>
                <Button text={"Добавить в корзину"}/>
            </S.SwiperInfo>
        </S.SwiperItems>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
     </Container>
    </S.BannerWrapper>
  )
}

export default Banner;