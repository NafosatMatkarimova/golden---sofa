import React from "react";
import Header from "components/Header";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { Container } from "components/Container/style";
import { Title } from "components/WhyUs/style";
import CatalogListItems from "components/CatalogListItems";
import * as S from "./style";
import { catalogListData } from "./data";

const Catalog = () => {
  return (
    <S.CatalogWrapper>
      <Header />
      <Container>
        <S.CatalogBreadCrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" to="/">
            Главная
          </Link>

          <Typography color="text.primary">Catalog</Typography>
        </S.CatalogBreadCrumbs>
        <S.CatalogContent>
          <Title>Категории</Title>
          <S.CatalogList>
          {catalogListData.map((el) => (
          <CatalogListItems key={el.id} {el.text}/>
          ))}
          </S.CatalogList>
        </S.CatalogContent>
      </Container>
    </S.CatalogWrapper>
  );
};

export default Catalog;
