import React, { useEffect, useRef, useState } from 'react'
import { Swiper} from "swiper/react";
import { Container } from '../Container/style';
import { Title } from '../WhyUs/stylr';
import* as S from "./style"

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation} from 'swiper';

import { ArrowIcon } from '../../assets/images/svgIcons';
import { SwiperNavBtn } from '../Banner/style';
import { PopularProductData } from './data';

const PopularProducts = () => {

    const useSwiperRef = () => {
        const [wrapper, setWrapper] = useState(null);
        const ref = useRef(null);

        useEffect(() => {
            if (ref.current) {
                setWrapper(ref.current);
            }
        }, []);

        return [wrapper, ref];
    };

    
    const [nextEl, nextElRef] = useSwiperRef();
    const [prevEl, prevElRef] = useSwiperRef();


  return (
    <S.PopularWrapper>
        <Container>
            <S.PopularHeader>
                <Title>Наши популярные продукты</Title>
                <S.PopularSwiperNavigation>
                    <SwiperNavBtn ref={prevElRef}>
                      <ArrowIcon/>
                      </SwiperNavBtn>
                      <SwiperNavBtn ref={nextElRef}>
                      <ArrowIcon style={{transform: "rotate(-180deg)"}}/>
                    </SwiperNavBtn>
                    </S.PopularSwiperNavigation>
            </S.PopularHeader>

            <Swiper
        slidesPerView={4}
        spaceBetween={30}
        navigation={{
            prevEl,
            nextEl,
        }}

        breakpoints={{
            300: {slidesPerView:1,},
            460: {slidesPerView:3,},
            620: {slidesPerView:3,},
            770: {slidesPerView:4,},
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
      {PopularProductData.map((el) => (
        <S.ProductCard key={el.id}>
           <S.ProductImageLink to="/">
            <S.InCashTextBox>
                <S.CashText>
                    {el.inCash ? "В наличии" : "Нет в наличии"}
                </S.CashText>
            </S.InCashTextBox>
            <S.SaleBox>SALE</S.SaleBox>
            <img src={el.image} alt={el.title} />
           </S.ProductImageLink>
           <S.ProductCardInfo>
            <S.InfoTitle>{el.title}</S.InfoTitle>
            <S.PriceBoard>
                <S.Price>{el.price}</S.Price>
                <S.OldPrice>{el.oldPrice}</S.OldPrice>
            </S.PriceBoard>
           </S.ProductCardInfo>
        </S.ProductCard>
      ))}
      </Swiper>
        </Container>
    </S.PopularWrapper>
  )
}

export default PopularProducts;