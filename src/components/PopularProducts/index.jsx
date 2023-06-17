// import React, { useEffect, useRef, useState } from 'react'
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Container } from '../Container/style';
// import { Title } from '../WhyUs/stylr';
// import* as S from "./style"

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Navigation} from 'swiper';

// import { ArrowIcon } from '../../assets/images/svgIcons';

// const PopularProducts = () => {

//     const useSwiperRef = () => {
//         const [wrapper, setWrapper] = useState(null);
//         const ref = useRef(null);

//         useEffect(() => {
//             if (ref.current) {
//                 setWrapper(ref.current);
//             }
//         }, []);

//         return [wrapper, ref];
//     };

    
//     const [nextEl, nextElRef] = useSwiperRef();
//     const [prevEl, prevElRef] = useSwiperRef();


//   return (
//     <S.PopularWrapper>
//         <Container>
//             <S.PopularHeader>
//                 <Title>Наши популярные продукты</Title>
//                 <SeiperNavigation>
//                     <SwiperNavBtn ref={prevElRef}>
//                       <ArrowIcon/>
//                       </SwiperNavBtn>
//                       <div className='pagination-bullets'></div>
//                       <SwiperNavBtn ref={nextElRef}>
//                       <ArrowIcon styl={{transform: "rotate(180 deg)"}}/>
//                     </SwiperNavBtn>
//                 </SeiperNavigation>
//             </S.PopularHeader>

//             <Swiper
//         slidesPerView={4}
//         spaceBetween={30}
//         navigation={{
//             prevEl,
//             nextEl,
//         }}
        
//         className="mySwiper"
//       >
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//       </Swiper>
//         </Container>
//     </S.PopularWrapper>
//   )
// }

// export default PopularProducts;