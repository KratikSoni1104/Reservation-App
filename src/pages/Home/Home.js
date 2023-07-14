import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import "./home.css";
import Header from '../../components/header/Header';
import Feature from '../../components/feature/Feature';
import PropertyList from '../../components/propertyList/PropertyList';
import FeaturedProperty from '../../components/featuredProperty/FeaturedProperty';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';

function Home() {
  return (
    <div>
        <Navbar />
        <Header />
        <div className='homeContainer'>
          <Feature />
          <h1 className='homeTitle'>Browse By property type</h1>
          <PropertyList />
          <h1 className='homeTitle'>Homes Guests Love</h1>
          <FeaturedProperty />
          <MailList />
          <Footer />
        </div>
    </div>
  )
}

export default Home