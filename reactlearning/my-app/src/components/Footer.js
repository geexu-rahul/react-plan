import React from 'react'

import "./footer.css"

export default function Footer() {
  let footerStyle = {
    position : 'absolute',
    bottom : '0',
    left : '0',
    right : '0',
  } 
  return (
    <div className='bg-dark p-5 mt-5' style={footerStyle}></div>
  )
}
