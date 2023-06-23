import React from 'react';
import { Container } from 'components/Container/style';
import { WhyUsData } from './data';
import * as S from "./style"


const WhyUs = () => {
  return (
    <S.WhyUsSectoin>
        <Container>
            <S.Title>Почему GoldenService? </S.Title>
            <S.Content>
             {WhyUsData.map((el) => (
               <S.ContentBox key={el.id}>
                  {el.Image}
                  <S.ContentBoxText>{el.text}</S.ContentBoxText>
               </S.ContentBox>
             ))}
            </S.Content>
        </Container>
    </S.WhyUsSectoin>
  )
}

export default WhyUs;