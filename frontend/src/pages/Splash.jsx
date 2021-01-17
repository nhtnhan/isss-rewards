import React from 'react';
import FrontPage from '../images/front-page.jpg';
import Logo from '../images/isss_logo.png';
import '../styling/splash.css';

const Splash = props => {
    return (
        <div>
            <div className="container">
                <img src={Logo} className="logo" alt="The logo"/>
                <img src={FrontPage} className="front-page" alt="This is us celebrating"/>
                <button className="login-button">Log In with CCID</button>
            </div>
        </div>
    )
}

export default Splash;