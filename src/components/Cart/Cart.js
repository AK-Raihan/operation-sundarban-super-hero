import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const{cart}=props || {}
    // console.log(cart)


    let total = 0;
    for(const artist of cart){
        total= total+artist.sellery;
    }

    return (
        <div className='cart-element'>
            <h2>Almost total actors number: {cart.length}</h2>
            <h4>Actor cost: {total}</h4>

            <ol>
                {
                    cart.map(actor=><li>{actor.name} </li>)
                }
            </ol>
        </div>
    );
};

export default Cart;