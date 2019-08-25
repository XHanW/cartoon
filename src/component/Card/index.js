import React from 'react';

import './style.scss';

const Card = ({children}) =>{
    return (
      <div className="card">
        {children}
      </div>
    );
  }

export default Card;
