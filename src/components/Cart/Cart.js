import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const{cart}=props || {}
    // console.log(cart)


    let total = 0;
    for(const artist of cart){
        total= total+artist.sellery;
        // const image = artist.img;
    }

    return (
        <div className='cart-element'>

                <div className="card " style={{"width": "20rem"}}>
                {/* <img src="" className="card-img-top" alt="..."/> */}
                <div className="card-body">
                    <h2 className="card-title text-info">Total invited: {cart.length}</h2>
                    <h4 className="card-text my-3 text-primary">Actor cost: {total} BDT</h4>
                    <a href="/" className="btn btn-primary">Go somewhere</a>
                </div>
                </div>

            <ul className='fs-4 text-white fw-bolder'>
                {
                    cart.map(actor=><li key={actor.code}>{actor.name} </li>)
                }
            </ul>
        </div>
    );
};

export default Cart;