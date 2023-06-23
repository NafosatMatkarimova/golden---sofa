import styled from "styled-components";
import { Breadcrumbs } from "@mui/material";
import Colors, { adaptiveValue } from "utils/variable";

const CatalogWrapper = styled.section`
  width: 100%;
  background-color: ${Colors.light};
`;

const CatalogBreadCrumbs = styled(Breadcrumbs)`
  margin-top: 20px !important;
`;

const CatalogContent = styled.div`
  width: 100%;
  ${adaptiveValue("margin-top", 40, 12)}
  ${adaptiveValue("margin-bottom", 100, 40)}
`;

const CatalogList = styled.ul`
  display: grid;
  grid-template-columns: 4 1fr;
  grid-template-rows: 2, 1fr;
  ${adaptiveValue("column-gap", 30, 20)}
  ${adaptiveValue("row-gap", 50, 24)}
  ${adaptiveValue("margin-top", 64, 24)}
  ${adaptiveValue("margin-bottom", 50, 32)}
`;

export { CatalogWrapper, CatalogBreadCrumbs, CatalogContent, CatalogList };
