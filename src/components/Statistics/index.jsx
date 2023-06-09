import React from 'react';
import { statisticsData } from './data';
import * as S from './style';


const Statistics =() => {
    return(
        <S.StatisticsWrapper>
            <S.StatisticsContainer>
            <S.StatisticsContent>
            {statisticsData.map((el) => (
                <S.StatisticsContentBox key={el.id}>
                    <S.Count> {el.count}</S.Count>
                    <S.CountText>{el.text}</S.CountText>

                </S.StatisticsContentBox>
            ))}
          </S.StatisticsContent>
            </S.StatisticsContainer>
        </S.StatisticsWrapper>
    )
}
export default Statistics;