import styled from "styled-components";
import { Colors, Flex } from "../../utils";
import { adaptiveValue } from "../../utils/variable";

const WhyUsSectoin = styled.section`
width: 100%;
background-color: ${Colors.light};
padding-block: 100px;
`

const Title = styled.h2`
font-weight: 600;
${adaptiveValue('fond-size', 44, 22)}
${adaptiveValue("line-height", 62, 32)}
color: ${Colors.dark};
text-align: center;
`

const Content = styled.div`
${adaptiveValue('margin-top', 52, 24)}
${Flex.spaceBetween}
gap: 30px;

@media (max-width: 768px) {
        flex-wrap: wrap;
        justify-content: center;
    }
`

const ContentBox =styled.div`
max-width: 393px;
${Flex.spaceBetween}
${adaptiveValue("padding", 24, 28)}
${adaptiveValue("gap", 32, 16)}
border-right: 1px solid ${Colors.primarycolor};
border-left: 1px solid ${Colors.primarycolor};
flex-direction: column;

@media (max-width: 768px){
    border-right: none;
    border-left: none;
    border-top: 1px solid ${Colors.primarycolor} ;
    border-bottom:1px solid ${Colors.primarycolor};

 }
`

const ContentBoxText = styled.p`
max-width: 345px;
width: 100%;
${adaptiveValue("fond-size",20, 16)}
${adaptiveValue("line-height", 32, 26)}
color: ${Colors.grey};
text-align: center;
`

export {WhyUsSectoin, Title, Content, ContentBox, ContentBoxText}