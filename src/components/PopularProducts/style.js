import styled from "styled-components";
import { Flex } from "utils";
import { SwiperNavigation } from "components/Banner/style";
import { adaptiveValue } from "utils/variable";



const PopularWrapper = styled.section`
  width: 100%;
  ${adaptiveValue("padding-bottom", 100, 40)}
`;

const PopularHeader = styled.div`
  ${Flex.spaceBetween}
  ${adaptiveValue("margin-bottom", 64, 24)}
`;

const PopularSwiperNavigation = styled(SwiperNavigation)`
  margin-inline: inherit;

  @media (max-width: 620px){
    display: none;
  }
`;



export {
  PopularWrapper,
  PopularHeader,
  PopularSwiperNavigation,

};
