import React from 'react';
import FrontPage from '../images/front-page.jpg';
import Logo from '../images/isss_logo.png';
import '../styling/splash.css';
import { Button,Link } from '@material-ui/core';

const Splash = props => {
    return (
        <div>
            <div className="container">
                <img src={Logo} className="logo" alt="The logo"/>
                <img src={FrontPage} className="front-page" alt="This is us celebrating"/>
                <Button variant="contained" color="primary" classname="login-button">
                    <Link href="http://localhost:8000/accounts/google/login/?process=login" variant="body1">
                        Log In with CCID
                    </Link>
                </Button>
            </div>
        </div>
    )
}

export default Splash;