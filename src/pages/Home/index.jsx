import React from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import Statistics from '../../components/Statistics';





const Home = () => {
  return(
    <>
    <Header/>
    <main>
      <Banner/>
      <Statistics/>
    </main>
    <Footer/>
    </>
  )
}
export default Home;