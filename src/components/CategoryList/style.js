import styled from "styled-components";
import { Colors, Flex } from "../../utils";
import { adaptiveValue } from "../../utils/variable";
import { Link } from "react-router-dom";

const CategoryListWrapper = styled.section`
width: 100px;
background-color: ${Colors.light};
${adaptiveValue("padding-bottom", 100, )}
`

const CategoryPage =styled.ul`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(2, 1fr);
gap: 40px;
${adaptiveValue("margen-top", 64, 24)}
`

const CategoryItem = styled.li`
background-color: ${Colors.lightGrey};
padding: 40px;
`

const listImage = styled.img`
width: 250px;
height: auto;
display: block;
margin-left: auto;
`

const ListTitle = styled.h3`
${adaptiveValue("fond-size", 22, 14)}
${adaptiveValue("line-height", 34, 24)}
${adaptiveValue("margen-top", 25, 12)}
`

const ListLink = styled(Link)`
width: 220px;
height: 50px;
${Flex.center}
font-size: 16px;
line-height: 26p;
color: ${Colors.dark};
margin-top: 16px;
border: 1px solid ${Colors.grey};
border-radius: 2px;
`

const ListLinkBtn = styled(Link)`
 padding: 12px 37px;
    background-color: ${Colors.primarycolor};
    font-weight: 500;
    font-size: 16px;
    ${adaptiveValue("line-height", 26, 19)}
    color: ${Colors.light};
    width: max-content;
    margin-inline: auto;
    display: block;
    border: none;
    cursor: pointer;

    &:hover{
        background-color: ${Colors.grey};
    }
`

export {CategoryListWrapper, CategoryPage, CategoryItem, listImage, ListTitle, ListLink, ListLinkBtn}