
var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import React from 'react'
import PropertiesCard from './PropertiesCard';
import Link from 'next/link'
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

 
function Properties({data}) {

  return (
    <div className="container py-5 mb-5">
   <div className="d-flex justify-content-between mb-5">
   <h2>Featured properties</h2>
   <Link href="products" className='text-secondary fw-bold fs-5 pe-4  d-none d-md-block '>Viwe all</Link>
   </div>
   <div class="container">
<div class="row">
  {data.slice(0, 3).map((item)=>{
  return (<div className="col-12 col-md-4 mb-4" key={item.id}>   <PropertiesCard cardData={item} /></div>)
})}
  </div>
  <button className=" d-md-none d-block w-100 btn btn-light text-secondary border-secondary rounded-pill py-3 px-5">
    Viwe all 
      </button>
</div>
           {/* <OwlCarousel  {...options}  margin={8}>

{data.map((item)=>{
  return (<div className="me-4 " key={item.id}>   <PropertiesCard cardData={item} /></div>)
})}
      </OwlCarousel> */}

    </div>
  )
}

export default Properties