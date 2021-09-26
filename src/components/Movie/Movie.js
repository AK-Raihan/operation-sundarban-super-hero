import React, { useEffect, useState } from 'react';
import Actor from '../Actor/Actor';
import Cart from '../Cart/Cart';
import './Movie.css'

const Movie = () => {
    const[movies, setMovies]=useState([])
    const[cart, setCart]=useState([])

    useEffect(()=>{
        fetch('./movies.json')
        .then(res=>res.json())
        .then(data=>setMovies(data))
    },[])

    const handleCartActor=(actor)=>{
        const newCart=[...cart,actor]
        setCart(newCart)
    }
    return (
        <div>
            <div className="row">
                <div className="col-lg-9">
                    <div className="row">
                        {
                            movies.map(movie=><Actor
                                key={movie.code} 
                                movie={movie}
                                handleCartActor={handleCartActor}
                            ></Actor>)
                        }
                    </div>
                </div>
                <div className="col-lg-3">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
            
        </div>
    );
};

export default Movie;