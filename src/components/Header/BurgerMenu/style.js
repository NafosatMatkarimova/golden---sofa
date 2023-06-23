import styled from "styled-components";
import { Flex } from "utils";
import { NavLink } from "../style";
import Colors, { adaptiveValue } from "utils/variable";


const BurgerMenuWrapper =styled.div`
position: fixed;
top: 108px;
left: 0;
right: 0;
bottom: 0;
width: 100%;
height: 90vh;
transform: ${({open}) => 
open === true ? "tranlateX(0)" : "translateX(-100%)"} ;
transition:(0.4s);
padding: 24px 16px 40px;
${Flex.spaceBetween}
flex-direction: column;
`

const BurgerMenuNav = styled.div`
width: 100%;
${Flex.justFlex}
align-items: flex-start;
flex-direction: column;
`

const BurgerMenuNavLink = styled(NavLink)`
 ${adaptiveValue("font-size", 16 , 14)}
 width: 100%;
 padding-block: 16px;
 border-bottom: 1px solid${Colors.borderColor};
`

const BurgerMenuFooter =styled.div`
width: 100%;
${Flex.spaceBetween}
`

const FooterPhoneContent = styled.a`
${Flex.alignCenter}
  gap: 8px;
  font-weight: 400;
  ${adaptiveValue("Font-size", 18, 14)}
  line-height: 21px;
  color: ${Colors.grey};
`

const BurgerMenuRecall = styled.a`
font-weight: 500;
font-size: 16px;
line-height: 26px;
letter-spacing: 0.12em;
text-decoration-line: underline;
color:${Colors.primarycolor};
`

export  {BurgerMenuWrapper, BurgerMenuNav, BurgerMenuNavLink, FooterPhoneContent, BurgerMenuRecall, BurgerMenuFooter};