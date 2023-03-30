import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    // const {cart} = props;
    let total = 0;
    let totalShipping = 0
    for(let product of cart){
        total = total + product.price
        totalShipping = totalShipping +product.shipping
        //console.log(total)
    }

    const tax = total *7 / 100;
    const grandTotal = total + totalShipping + tax;
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
            
        </div>
    );
};

export default Cart;