import React from 'react';
import imgShop from './shopimg.jpg';
import './Home.css';
export default function Home() {
  return (
    <div className='global-container'>
      <h1 className='home-title'>
        Bienvenue au <span> Shop </span>
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod facere
        officia amet, sit voluptatum ut eum maxime beatae quos ducimus. At quae
        magni fuga quaerat dolorem nostrum doloribus commodi eveniet.
      </p>
      <img src={imgShop} alt='accueil shop' />
    </div>
  );
}
