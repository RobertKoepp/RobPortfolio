import React from "react";
import cityWeather from "../images/weather.jpg";
import employeeReact from "../images/employee.jpg";
import progressiveBudget from "../images/budget.jpg";
import fitnessTracker from "../images/fitness.jpg";
//Font Awesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
//React Popupbox//
import{ PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css"; 


const Portfolio = () => {
    
    
//City Weather//
    const openPopupboxWeather = () => {
        const content = (
        <>
            <img className="portfolio-image-popupbox" src={cityWeather} alt="City to City Weather..."/>
            <p>This is a web application I created for users to get a five day 
            forecast for the city they search.
            </p>
            <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://robertkoepp.github.io/City2CityWeather/")}>https://robertkoepp.github.io/City2CityWeather/ </a>
        </>
        )
    
       
    PopupboxManager.open({content})
    }
    
    const popupboxConfigWeather = {
        titleBar: {
            enable: true,
            text: "City to City Weather Application"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }
    
    //Employee Directory//
    const openPopupboxEmployee = () => {
        const content = (
        <>
            <img className="portfolio-image-popupbox" src={employeeReact} alt="Emplyee Directory Application..."/>
            <p>This is a web application that I created using React, that allows a user to search employees by their information.
            </p>
            <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open(" https://robertkoepp.github.io/ReactEmployee/")}> https://robertkoepp.github.io/ReactEmployee/ </a>
        </>
        )
    
       
    PopupboxManager.open({content})
    }
    
    const popupboxConfigEmployee = {
        titleBar: {
            enable: true,
            text: "Employee Directory Application"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

     //Progressive Budget App//
     const openPopupboxBudget = () => {
        const content = (
        <>
            <img className="portfolio-image-popupbox" src={progressiveBudget} alt="Progressive Budget Application..."/>
            <p>This is a progressive web application that allows the user to track and amintain their budget.
            </p>
            <b>Heroku:</b> <a className="hyper-link" onClick={() => window.open(" https://fast-chamber-37305.herokuapp.com/")}> https://fast-chamber-37305.herokuapp.com/ </a>
        </>
        )
    
       
    PopupboxManager.open({content})
    }
    
    const popupboxConfigBudget = {
        titleBar: {
            enable: true,
            text: "Progressive Budget Application"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }
    
     //Fitness Tracker//
     const openPopupboxFitness = () => {
        const content = (
        <>
            <img className="portfolio-image-popupbox" src={fitnessTracker} alt="Fitness Workout Tracking Application..."/>
            <p>This is web application that allows users to log and track their workouts.
            </p>
            <b>Heroku:</b> <a className="hyper-link" onClick={() => window.open("https://floating-sierra-92156.herokuapp.com/")}> https://floating-sierra-92156.herokuapp.com/ </a>
        </>
        )
    
       
    PopupboxManager.open({content})
    }
    
    const popupboxConfigFitness = {
        titleBar: {
            enable: true,
            text: "Fitness Tracker Application"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }
    
    
    
    
    
    return (
        <div className="portfolio-wrapper">
            <div className = "container">
                <h1 className= "text-uppercase text-center py-5">portfolio</h1>
                
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxWeather} >
                        <img className="portfolio-image" src={cityWeather} alt="City to City Weather..."/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                

                
                    <div className="portfolio-image-box" onClick={openPopupboxEmployee}>
                        <img className="portfolio-image" src={employeeReact} alt="Employee Directory..."/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                

                
                    <div className="portfolio-image-box" onClick={openPopupboxBudget}>
                        <img className="portfolio-image" src={progressiveBudget} alt="Budget Application..."/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                

                
                    <div className="portfolio-image-box" onClick={openPopupboxFitness} >
                        <img className="portfolio-image" src={fitnessTracker} alt="Workout Tracker Application..."/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                </div>

            </div>
            <PopupboxContainer {...popupboxConfigWeather}/>
        </div>
    )
}

export default Portfolio
