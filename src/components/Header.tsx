import React, { useState } from 'react'
import Button from './Button'
import tasteat from '../assets/images/tasteat.svg'
import hero from '../assets/images/hero.png'

// import cart from '../assets/icons/cart.svg'
import { menuItems, socials } from '../utils/helpers'
import { Link, useLocation } from 'react-router-dom'
import menu from '../assets/icons/menu.svg'

const HeroSection = () => {
  return (
    <div className='lg:w-[1378px] m-auto flex lg:flex-row flex-col items-center lg:justify-between relative lg:py-20 '>

      <div className='lg:w-[574px] flex flex-col gap-5 p-5'>
        <p className='lg:text-7xl md:text-3xl text-3xl font-cormorantBold text-white'>Welcome to
          Restaurantate</p>
        <p className='lg:text-lg text-base text-white font-joseRegular'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy .</p>

        <Button variant="outlined" label="View Menu" />
      </div>

      <div className='lg:absolute lg:right-0 lg:top-[43px]'>
        <img src={hero} alt="heroImage" className='lg:w-[585px] lg:h-[611px]' />
      </div>

    </div>
  )
}

const SectionTitle = ({ text }: any) => {
  return (
    <span className='lg:text-6xl md:text-3xl text-2xl font-infantBold text-white border-y border-dimYellow'>{text}</span>
  )
}

const Header = ({ error }: any) => {

  const [toggle, setToggle] = useState(false)

  const { pathname } = useLocation()

  return (
    <React.Fragment>

      {/* Menu Icon */}
      <div onClick={() => setToggle(!toggle)} className='lg:hidden fixed top-[20px] left-[20px] cursor-pointer z-[99]'>
        <div className='bg-[#323841] shadow-2xl w-[60px] h-[60px] rounded-full flex justify-center items-center'>
          <img src={menu} alt="" className='w-[32px] h-[32px]' />
        </div>
      </div>

      {
        toggle && (
          <div className='bg-[#323841] w-[290px] p-5 fixed left-[20px] top-[100px] z-[99]'>
            <div className='flex flex-col justify-center items-center gap-5 p-5 w-full border border-white '>
              {menuItems?.map((item: any) => (
                <Link to={item?.link} onClick={() => setToggle(false)}>
                  <p className='text-white font-joseRegular text-xl cursor-pointer'>{item?.name}</p>
                </Link>
              ))}
            </div>
          </div>
        )
      }


      <div className='bg-[#1F242C] w-full lg:py-10 py-5'>

        <div className='lg:flex hidden items-center lg:gap-10 justify-between  lg:w-[1378px] m-auto py-4'>
          <Button variant="outlined" label="Call-987 654 321" />
          <Link to="/">
            <img src={tasteat} alt="logo" className=']' />
          </Link>
          <div className='flex items-center gap-5'>
            {/* <img src={cart} alt="cart" /> */}
            <Button variant="contained" label="Reservation" />
          </div>
        </div>

        <div className='lg:hidden flex justify-center items-center'>
          <Link to="/">
            <img src={tasteat} alt="logo" className='scale-[0.9]' />
          </Link>
        </div>


        <div className='border-y border-[#808080] p-5 lg:block hidden'>

          <div className='flex items-center lg:w-[1378px] justify-between m-auto'>
            <div className='flex items-center lg:gap-10 gap-5'>
              {
                menuItems.map((item: any) => (
                  <Link to={item?.link}>
                    <p className='text-lg font-joseRegular cursor-pointer text-white'>{item.name}</p>
                  </Link>
                ))
              }
            </div>

            <div className='flex items-center lg:gap-5'>
              {
                socials.map((item: any) => (
                  <img src={item.icon} alt="" className='cursor-pointer' />
                ))
              }
            </div>
          </div>
        </div>

        <div className='flex justify-center items-center mt-10'>

          {
            pathname === '/' && (<HeroSection />)
          }

          {
            pathname === '/about-us' && (
              <SectionTitle text="About Us" />
            )
          }

          {
            pathname === '/our-menu' && (
              <SectionTitle text="Our Menu" />
            )
          }

          {
            pathname === '/reserve' && (
              <SectionTitle text="Booking Page" />
            )
          }

          {
            pathname === '/gallery' && (
              <SectionTitle text="Gallery" />
            )
          }

          {
            pathname === '/blog' && (
              <SectionTitle text="Blog" />
            )
          }

          {
            pathname === '/contact-us' && (
              <SectionTitle text="Contact Us" />
            )
          }
          {
            pathname === '/changelog' && (
              <SectionTitle text="Changelog" />
            )
          }
          {
            error && (
              <SectionTitle text="404" />
            )
          }

          {
            pathname === '/faq' && (
              <SectionTitle text="FAQ" />
            )
          }
          {
            pathname === '/protected' && (
              <SectionTitle text="Password Protected" />
            )
          }


        </div>

      </div>
    </React.Fragment>
  )
}

export default Header