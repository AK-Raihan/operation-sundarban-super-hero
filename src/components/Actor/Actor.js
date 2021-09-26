import React from 'react';
import './Actor.css'

const Actor = (props) => {
    const{name, occupation, sellery, birth,img}=props.movie
    return (
            <div className="col-lg-4 g-5">
                <div className="row">
                <div className="card h-100 actor-card">
                    <img src={img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h3 className="card-title">Name: {name}</h3>
                        <h6 className="card-title">Occupation: {occupation}</h6>
                        <p className="card-text">Sellery: {sellery}</p>
                        <p className="card-text">Date of birth: {birth}</p>
                    </div>
                    <div className="card-footer">
                    <button onClick={()=> props.handleCartActor(props.movie)} className='btn btn-lg btn-outline-info'>Add to cart</button>
                </div>
                </div>
                </div>
            </div>
         
    );
};

export default Actor;