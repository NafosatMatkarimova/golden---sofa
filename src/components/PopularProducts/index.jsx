import React, { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import { useSwiperRef } from "hooks/useSwiperRef";
import { Container } from "components/Container/style";
import { Title } from "components/WhyUs/style";
import ProductCard from "components/ProductCard";
import { SwiperNavBtn } from "components/Banner/style";
import * as S from "./style";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper";

import { ArrowIcon } from "assets/images/svgIcons";
import MainContext from "context/CartContext";

const PopularProducts = () => {
  const [data, setData] = useState([]);
  const { cartItems } = useContext(MainContext);

  async function getData() {
    const res = await axios.get(`${process.env.REACT_APP_MAIN_URL}`);
    if (res.status === 200) {
      setData(res.data);
    }
  }

  const [nextEl, nextElRef] = useSwiperRef();
  const [prevEl, prevElRef] = useSwiperRef();

  useEffect(() => {
    getData();
  }, []);

  console.log(data);
  return (
    <S.PopularWrapper>
      <Container>
        <S.PopularHeader>
          <Title>Наши популярные продукты</Title>
          <S.PopularSwiperNavigation>
            <SwiperNavBtn ref={prevElRef}>
              <ArrowIcon />
            </SwiperNavBtn>
            <SwiperNavBtn ref={nextElRef}>
              <ArrowIcon style={{ transform: "rotate(-180deg)" }} />
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
            300: { slidesPerView: 1 },
            460: { slidesPerView: 3 },
            620: { slidesPerView: 3 },
            770: { slidesPerView: 4 },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {data?.map((el) => (
            <SwiperSlide key={el.id}>
              <ProductCard
                data={el}
                celect={cartItems.some((item) => item.id === el.id)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </S.PopularWrapper>
  );
};

export default PopularProducts;
