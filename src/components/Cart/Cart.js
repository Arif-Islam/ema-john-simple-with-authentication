import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h4>Order Summary</h4>
            <h3>Selected items: {cart.length}</h3>
        </div>
    );
};

export default Cart;