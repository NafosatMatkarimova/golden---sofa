import styled from "styled-components";
import { Colors, Flex } from "../../utils";
import { adaptiveValue } from "../../utils/variable";

const StatisticsWrapper = styled.section`
width: 100%;
padding: 40px;
background-color: ${Colors.secondarycolor};
`

const StatisticsContainer =styled.div`
max-width:1300px;
width:100%;
padding:0 20px;
padding-block: 0;
${adaptiveValue("padding-inline", 20, 32)}
`
const StatisticsContent = styled.div`
max-width: 816px;
width: 100%;
margin: 0 auto;
${Flex.spaceBetween}
${adaptiveValue("gap", 82, 20)}

@media (max-width: 576px){
    flex-wrap: wrap;
    justify-content: space-around;
}
`

const StatisticsContentBox = styled.div`
${Flex.alignCenter}
flex-direction: column;
${adaptiveValue("gap", 16, 8)};
`

const Count = styled.h1`
${adaptiveValue("fond-size",32, 24)}
${adaptiveValue("line-height", 38, 34)}
color:${Colors.dark};

`

const CountText = styled.p`
${adaptiveValue("fond-size",16, 14)}
 ${adaptiveValue("line-height",26, 24)}
 color: ${Colors.dark};
`

export {StatisticsWrapper, StatisticsContent, StatisticsContentBox, Count, CountText, StatisticsContainer}