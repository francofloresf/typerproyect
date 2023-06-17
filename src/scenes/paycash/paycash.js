import React from 'react';
import Plan from './Plan';
import { Box } from "@mui/material"
import Header from "../../components/Header";


const PricingSection = () => {
  const plans = [
    {
      title: 'Free',
      price: 0,
      features: ['Característica 1', 'Característica 2', 'Característica 3'],
    },
    {
      title: 'Pago',
      price: 5,
      features: ['Característica 1', 'Característica 2', 'Característica 3'],
    },
  ];

  return (
    <div>
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="TYPER PREMIUM" subtitle="Disfruta los beneficios de Typer Premium" />

      </Box>

    </Box>
     
    <div className="pricing-section">
      <h1>Planes de Precio</h1>
      <div className="plans-container">
        {plans.map((plan, index) => (
          <Plan key={index} title={plan.title} price={plan.price} features={plan.features} />
        ))}
      </div>
    </div>
    </div>

  );
};

export default PricingSection;