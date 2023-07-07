import React, { useContext, useEffect, useState } from "react";
import Header from "components/Header";
import { useParams } from "react-router-dom";
import axios, { Axios } from "axios";
import ProductCard from "components/ProductCard";
import { Container } from "components/Container/style";
import styled from "styled-components";
import BreadCrumbs from "components/BreadCrumbs";
import Footer from "components/Footer";
import ContactForm from "components/ContactForm";
import PopularProducts from "components/PopularProducts";
import InfoColumns from "components/InfoColums";
import { infoData, infoSecondData } from "components/InfoColums/data";
import MainContext from "context/CartContext";

const Cotegory = () => {
  const { type } = useParams();
  const [data, setData] = useState([]);
  const categoryText = type.toLocaleLowerCase();
  const {cartItems, likeItems} = useContext(MainContext)

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
                            data={el}
                            select={cartItems.find((item) => item.id === el.id)}
                            like={likeItems.some((item) => item.id === el.id)}
                        />
                    ))}
                </CategoryListWrapper>
            </Container>
            <PopularProducts />
            <InfoColumns data={infoData} />
            <InfoColumns data={infoSecondData} reverse={true} />
            <ContactForm />
            <Footer />
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