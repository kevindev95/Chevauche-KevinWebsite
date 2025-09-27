import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-between items-center h-20 mx-4 bg-[#101e2b]'>
      <a href="CGU.html" className='text-3xl hover-tilt click-push'>CGU</a>
      <div className="flex items-center space-x-3">
        <a className='hover-float click-rotate-small' href="https://www.linkedin.com/in/k%C3%A9vin-chevauche-736984288/"><img src="/LinkedIn.png" alt="" /></a>
        <a className='hover-float click-rotate-small' href="mailto:kevin-chevauche@chevauche-kevin.com"><img src="/Gmail.png" alt="" /></a>
      </div>
    </div>
  )
}

export default Footer