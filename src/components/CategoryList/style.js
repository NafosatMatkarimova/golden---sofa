import styled from "styled-components";
import { Colors, Flex } from "../../utils";
import { adaptiveValue } from "../../utils/variable";
import { Link } from "react-router-dom";

const CategoryListWrapper = styled.section`
  width: 100%;
  background-color: ${Colors.light};
  ${adaptiveValue("padding-bottom", 100)}
`;

const CategoryPage = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  ${adaptiveValue("gap", 40, 20)}
  ${adaptiveValue("margen-top", 64, 24)}
`;

const CategoryItem = styled.li`
 max-width: 600px;
    width: 100%;
  background-color: ${Colors.lightGrey};
  ${adaptiveValue("padding", 40, 20)}
`;

const listImage = styled.img`
  max-width: 250px;
  width: 100%;
  height: auto;
  display: block;
  margin-left: auto;
  object-fit: contain;
`;

const ListTitle = styled.h3`
  ${adaptiveValue("fond-size", 22, 14)}
  ${adaptiveValue("line-height", 34, 20
  )}
${adaptiveValue("margen-top", 25, 12)}
`;

const ListLink = styled(Link)`
max-width: 220px;
  width: 100%;
  ${adaptiveValue("height", 50, 35)}
  ${Flex.center}
  ${adaptiveValue("font-size", 16, 14)}
    ${adaptiveValue("line-height", 26, 16)}
  color: ${Colors.dark};
  margin-top: 16px;
  border: 1px solid ${Colors.grey};
  border-radius: 2px;
`;

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
  margin-top: 62px;
  cursor: pointer;

  &:hover {
    background-color: ${Colors.grey};
  }
`;

export {
  CategoryListWrapper,
  CategoryPage,
  CategoryItem,
  listImage,
  ListTitle,
  ListLink,
  ListLinkBtn,
};
