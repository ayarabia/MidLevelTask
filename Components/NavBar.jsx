import React from 'react'
import {CiSearch} from "react-icons/ci"
import styles from "../styles/navBar.module.scss";
function NavBar() {

  return (
    <div className={`container  bg-light p-3 position-relative ${styles.navBar}`} >
 <div className={`p-3 d-flex justify-content-between align-items-center   flex-column flex-md-row ${styles.inter}`}>
 <div  className={`d-flex justify-content-between align-items-center mb-3 py-2 ${styles.search}`}>
    <span className='fs-4 mx-2'><CiSearch/></span>
    <input type="text" placeholder='Select City' className='w-100 border-0 border-end'/>
  </div>
    <div> <input type="text" placeholder='Min Price' className='w-100 mb-3 p-3'/></div>
    <div> <input type="text" placeholder='Max Price' className='w-100 mb-3 p-3'/></div>
    <div> <input type="text" placeholder='Area' className='w-100 mb-3  p-3'/></div>
    <div> <input type="text" placeholder='Search' className='bg-success rounded-pill text-center p-3 text-secondary border-info'/></div>
 </div>

    </div>
  )
}

export default NavBar