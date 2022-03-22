import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    let total = 0, shipping = 0, quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        total += product.price * product.quantity;
        shipping += product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h3 style={{textAlign:'center'}}>Order Summary</h3>
            <p>Selected items: {quantity}</p>
            <p>Total price: ${total}</p>
            <p>Total Shipping charge: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>  
        </div>
    );
};

export default Cart;