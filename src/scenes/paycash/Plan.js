import React from 'react';

const Plan = ({ title, price, features }) => {
  return (
    <div className="plan">
      <h2>{title}</h2>
      <h3>${price} / mes</h3>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button>Seleccionar</button>
    </div>
  );
};

export default Plan;