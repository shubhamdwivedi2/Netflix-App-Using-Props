import React from 'react';
import ReactDOM from 'react-dom';
import Cards from './Cards'
import './index.css'

ReactDOM.render(
  <>
    <Cards
      imgsrc="https://occ-0-2464-3646.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABeu5Oz4CGncoVEvCDhLelkyQc7H0KsaLyauqCprkOTTePn46kiFYRe1AUg5UkCp9ka7RTgyc8mKrSy7w9VFeQDokfmzy.jpg?r=077"
      category="A Netflix Original Series"
      title="DARK"
      link="https://www.netflix.com/in/title/80100172"
      button="Watch Dark"
      classNames= "card1"
    />

  </>
  , document.getElementById('root'));