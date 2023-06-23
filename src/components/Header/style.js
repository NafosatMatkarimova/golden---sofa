import styled from "styled-components";
import { Link } from "react-router-dom";
import { Colors, Flex } from "utils";
import { adaptiveValue } from "utils/variable";

const HeaderWrapper = styled.header`
  width: 100%;
`;

const BurgerMenuContent = styled.div`
width: 24px;
height: 24px;
 flex-direction: column;
 gap: 6px;
 padding-block: 3px;
 display: none;
 @media (max-width: 768px) {
    ${Flex.spaceBetween}
  }
`
const BurgerMenuRows =styled.span`
 width: 100%;
 height: 3px;
 border-radius: 2px;
 background: ${Colors.dark};
`

const LogoLink = styled(Link)`
 @media (max-width: 768px) {
   display :none ;
  }
`

const HeaderNavbar = styled.div`
  width: 100%;
  padding-block: 20px;
  background-color: ${Colors.light};
  box-shadow: inset 0px -1px 0px ${Colors.borderColor};
  position: relative;
`;

const HeaderNavContent = styled.div`
  ${Flex.spaceBetween}

`;

const HeaderNavLinkList = styled.nav`
  ${Flex.spaceBetween}
  ${adaptiveValue("gap", 32, 15)};
  @media (max-width: 768px) {
   display :none ;
  }
`;

const NavLink = styled(Link)`
  font-weight: 300;
  ${adaptiveValue("Font-size",20, 14)}
  line-height: 24px;
  color: ${Colors.dark};
`;

const UserAction = styled.div`
  ${Flex.alignCenter}
  gap:30px;
 
`;

const PhoneContent = styled.a`
  ${Flex.alignCenter}
  gap: 8px;
  font-weight: 400;
  ${adaptiveValue("Font-size", 18, 14)}
  line-height: 21px;
  color: ${Colors.grey};
  
  @media (max-width: 768px) {
   display :none ;
  }
`;

const ActionBox = styled.div`
  ${Flex.alignCenter}
  gap:28px;
`;

export {
  HeaderWrapper,
  HeaderNavbar,
  HeaderNavContent,
  HeaderNavLinkList,
  NavLink,
  UserAction,
  PhoneContent,
  ActionBox,
  LogoLink,
  BurgerMenuContent,
  BurgerMenuRows,
};
