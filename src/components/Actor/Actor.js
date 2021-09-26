import React from 'react';
import './Actor.css'

const Actor = (props) => {
    const{name, occupation, sellery, birth, img, NotableWork}=props.movie
    return (
            <div className="col-lg-4 g-5 actor-item">
                <div className="row">
                <div className="card h-100 actor-card">
                    <img src={img} className="card-img-top" alt="..."/>
                    <div className="card-body d-flex justify-content-evenly actor-body">
                        <div className="card-content">
                        <h3 className="card-title">Name: {name}</h3>
                        <h6 className="card-title">Occupation: {occupation}</h6>
                        <h5 className="card-text">Wages: {sellery}</h5>
                        <h6 className="card-text">Notable Work: {NotableWork}</h6>
                        <p className="card-text">Date of birth: {birth}</p>
                        </div>
                        <div className="social-icon">
                            <li><i class="fab fa-facebook"></i></li>
                            <li><i class="fab fa-instagram"></i></li>
                            <li><i class="fab fa-linkedin"></i></li>
                            <li><i class="fab fa-youtube"></i></li>
                        </div>

                    </div>
                    <div className="card-footer">
                    <button onClick={()=> props.handleCartActor(props.movie)} className='btn btn-lg btn-outline-info add-btn'><i class="fas fa-cart-plus add-icon"></i> Invite</button>
                </div>
                </div>
                </div>
            </div>
         
    );
};

export default Actor;