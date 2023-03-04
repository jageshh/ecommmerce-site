import React,{useState} from "react";
import './Slider.css';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import {ApiSlides} from '../Apifolder/SliderApi';

function Slider(){


    //States
const [slides] = useState(ApiSlides);
const [activeSlide, setActiveSlide] = useState(0);

const prevSlide = () => {
    if (activeSlide === 0) {
      setActiveSlide(slides.length - 1);
    } else {
      setActiveSlide(activeSlide - 1);
    }
  };


const nextSlide = () => {
    if (activeSlide === slides.length - 1) {
      setActiveSlide(0);
    } else {
      setActiveSlide(activeSlide + 1);
    }
  };

    return(
        <>
        <div className="parent-div">
       {/* Left div */}
       <div className="left-div">

        <FaArrowCircleLeft  style={{ fontSize: "50px" }} onClick={prevSlide}/>
       </div>
       {/* Slide div */}

       {slides.map((slide, index) => {
        if (index === activeSlide) {
          return(
            <div className="wrapper" key={index}>

            <div className="slide-div">
                <div className="for-img">
                   <img src={slide.src}/>
                </div>
                <div className="des">
                    <h2 className="h2">{slide.content.h2}</h2>
                    <p className="para">{slide.content.p}</p>
                    <button className="button">Shop Now</button>
                </div>
            </div>
           </div>
          );
        }
      })}
       
       <div className="right-div">

        <FaArrowCircleRight  style={{ fontSize: "50px" }} onClick={nextSlide}/>
       </div>

        </div>
        </>
    )
}
export default Slider;