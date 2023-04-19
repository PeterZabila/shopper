import React from 'react';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import ProductsList from './ProductsList';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';


const Home = () => {
  return (
    <>
      <Announcement/>
      <Navbar/>
      <Slider/>
      <Categories/>
      <ProductsList/>
      <NewsLetter/>
      <Footer/>
    </>
  )
}

export default Home
