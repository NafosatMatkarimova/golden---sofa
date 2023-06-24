import React from "react";
import Header from "components/Header";
import { Link } from "react-router-dom";
import CatalogListItems from "components/CatalogListItems";
import { catalogListData } from "./data";
import { Container } from "components/Container/style";
import { Title } from "components/WhyUs/style";
import { ListLinkBtn } from "components/CategoryList/style";
import Footer from "components/Footer";

import * as S from "./style";

const Catalog = () => {
  return (
    <S.CatalogWrapper>
      <Header />
      <Container>
        <S.CatalogBreadCrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" to="/">
            Главная
          </Link>

          <S.CurrentPageLink>Каталог</S.CurrentPageLink>
        </S.CatalogBreadCrumbs>
        <S.CatalogContent>
          <Title>Категории</Title>
          <S.CatalogList>
          {catalogListData.map((el) => (
                            <CatalogListItems
                                key={el.id}
                                image={el.image}
                                text={el.text}
                                type={el.type}
                            />
                        ))}
          </S.CatalogList>
          <ListLinkBtn to='/catalog'>Смотреть все</ListLinkBtn>
        </S.CatalogContent>
      </Container>
      <Footer/>
    </S.CatalogWrapper>
  );
};

export default Catalog;
