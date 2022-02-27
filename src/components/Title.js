import React from 'react';
import './Title.css'


function Title({ title, subtitle }) {
  return (
    <div className='title-section'>
      <h1 className="title">{title}</h1>
      <br />
      <h2 className="subtitle">{subtitle}</h2>
    </div>
  )
}

export default Title;
