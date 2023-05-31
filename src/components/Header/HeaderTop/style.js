import styled from "styled-components";
import { colors } from "../../../utils/variable";

const HeaderTopWrapper = styled.div`
width: 100%;
padding: 9px 16px;
background-color:${colors.grey}

`;

const TextContent = styled.div`
display:flax;
align-items:center;
justify-content:center;
gap:80px;
`
const DiscountText = styled.p`
font-weight: 500;
font-size: 16px;
line-height: 26px;
color:${colors.dark}
`;

const RecollText = styled.a`
font-weight: 500;
font-size: 16px;
line-height: 26px;
letter-spacing: 0.12em;
text-decoration-line: underline;
color:${colors.light}
`

export{HeaderTopWrapper, DiscountText, RecollText, TextContent}