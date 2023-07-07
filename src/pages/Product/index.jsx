import React, { useEffect, useState } from 'react'
import Header from 'components/Header';
import Footer from 'components/Footer';
import InfoColumns from 'components/InfoColums';
import { infoData, infoSecondData } from 'components/InfoColums/data';
import ContactForm from 'components/ContactForm';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container } from 'components/Container/style';
import BreadCrumbs from 'components/BreadCrumbs';
import ProductImageSwiper from 'components/ProductImageSwiper';
import Flex from 'utils/flex';
import styled from 'styled-components';

const Product = () => {

  const {id} = useParams();

  const [product, setProduct] = useState ([])

  const getData = async() => {
    const res = await axios.get(`${process.env.REACT_APP_MAIN_URL}/${id}`)
    setProduct(res.data)
  }

  useEffect(() => {
    getData()
  }, [])

  console.log(product,"product");

  return (
    <>
       <Header/>
       <Container>
        <BreadCrumbs disableText={product?.name} additionalPageName={"Каталог"} additionalHrefText={"/catalog"}/>
        <ProductImageSwiper image={product?.image}/>
       </Container>
       <InfoColumns data={infoData}/>
       <InfoColumns data={infoSecondData}/>
       <ContactForm/>
       <Footer/>
   </>
  )
  }

export default Product;


const ProductWrapper = styled.section`
    width: 100%;
    margin-block: 40px;
    ${Flex.justFlex}
    gap: 30px;
`;