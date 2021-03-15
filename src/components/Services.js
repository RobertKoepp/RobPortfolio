import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, FaGoogle, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faDesktop, faFileCode } from '@fortawesome/free-solid-svg-icons';
import Instagram from 'react-share-icons/lib/Instagram';


const Services = () => {
    return (
        <div id="services" className="services">
            <h1 className="py-5">my services </h1>
                <div className="container">
                    <div className="row">
                        
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
<div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x"/></div>
                                <h3>Web Design</h3>
                                <p>I approach each project individually, building a vision into reality.</p>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6">
                            <div className="box">
<div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x"/></div>

                                <h3>Web Development</h3>
                                <p>I use the newest proven technologies when building your website.</p>
                            </div>
                        </div>
                        
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
<div className="circle"><FontAwesomeIcon className="icon" icon={faFacebookF} size="2x"/></div>

                                <h3>Facebook Ads</h3>
                                <p>Your potential clients will see your services or products through Facebook</p>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6">
                            <div className="box">
<div className="circle"><FontAwesomeIcon className="icon" icon={faInstagram} size="2x"/></div>

                                <h3>Instagram SMM</h3>
                                <p>Your service or products displayed by captivating posts on Instagram.</p>
                            </div>
                        </div>


                    </div>
                </div>
            
        </div>
    )
}

export default Services
