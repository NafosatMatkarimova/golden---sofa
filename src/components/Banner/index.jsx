import React from "react";

import { Container } from "components/Container/style";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { useSwiperRef } from "hooks/useSwiperRef";
import { Swiper } from "swiper/react";
import { swiperElmentData } from "./data";
import Button from "../Button";
import * as S from "./style";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ArrowIcon } from "../../assets/images/svgIcons";

const Banner = () => {


  const [nextEl, nextElRef] = useSwiperRef();
  const [prevEl, prevElRef] = useSwiperRef();
  return (
    <S.BannerWrapper>
      <Container>
        <Swiper
          cssMode={true}
          navigation={{
            prevEl,
            nextEl,
          }}
          pagination={{
            el: ".pagination-bullets",
            type: "bullets",
          }}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          {swiperElmentData.map((el) => {
            return (
              <S.SwiperItems key={el.id}>
                <S.SwiperItemsImage>
                  <img src={el.image} alt={el.text} />
                </S.SwiperItemsImage>
                <S.SwiperInfo>
                  <S.InfoTitle>{el.title}</S.InfoTitle>
                  <S.InfoText>{el.text}</S.InfoText>
                  <S.PriceBox>
                    <S.PriceBadge>Цена</S.PriceBadge>
                    <S.MainPriceText>{el.mainPrice}</S.MainPriceText>
                    <S.DiscountText>{el.discount}</S.DiscountText>
                  </S.PriceBox>
                  <Button text={"Добавить в корзину"} />
                </S.SwiperInfo>
              </S.SwiperItems>
            );
          })}

          <S.SwiperNavigation>
            <S.SwiperNavBtn className="priv-el" ref={prevElRef}>
              <ArrowIcon />
            </S.SwiperNavBtn>
            <div className="pagination-bullets"></div>
            <S.SwiperNavBtn className="next-el" ref={nextElRef}>
              <ArrowIcon style={{ transform: "rotate(180deg)" }} />
            </S.SwiperNavBtn>
          </S.SwiperNavigation>
        </Swiper>
      </Container>
    </S.BannerWrapper>
  );
};

export default Banner;
