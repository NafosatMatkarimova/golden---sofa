import React, { useEffect, useState } from 'react'
import Header from 'components/Header';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CategoryList from 'components/CategoryList';
import ProductCard from 'components/ProductCard';

const Cotegory = () => {
   const{type} = useParams();
   const [data, setData] = useState([]);
   const categoryText = type.toLocaleLowerCase();

   console.log(categoryText);

   async function getProduct(){
    const res = await axios.get(`${process.env.REACT_APP_MAIN_URL}?category=${categoryText}`);
    if (res.status === 200){
      setData(res.data);
    }
   }

   useEffect(()=>{
    getProduct();
   },[type]);


  return (
    <React.Fragment>
      <Header/>
   <CategoryList>
         {data?.map((el)=>{
        <ProductCard key={el.id} price={el.price} image={el.image} inCash={el.inCash} name={el.name} oldPrice={el.oldPrice} />
         })}
   </CategoryList>
    </React.Fragment>
  )
  }

export default Cotegory;