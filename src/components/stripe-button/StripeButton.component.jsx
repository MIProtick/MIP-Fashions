import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import './StripeButton.style.scss';

const StripeButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IrNxlSCFR1kuZRDkhfdjrHgV6REWjHolTdAmZMmmNP4qSlbo8lG1OfZnEkqbIBObTZjYYjFPxhltVywKOZKdDi700MdVUHGvF';
    
    const onToken = token =>{
        console.log(token);
        alert('Payment Successful');
    }
    
    return (
        <StripeCheckout
            label = 'Pay Now'
            name = 'MIP-Fashions'
            shippingAddress 
            billingAddress
            image = 'https://svgshare.com/i/CUz.svg'
            description= {`Your Total Is ${price} Taka`}
            amount = {priceForStripe}
            panelLabel = 'Pay Now'
            token = {onToken}
            stripeKey = {publishableKey}
        />
    )
}

export default StripeButton;
