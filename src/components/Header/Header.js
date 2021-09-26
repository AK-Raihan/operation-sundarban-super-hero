import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div classNameName='header-section'>

                <nav className="navbar navbar-expand-lg main-header">
                <div className="container-fluid ">
                    <a className="navbar-brand text-success fw-bold fs-3" href="#">Operation Sundarban</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 my-menu">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Catagories</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2 px-5 py-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    </div>
                </div>
                </nav>

                <div className="header-title py-2">

                    <div className="container text-center">
                        <h1>Operation Sundarban</h1>
                        <h5>Operation Sundarbans (Bengali: অপারেশন সুন্দরবন) or Operation Sundarban is an upcoming Bangladeshi wildlife action thriller movie. The film is co-written and directed by Dipankar Sengupta Dipon. The film is produced by RAB Welfare Cooperative Society Ltd.[2] Nazim-ud-Doula and Dipon have written the screenplay. The plot is loosely based on real operations of RAB during surrender of robbers of Sundarbans as well as the struggle of Sundarbans' natives.</h5>
                        <h3>This Movie Budget is more than 40 million BDT</h3>
                    </div>

                </div>
        </div>
    );
};

export default Header;