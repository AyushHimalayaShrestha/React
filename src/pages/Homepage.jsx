import React from 'react'; 
import Carousel from '../components/Carousel';
import { Helmet } from 'react-helmet';
import Card from '../components/Card';

const Homepage = () => {
  return (
    <>
      <Helmet>
        <title>Ecommerce-Homepage</title>
      </Helmet>
      <Carousel />
      <Card />
    </>
  );
};

export default Homepage;
