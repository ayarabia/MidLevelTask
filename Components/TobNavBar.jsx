import React from 'react'
import { TbWorld } from 'react-icons/tb';
import { MdMenu } from 'react-icons/md';
import Link from 'next/link'
function TobNavBar() {
  return (
    <div className='container'>
    <div className='d-flex align-items-center justify-content-end text-primary fs-4'>
      <Link href="/" className='px-5 py-3 d-none d-md-block  '><TbWorld/></Link>
      <Link href="/" className='px-5 py-3 d-none d-md-block '>Log in</Link>
      <Link href="/"  className='px-5 py-3 fw-bold d-none d-md-block '>Sign up</Link>
      <Link href="/" className='pe-5 py-3'><MdMenu/></Link>
    
    </div>
    </div>
  )
}

export default TobNavBar