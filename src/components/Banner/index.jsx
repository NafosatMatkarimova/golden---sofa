import React, {useEffect, useRef, useState}from "react";
import { Swiper } from "swiper/react";
import { Container } from '../Container/style';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import * as S from "./style";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import img from '../../assets/images/swiperFoto/img.1.png';

import Button from '../Button';
import { ArrowIcon } from "../../assets/images/svgIcons";

const Banner = () => {


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
    <S.BannerWrapper>
     <Container>
     <Swiper
        cssMode={true}
        pagination={{
            el:'.pagination-ballets',
            type:"bullets"
        }}
        navigation={{
            prevEl,
            nextEl,
        }}
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
           <S.SwiperNavigation>
            <button className="priv-el" pre={prevElRef}><ArrowIcon/></button>
            <div className="paginatoin-ballets"></div>
            <button className="next-el" pre={nextElRef}><ArrowIcon style={{transform: "rotate(180deg)"}}/></button>
           </S.SwiperNavigation>
      </Swiper>
     </Container>
    </S.BannerWrapper>
  )
}

export default Banner;