import React from 'react';

import '../Style/Footers.css';
import facebook from '../Images/facebook.jpg'

import instagram from '../Images/instagram.jpg'
import twitter from '../Images/twitter.jpg'


function Footer() {
    return (
        <div className="container">
           
            {/* <Navbar /> */}
            <div className="foot">
                <div className="aem-Grid aem-Grid--12">
                    <div className="aem-GridColumn aem-GridColumn--default--3">
                        <div className='footer_account'>
                            <h6>Account</h6>
                            <ul className="footer_account_one">
                                <li><a href="">Sign In</a></li>
                                <li><a href="">Register</a> </li>
                                <li><a href="">Order Status</a> </li>
                            </ul>
                        </div>
                    </div>

                    <div className="aem-GridColumn aem-GridColumn--default--3">
                        <div className='footer_about'>
                            <h6>About Us</h6>
                            <ul className="footer_aboutus">
                                <li><a href="">Our Story</a></li>
                                <li><a href="">Careers</a> </li>
                            </ul>
                        </div>
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--3">
                        <div className='footer_help'>
                            <h6>Help</h6>
                            <ul className="footer_help_one">
                                <li><a href="">Contact Us</a></li>
                                <li><a href="">Order Status</a> </li>
                                <li><a href="">Returns</a> </li>
                            </ul>
                        </div>
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--3">
                        <div className='footer_follow'>
                            <h6>Follow Us!</h6>
                            <p>Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        </div>
                        <div className="social-links">
                        <img src={instagram}  alt="instagram" />
                        <img src={facebook} alt="facebook" className='facebookc'/>  
                        <img src={twitter}  alt="twitter" className='facebookc' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="footvenia">
                <hr/>
            <div className="aem-Grid aem-Grid--12">
                <div className="aem-GridColumn aem-GridColumn--default--3">
                    <div className=" ">
                        <h5>venia</h5>
                    </div>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--6">
                    <div className='footerp'>
                        <p>© Company Name Address Ave, City Name, State ZIP</p>
                    </div>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--3">
                    <div className='footer_terms'>
                        <a href="" className="">
                            <p>Terms of Use</p>
                        </a>
                        <a href="" className="">
                            <p>Privacy Policy</p>
                        </a>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Footer