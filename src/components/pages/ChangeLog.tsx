import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

const ChangeLog = () => {
  return (
    <div>
      <Header />
      <div className='lg:my-20 my-10 lg:w-[904px] h-[320px] lg:m-auto bg-[#FFF8F5] border border-dimYellow flex flex-col justify-center items-center gap-5 m-5 text-center'>
        <p className='lg:text-4xl text-3xl font-cormorantSemiBold'>Version 1.0</p>
        <p className='lg:text-xl text-lg font-joseRegular text-darkSlate'>Initial Restaurantate Webflow Template has been released!</p>
      </div>
      <Footer />
    </div>
  )
}

export default ChangeLog