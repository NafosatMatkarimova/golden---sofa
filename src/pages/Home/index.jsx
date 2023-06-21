import React from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import Statistics from '../../components/Statistics';
import WhyUs from '../../components/WhyUs';
import CategoryList from '../../components/CategoryList';
import PopularProducts from '../../components/PopularProducts';
import ContactForm from '../../components/ContactForm';





const Home = () => {
  return(
    <>
    <Header/>
    <main>
     <Banner/>
      <Statistics/>
      <WhyUs/>
      <CategoryList/>
       <PopularProducts/>
       <ContactForm/> 
    </main>
    <Footer/>
    </>
  )
}
export default Home;