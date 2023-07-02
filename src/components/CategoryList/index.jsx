import React from "react";
import { Container } from "components/Container/style";
import { Title } from "components/WhyUs/style";
import { CatecgoryListData } from "./data";
import * as S from "./style";

const CategoryList = () => {
  return (
    <S.CategoryListWrapper>
      <Container>
        <Title>Категории</Title>
        <S.CategoryPage>
          {CatecgoryListData.map((el) => (
            <S.CategoryItem key={el.id}>
              <S.listImage src={el.image} alt={el.title} />
              <S.ListTitle>{el.title}</S.ListTitle>
              <S.ListLink to="/category">Перейти</S.ListLink>
            </S.CategoryItem>
          ))}
        </S.CategoryPage>
        <S.ListLinkBtn to="/catalog">Все категории</S.ListLinkBtn>
      </Container>
    </S.CategoryListWrapper>
  );
};

export default CategoryList;
