import React, { useEffect, useState } from 'react';
import './Movie.css'

const Movie = () => {
    const[actor, setActor]=useState([])

    useEffect(()=>{
        fetch('./movies.json')
        .then(res=>res.json())
        .then(data=>setActor(data))
    },[])
    return (
        <div>

            <div className="row">
                <div className="col-lg-9">
                    <h3>{actor.length}</h3>
                </div>
                <div className="col-lg-3"></div>
            </div>
            
        </div>
    );
};

export default Movie;