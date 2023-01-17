import React from "react";
import Image from "next/image";
import glary1 from "../Image/glary1.jpg";
import glary4 from "../Image/glary4.png";


function ChoiceCopnent() {
  return (
    <div className="container text-primary py-5">
      <h2 className="fs-1 text-primary">A world of choice</h2>
      <p>Lorem ipsum dolor sit amet, consetetur</p>
      <div className="row mt-5">
        <div className="col-sm-12 col-md-3 d-flex flex-row flex-md-column" >
          <div className="mb-4 me-3">
            <Image src={glary1} alt="glary1" className="w-100 d-block" height={200} />
            <span>50 districts</span>
            <h5>EL sheikh Zayed</h5>
          </div>
          <div className="mb-4">
            <Image src={glary1} alt="glary1" className="w-100 d-block"  height={200}/>
            <span>50 districts</span>
            <h5>EL sheikh Zayed</h5>
          </div>
        </div>
        <div className=" col-sm-12 col-md-6">
          <div className="mx-md-5 mx-1">
            <Image src={glary4} alt="glary1" className="w-100 d-block "  style={{borderRadius:"25px" ,borderTopRightRadius:"120px",objectFit:"cover"}} />
            <span>50 districts</span>
            <h5>EL sheikh Zayed</h5>
          </div>
        </div>
        <div className="col-sm-12 col-md-3 d-flex flex-row flex-md-column">
          <div  className="mb-4  me-3">
            <Image src={glary1} alt="glary1" className="w-100 d-block"  height={200} />
            <span>50 districts</span>
            <h5>EL sheikh Zayed</h5>
          </div>
          <div  className="mb-4">
            <Image src={glary1} alt="glary1" className="w-100 d-block"  height={200} />
            <span>50 districts</span>
            <h5>EL sheikh Zayed</h5>
          </div>
        </div>
      </div>
      <div className="text-center mt-5">
      <button className="btn btn-secondary text-light rounded-pill py-3 px-5">
    Viwe all 30 + cities
      </button>
      </div>
    </div>
  );
}

export default ChoiceCopnent;