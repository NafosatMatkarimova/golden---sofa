import React, { useEffect, useState } from "react";
import Header from "components/Header";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "components/ProductCard";
import { Container } from "components/Container/style";
import styled from "styled-components";
import BreadCrumbs from "components/BreadCrumbs";
import Footer from "components/Footer";
import ContactForm from "components/ContactForm";
import PopularProducts from "components/PopularProducts";

const Cotegory = () => {
  const { type } = useParams();
  const [data, setData] = useState([]);
  const categoryText = type.toLocaleLowerCase();

  console.log(categoryText);

  async function getProduct() {
    const res = await axios.get(
      `${process.env.REACT_APP_MAIN_URL}?category=${type}`
    );
    if (res.status === 200) {
      setData(res.data);
    }
  }

  useEffect(() => {
    getProduct();
  }, [type]);

  return (
    <>
      <Header />
      <Container>
      <BreadCrumbs disableText={"Каталог"} />
        <CategoryListWrapper>
          {data?.map((el) => (
            <ProductCard
              key={el.id}
              price={el.price}
              image={el.image}
              inCash={el.inCash}
              name={el.name}
              oldPrice={el.oldPrice}
            />
          ))}
        </CategoryListWrapper>
      </Container>
      <PopularProducts/>
      <ContactForm/>
        <Footer/>
    </>
  );
};

export default Cotegory;


const CategoryListWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 30px;
    row-gap: 50px;
    flex-wrap: wrap;
    margin-block: 50px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 576px) {
        grid-template-columns: repeat(1, 1fr);
        place-items: center;
    }
`;