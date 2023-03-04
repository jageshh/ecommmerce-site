import React from "react";
import { TiSocialFacebook,  
    TiSocialLinkedin,
    TiSocialTwitter,
    TiSocialInstagram,
    TiSocialYoutube
} from "react-icons/ti";

import { Link } from "react-router-dom";
import './Footer.css';

function Footer(){
    return(
        <>
        <div className="men-div">
            <div className="get">
                <h6>Get to Know Us</h6>
                <ol>
                    <li><Link to="/">About Us</Link></li>
                </ol>
                <ol>
                    <li><Link to="/">Career</Link></li>
                </ol>
                <ol>
                    <li><Link to="/">Press Release</Link></li>
                </ol>
                <ol>
                    <li><Link to="/">Amazon Science</Link></li>
                </ol>
            </div>

            <div className="connect">
                <h6>Connect with Us</h6>
                <ol>
                    <li> <Link to='/'><TiSocialFacebook/>Facebook</Link></li>
                </ol>

                <ol>
                    <li> <Link to='/'><TiSocialTwitter/>Twitter</Link></li>
                </ol>
                <ol>
                    <li> <Link to='/'><TiSocialLinkedin/>Linkedin</Link></li>
                </ol>
                <ol>
                    <li> <Link to='/'><TiSocialInstagram/>Instagram</Link></li>
                </ol>

                <ol>
                    <li> <Link to='/'><TiSocialYoutube/>Youtube</Link></li>
                </ol>
                </div>

            <div className="money">
                <h6>Make Money with Us</h6>
                
                <ol>
                    <li> <Link to='/'>Sell on Amazon</Link></li>
                </ol>

                <ol>
                    <li> <Link to='/'>Sell under Amazon Accelerator</Link></li>
                </ol>
                <ol>
                    <li> <Link to='/'>Become an Affiliate</Link></li>
                </ol>
                <ol>
                    <li> <Link to='/'>Amazon Global Selling</Link></li>
                </ol>
                <ol>
                    <li> <Link to='/'>Advertise Your Products</Link></li>
                </ol>

                </div>

            <div className="help">
                <h6>Let Us Help You</h6>
                <br/>
                <br/>
                <ol>
                    <li> <Link to='/'>COVID-19 and Amazon</Link></li>
                </ol>
                <ol>
                    <li> <Link to='/'>Your Account</Link></li>
                </ol>
                <ol>
                    <li> <Link to='/'>Returns Centre</Link></li>
                </ol>
                <ol>
                    <li> <Link to='/'>100% Purchase Protection</Link></li>
                </ol>
                <ol>
                    <li> <Link to='/'>Help</Link></li>
                </ol>

                </div>


        </div>
        </>
    )
}
export default Footer;