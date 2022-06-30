import React, { useState } from 'react';
import './ProductShowcase.css';
import inventory from '../../data/inventory';
import { useParams } from 'react-router-dom';

export default function ProductShowCase() {
  const { id } = useParams();
  const [nbMugs, setNbMugs] = useState(1);
  const productClicked = inventory.findIndex(
    (obj) => obj.title.replace(/\s+/g, '').trim() === id
  );

  const updateMugs = (e) => {
    setNbMugs(Number(e.target.value));
  };
  return (
    <div className='showcase'>
      <div className='container-img-showcase'>
        <img
          src={
            process.env.PUBLIC_URL +
            `/images/${inventory[productClicked].img}.png`
          }
          alt='product'
          className='img-showcase'
        />
      </div>
      <div className='product-infos'>
        <h2>{inventory[productClicked].title}</h2>
        <h2>{inventory[productClicked].price} €</h2>
        <form>
          <label htmlFor='quantity'>Quantité</label>
          <input
            type='number'
            id='quantity'
            value={nbMugs}
            onChange={updateMugs}
          />
          <button>Ajouter au panier</button>
          <span className='adding-info'></span>
        </form>
      </div>
    </div>
  );
}
