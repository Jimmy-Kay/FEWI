import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out our services and products:</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/imgs1.png'
              text='Website and Application analytics '
              label='Analytics'
              path='/services'
            />
            <CardItem
              src='images/imgs2.png'
              text='Landing pages'
              label='Landing'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/imgs3.png'
              text='Mobile Applications'
              label='Mobile'
              path='/services'
            />
            <CardItem
              src='images/imgs4.png'
              text='Search Engine Optimization'
              label='SEO'
              path='/products'
            />
            <CardItem
              src='images/imgs5.png'
              text='Full stack design and development services'
              label='Full stack'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
