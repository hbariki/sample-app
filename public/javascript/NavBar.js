import React from 'react';

const NavBar = () => {
    return (

        <nav className="navbar navbar-expand-lg">
            <div id="logo-title-container">
                <img id="logo" src="/../assets/watermelon.png" />
                <span id="logo-title">Slice</span>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <div className="burger-line"></div>
                <div className="burger-line"></div>
                <div className="burger-line"></div>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav offset-7">
                    <a className="nav-item navbar-qa nav-link active" href="#">Q&A</a>
                    <a className="nav-item nav-link" href="#">Jobs</a>
                    <a className="nav-item nav-link" href="#">Contact</a>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;