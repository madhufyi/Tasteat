import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { keypoints } from '../../utils/helpers'
import story from '../../assets/images/story.png'
import signature from '../../assets/vectors/signature.svg'
import lights from '../../assets/images/lights.png'

import guy from '../../assets/avatars/guy.png'
import nat from '../../assets/avatars/nat.png'
import jack from '../../assets/avatars/jack.png'

// import Marquee from "react-fast-marquee";

import burger from '../../assets/images/burger.png'
import pizza from '../../assets/images/pizza.png'
import price from '../../assets/vectors/price.svg'
import price2 from '../../assets/vectors/price2.svg'
import offer from '../../assets/vectors/offer.svg'
import hexagon from '../../assets/vectors/hexagon.svg'

import meatballs from '../../assets/images/meatballs.png'
import hotdog from '../../assets/images/hotdog.png'
import lime from '../../assets/images/lime.png'
import cheesyBurger from '../../assets/images/cheesy-burger.png'

import calendar from '../../assets/icons/calendar.svg'
import special from '../../assets/icons/special.svg'
import delivery from '../../assets/icons/delivery.svg'

import roasted from '../../assets/images/roasted.png'




const FeedbackCard = ({ image }: any) => {
  return (
    <div className='bg-[#343942] p-10 lg:w-[527px] w-[327px] lg:h-[386px] flex flex-col m-5'>

      <div className='flex items-center gap-5 '>
        <img src={image} alt="" />

        <div>
          <p className='lg:text-3xl text-2xl font-infantBold text-white'>Daniyal Sppra</p>
          <p className='lg:text-xl text-lg font-joseRegular text-dimYellow'>Newyork</p>
        </div>

      </div>

      <div className='border-b border-white my-5   ' />

      <div className=''>
        <p className='font-infantItalic text-white lg:text-3xl text-xl'>
          "It is professional, considers everyone's time, can think about the  There are many variations of passages whole probls small niche, friendly.
        </p>
      </div>
    </div>
  )
}


const Home = () => {
  return (
    <React.Fragment>
      <Header />

      <div className='bg-[#FFF8F5] lg:py-10 py-10'>

        <div className='lg:w-[1378px] m-auto'>
          <div className='my-10'>
            <div className='flex lg:flex-row flex-col lg:justify-between  items-center lg:gap-10 gap-5 lg:m-auto m-5'>
              {
                keypoints.map(item => (
                  <div className='flex lg:items-center  gap-5 p-2'>
                    <img src={item.icon} alt="" />
                    <div className='flex flex-col gap-2'>
                      <p className='lg:text-4xl text-3xl font-infantBold text-darkSlate'>{item?.title}</p>
                      <p className='lg:text-xl text-lg text-[#4A4A4A] font-joseRegular'>{item?.subText}</p>
                    </div>
                  </div>
                ))
              }
            </div>

          </div>

          <div className='flex lg:flex-row flex-col justify-center items-center lg:m-auto m-5 lg:gap-0 gap-5'>
            <img src={story} alt="" />
            <div className='flex flex-col gap-2 lg:h-[446px] lg:p-10'>
              <p className='lg:text-4xl text-3xl font-infantBold text-darkSlate'>The Story</p>
              <p className='lg:text-lg text-base font-joseRegular text-[#555555]'>Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content gfshere', makinlook like readable English. Many desktop publishing packages.</p>

              <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-0 gap-2 my-2'>
                <div>
                  <p className='lg:text-4xl text-3xl font-infantBold text-darkSlate'>1996</p>
                  <p className='lg:text-lg text-base font-joseRegular text-[#555555]'>Lorem Ipsum is that it has a more-or-less normal distribution </p>
                </div>

                <div>
                  <p className='lg:text-4xl text-3xl font-infantBold text-darkSlate'>2023</p>
                  <p className='lg:text-lg text-base font-joseRegular text-[#555555]'>Lorem Ipsum is that it has a more-or-less normal distribution </p>
                </div>


              </div>

              <img src={signature} alt="" className='w-[159px] h-[116px]' />
            </div>
          </div>

        </div>

      </div>

      <div className='bg-darkSlate w-full lg:hidden block'>
        <div className='lg:p-10 lg:pl-20 p-5'>

          <div className=''>
            <span className='uppercase border-y border-dimYellow font-joseMedium text-lg text-white py-1'>testimonial</span>
            <div className='flex flex-col gap-2 mt-2'>
              <p className='text-white font-infantBold lg:text-4xl text-3xl '>What our clients say</p>
              <p className='text-white font-joseRegular lg:text-lg text-base '>We love to hear from customers, so please leave a comment or say hello in an email.</p>
            </div>
          </div>

          {/* <Marquee> */}
            <FeedbackCard image={guy} />
            <FeedbackCard image={nat} />
            <FeedbackCard image={jack} />
          {/* </Marquee> */}

        </div>
        <img src={lights} alt="" />
      </div>

      <div className="lg:mt-20 mt-10 flex flex-col justify-center items-center">
        <span className='uppercase border-y border-dimYellow font-joseMedium text-lg text-darkSlate '>offer</span>
        <p className='font-infantBold lg:text-4xl text-3xl text-darkSlate my-2'>Our special  Offer dishes</p>
        <p className='lg:w-[702px] lg:text-xl text-base font-joseRegular text-[#555555] text-center'>Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content making.</p>
        <br />
        <div className='flex lg:flex-row flex-col justify-center items-center lg:gap-10 gap-5 lg:m-auto m-5 '>

          <div className='bg-[#C6EAF2] flex lg:flex-row flex-col items-center justify-center p-10 relative lg:gap-0 gap-5'>

            <div className='lg:w-[259px]'>
              <img src={price} alt="price_value" className='w-[100px] h-[100px] mb-2' />
              <span className='uppercase border-y border-darkSlate py-1 font-joseMedium text-base text-darkSlate'>50% Offer Going</span>
              <p className='font-infantBold text-darkSlate lg:text-3xl text-2xl mt-2'>Chicken Burger</p>
              <p className='font-joseRegular text-[#555555] lg:text-lg text-base mt-1'>Lorem Ipsum is that it has a more-or-less normal</p>
            </div>
            <img src={burger} alt="burger" className='w-[332px] h-[242px] z-[20]' />

            <div className='absolute top-0 lg:block hidden'>
              <img src={offer} alt="shape" />
            </div>

          </div>

          <div className='bg-[#D7D7D7] flex lg:flex-row flex-col items-center justify-center p-10 relative lg:gap-0 gap-5'>

            <div className='lg:w-[259px]'>
              <img src={price2} alt="price_value" className='w-[100px] h-[100px] mb-2' />
              <span className='uppercase border-y border-darkSlate py-1 font-joseMedium text-base text-darkSlate'>50% Offer Going</span>
              <p className='font-infantBold text-darkSlate lg:text-3xl text-2xl mt-2'>Chicken Pizza</p>
              <p className='font-joseRegular text-[#555555] lg:text-lg text-base mt-1'>Lorem Ipsum is that it has a more-or-less normal</p>
            </div>
            <img src={pizza} alt="pizza" className='w-[332px] h-[242px] object-contain scale-[1.3] z-[20]' />
            <div className='absolute bottom-0 z-[10] right-[20px]'>
              <img src={hexagon} alt="" />
            </div>

          </div>
        </div>

      </div>

      <div className='lg:mt-20 mt-10 flex flex-col justify-center items-center'>
        <span className='uppercase border-y border-dimYellow font-joseMedium text-lg text-darkSlate '>menu</span>
        <p className='font-infantBold lg:text-4xl text-3xl text-darkSlate my-2'>Popular Dishes</p>
        <p className='lg:w-[702px] lg:text-xl text-base font-joseRegular text-[#555555] text-center'>Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content making.</p>
        <br />
        <div className='mt-10 grid lg:grid-cols-4 grid-cols-1 lg:gap-7 gap-5 lg:m-auto m-5'>

          <div className='lg:w-[326px] flex flex-col gap-2'>
            <img src={meatballs} alt="meatballs" />
            <div className='flex justify-between'>
              <p className='font-infantBold lg:text-3xl text-2xl text-darkSlate'>Chicken Meatballs</p>
              <p className='font-infantBold lg:text-3xl text-2xl text-darkSlate'>$15</p>
            </div>
            <p className='font-joseRegular text-[#555555] lg:text-lg text-base '>Lorem Ipsum is that it has a
              more-or-less normal</p>
          </div>

          <div className='lg:w-[326px] flex flex-col gap-2'>
            <img src={hotdog} alt="hotgo" />
            <div className='flex justify-between'>
              <p className='font-infantBold lg:text-3xl text-2xl text-darkSlate'>Chicken Meatballs</p>
              <p className='font-infantBold lg:text-3xl text-2xl text-darkSlate'>$15</p>
            </div>
            <p className='font-joseRegular text-[#555555] lg:text-lg text-base '>Lorem Ipsum is that it has a
              more-or-less normal</p>
          </div>

          <div className='lg:w-[326px] flex flex-col gap-2'>
            <img src={lime} alt="lime" />
            <div className='flex justify-between'>
              <p className='font-infantBold lg:text-3xl text-2xl text-darkSlate'>Chicken Meatballs</p>
              <p className='font-infantBold lg:text-3xl text-2xl text-darkSlate'>$15</p>
            </div>
            <p className='font-joseRegular text-[#555555] lg:text-lg text-base '>Lorem Ipsum is that it has a
              more-or-less normal</p>
          </div>

          <div className='lg:w-[326px] flex flex-col gap-2'>
            <img src={cheesyBurger} alt="burger" />
            <div className='flex justify-between'>
              <p className='font-infantBold lg:text-3xl text-2xl text-darkSlate'>Chicken Meatballs</p>
              <p className='font-infantBold lg:text-3xl text-2xl text-darkSlate'>$15</p>
            </div>
            <p className='font-joseRegular text-[#555555] lg:text-lg text-base '>Lorem Ipsum is that it has a
              more-or-less normal</p>
          </div>

        </div>

        <div className='mt-10'>
          <button
            className={`bg-none border-2 border-dimYellow lg:h-[68px] h-[57px] w-[232px] lg:text-xl text-lg font-joseRegular text-darkSlate`}>See all dishes</button>
        </div>

      </div>

      <div className='bg-darkSlate w-full  lg:mt-20 mt-10 flex lg:flex-row flex-col justify-center items-center lg:p-20 p-10 lg:gap-0 gap-5'>
        <div className='lg:w-[398px]'>
          <span className='uppercase border-y border-dimYellow font-joseMedium text-lg text-white py-1'>what we offer</span>
          <p className='font-infantBold lg:text-4xl text-3xl text-white my-2'>Our Great Services</p>
          <p className=' lg:text-xl text-base font-joseRegular text-[#555555]'>Lorem Ipsum is that it has a more-or-less normal distribution content making it look like readable English. </p>
        </div>

        <div className='flex lg:flex-row flex-col lg:gap-10 gap-5'>

          <div className='bg-[#323841] w-[257px] h-[257px] p-5 rounded flex justify-center items-center'>
            <div className='bg-darkSlate w-[211px] h-[211px] p-5 flex flex-col justify-center items-center gap-5 rounded'>
              <img src={calendar} alt="" />
              <p className='text-white font-infantBold lg:text-3xl text-2xl text-center'>Opened 24/7</p>
            </div>
          </div>

          <div className='bg-[#323841] w-[257px] h-[257px] p-5 rounded flex justify-center items-center'>
            <div className='bg-darkSlate w-[211px] h-[211px] p-5 flex flex-col justify-center items-center gap-5 rounded'>
              <img src={special} alt="" />
              <p className='text-white font-infantBold lg:text-3xl text-2xl text-center'>Special Menus</p>
            </div>
          </div>

          <div className='bg-[#323841] w-[257px] h-[257px] p-5 rounded flex justify-center items-center'>
            <div className='bg-darkSlate w-[211px] h-[211px] p-5 flex flex-col justify-center items-center gap-5 rounded'>
              <img src={delivery} alt="" />
              <p className='text-white font-infantBold lg:text-3xl text-2xl text-center'>Home Delivery</p>
            </div>
          </div>

        </div>


      </div>

      <div className='flex flex-col justify-center items-center lg:mt-20 mt-10'>
        <span className='uppercase border-y border-dimYellow font-joseMedium text-lg text-darkSlate '>blog</span>
        <p className='font-infantBold lg:text-4xl text-3xl text-darkSlate my-2'>Be First Who Read News</p>
        <p className='lg:w-[702px] lg:text-xl text-base font-joseRegular text-[#555555] text-center'>Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content making.</p>
        <br />
        <div className='flex lg:flex-row flex-col items-center justify-center lg:gap-10 gap-5 lg:m-auto m-5'>
          <div className='flex flex-col lg:w-[661px] border border-darkSlate '>
            <img src={roasted} alt={roasted} />
            <div className='p-5 flex flex-col gap-3 lg:w-[580px]'>
              <div className='flex items-center gap-2'>
                <span className='uppercase border-y-2 border-dimYellow font-joseMedium text-lg text-darkSlate tracking-widest'>Restaurants</span>
                <span className='uppercase border-y-2 border-dimYellow font-joseMedium text-lg text-darkSlate tracking-widest'>Feb 22, 2022</span>
              </div>

              <p className='lg:text-3xl text-2xl font-infantBold text-darkSlate'>The Most Popular Delicious Food Of Mediterranean Cuisine</p>
              <p className='lg:text-xl text-lg font-joseRegular text-[#555]'>Capitalize on low-hanging fruit to identify a ballpark value added matrix economically and the creative activity to beta test override the food quality.</p>
            </div>

          </div>

          <div className='flex flex-col lg:w-[661px] border border-darkSlate'>
            <img src={roasted} alt={roasted} />
            <div className='p-5 flex flex-col gap-3 lg:w-[580px]'>
              <div className='flex items-center gap-2'>
                <span className='uppercase border-y-2 border-dimYellow font-joseMedium text-lg text-darkSlate tracking-widest'>Restaurants</span>
                <span className='uppercase border-y-2 border-dimYellow font-joseMedium text-lg text-darkSlate tracking-widest'>Feb 22, 2022</span>
              </div>

              <p className='lg:text-3xl text-2xl font-infantBold text-darkSlate'>The Most Popular Delicious Food Of Mediterranean Cuisine</p>
              <p className='lg:text-xl text-lg font-joseRegular text-[#555]'>Capitalize on low-hanging fruit to identify a ballpark value added matrix economically and the creative activity to beta test override the food quality.</p>
            </div>

          </div>
        </div>

      </div>

      <Footer />
    </React.Fragment>
  )
}

export default Home