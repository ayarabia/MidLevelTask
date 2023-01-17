import React from "react";

import Vector1 from "../Image/Vector1.png";
import Vector2 from "../Image/Vector2.png";
import Vector3 from "../Image/Vector3.png";
import { BiMap } from "react-icons/bi";
import Image from "next/image";
import styles from "../styles/card.module.scss";
import { MdFavoriteBorder } from 'react-icons/md';
function PropertiesCard({cardData}) {
return (
    <div className={` ${styles.card} position-relative`}>
      <div className={`rounded-circle d-flex justify-content-center align-items-center  ${styles.favourit}` }>
         <MdFavoriteBorder className="text-light fs-5"/></div>
      <img
        src={cardData.image}
        alt="image"
       className={` ${styles.cardImage}  w-100`}
      
      />
     <div className={`bg-light p-3 pb-4 position-relative ${styles.cardFooter}`}>
     <p className="fw-bold  ms-3 text-left ps-0">{cardData.price} EGP/mo</p>
      <p className="text-warning ">
        <BiMap />  {cardData.address}
      </p>
      <div className="d-flex align-items-center justify-content-between text-warning">
        <div className="d-flex align-items-center justify-content-center">
          <Image src={Vector1} alt="glary1" className="w-100 me-2" />
          <span className="">3BR(s)</span>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <Image src={Vector2} alt="glary1" className="w-100 me-2 " />
          <span className="">{cardData.number_of_bedrooms}Bath(s)</span>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <Image src={Vector3} alt="glary1" className="w-100 me-2" />
          <span className="">155sqm</span>
        </div>
      </div>
     </div>
     

    </div>
  );
}
export default PropertiesCard;