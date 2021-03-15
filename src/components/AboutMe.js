import React from "react";
import author from "../me.jpg";

const AboutMe = () => {
    return (
        <div id="about" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                    <img className="profile-img" src={author} alt="author..."/>
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">About Me</h1>
                    <p>
                        Hello! My name is Robert. I develope and design websites. I am a Full-Stack Web Developer. 
                        The technologies I use is MERN(MongoDB, Express, ReactJS, and NodeJS). I create responsive websites and applications 
                        that are fully functional on all devices.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe