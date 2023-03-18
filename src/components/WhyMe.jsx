import React from 'react';
import midHero from "../assets/midhero.jpg"

const WhyMe = () => {
  return (
    <div className='py-8'>
      <div className='font-extrabold text-2xl text-center mb-4'>
        <h3>Here's why you should work with ME 🤝 </h3>
      </div>
      <div className='flex flex-wrap'>
        <div className='w-10/12 sm:w-1/2 md:w-1/3 mx-auto items-center justify-center'>
          <img className='rounded-xl h-40 lg:h-80' src={midHero} alt="" />
        </div>
        <div className='mt-4 font-semibold mx-8 flex items-center content-center text-lg'>
          <ul>
            <li>We are a group of experts having hands-on experience working with real-time projects</li>
            <li>We deliver quality solutions with affordable prize</li>
            <li>We deliver products on promised time, with high quality</li>
            <li>We also provide future support and Maintenance for the product</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default WhyMe;