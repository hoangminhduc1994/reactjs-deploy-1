

import React from 'react'
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import ProductCard from './components/product-card/ProductCard';
import Footer from './components/footer/Footer';


const products = [
  {
    name: "Fancy Product",
    price: "40.00 - 80.00",
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    isOnSale: false,
  },
  {
    name: "Special Item",
    price: "18.00",
    oldPrice: "20.00",
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    isOnSale: true,
    rating: 5,
  },
  {
    name: "Sale Item",
    price: "25.00",
    oldPrice: "50.00",
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    isOnSale: true,
  },
  {
    name: "Popular Item",
    price: "40.00",
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    rating: 5,
  },
  // Add more products as needed
];



const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default App;
