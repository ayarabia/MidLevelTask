import React from "react";
var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Image from "next/image";
import homePage from "../Image/home.png";
import { BiMap } from 'react-icons/bi';
import NavBar from "./NavBar";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
function Slider({images}) {
  console.log(images);
  const options = {
    margin: 30,
    responsiveClass: true,
    // nav: true,
    autoplay: false,

    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 1,
      },
      700: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };
  return (
    <div>
      <OwlCarousel items={3} className="owl-theme" {...options} loop margin={8}>
     
      {images.map((item)=>{
        return (   <div className="item">
        <img src={item.image} alt="Picture of the homePage" style={{height:"500px" ,objectFit:"cover"}}  />
        <div className="container">
      <div className=" text-primary position-absolute top-50">
          <p className="fs-2 ">Let's find your</p>
          <h1 className="fw-bold fs-1">Dream Home</h1>
        </div>
        <div className="text-primary location">
          <p>
            <BiMap/> 5th Settlement, New Cairo <span className="fw-bold ps-5 ms-1">10,000 EGP/mo</span>
          </p>
        </div>
      </div>
      </div>)
      })}
      </OwlCarousel>
      <NavBar/>
    </div>
  );
}
export default Slider;
