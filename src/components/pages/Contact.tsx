import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import TextInput from '../TextInput'
import { contactDetails, socialIcons } from '../../utils/helpers'

import losAngeles from '../../assets/images/los-angeles.png'
import sanFran from '../../assets/images/san-fran.png'

import mailIcon from '../../assets/icons/mailIcon.svg'
import callIcon from '../../assets/icons/callIcon.svg'

const Contact = () => {
    return (
        <React.Fragment>
            <Header />
            <div className='flex flex-col justify-center items-center gap-2 my-10 '>

                <div className='flex lg:flex-row flex-col justify-center items-center lg:gap-10 gap-5'>
                    <div className='lg:w-[581px] bg-[#FFF8F5] lg:p-20 p-5 flex flex-col gap-2  lg:m-auto m-5'>
                        <p className='lg:text-4xl text-3xl font-infantBold text-[#292E36]'>Contact Information</p>
                        <p className='lg:text-xl text-lg font-joseRegular text-[#292E36]'>Bring the table winwin survival strateges ensure proactive domination the end of the day going real times multiple touchpoints.</p>

                        <div className='flex flex-col gap-2 my-5'>
                            {
                                contactDetails.map((item: any) => (
                                    <div className='flex items-center gap-2'>
                                        <img src={item?.icon} alt="" />
                                        <p className='lg:text-xl text-lg font-joseRegular text-[#292E36]'>{item?.text}</p>
                                    </div>
                                ))
                            }
                        </div>

                        <div className='flex items-center gap-2'>
                            {socialIcons.map(item => (
                                <img src={item?.icon} alt="" />
                            ))}
                        </div>

                    </div>

                    <div className='lg:w-[744px] w-full lg:m-auto m-5 flex flex-col gap-5 px-5 '>
                        <div>
                            <span className='uppercase border-y border-dimYellow font-joseMedium lg:text-xl text-lg text-darkSlate py-1'>mail us</span>
                            <p className='lg:text-4xl text-3xl font-infantSemiBold text-darkSlate mt-5'>Have a Question?</p>
                        </div>

                        <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
                            <TextInput placeholder="Name" />
                            <TextInput placeholder="Email" type="email" />
                            <TextInput placeholder="Subject" />
                            <TextInput placeholder="Phone" type="number" />
                        </div>
                        <TextInput height="pt-5 pb-20" placeholder="Message" />
                    </div>
                </div>

                <div className='flex flex-col lg:mt-20 mt-10 justify-center items-center'>
                    <span className='uppercase border-y border-dimYellow font-joseMedium lg:text-xl text-lg text-darkSlate py-1'>visit us</span>
                    <p className='lg:text-4xl text-3xl font-infantBold text-darkSlate'>Come and visit our Branches</p>


                    <div className='flex lg:flex-row flex-col lg:gap-10 gap-5 items-center justify-center mt-10'>

                        <div className='flex lg:flex-row flex-col items-center '>
                            <div className='lg:w-[318px] w-full lg:p-10 p-5 border border-[#d9d9d9] lg:h-[422px] lg:m-auto m-4 flex flex-col gap-4'>
                                <p className='lg:text-3xl text-xl font-infantBold text-darkSlate'>Los Angeles, CA</p>
                                <p className='lg:text-xl text-base font-joseRegular text-[#4A4A4A]'>Riverside 25, San Francisco
                                    California
                                </p>
                                <div className='flex items-center gap-2'>
                                    <img src={mailIcon} alt=""/>
                                    <p className='lg:text-xl text-base font-joseRegular text-[#4A4A4A]'>contact@tasteat.com</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <img src={callIcon} alt=""/>
                                    <p className='lg:text-xl text-base font-joseRegular text-[#4A4A4A]'>(487) 870 - 1087</p>
                                </div>

                            </div>
                            <img src={losAngeles} alt="losAngeles" />
                        </div>

                        <div className='flex lg:flex-row flex-col items-center '>
                            <div className='lg:w-[318px] w-full lg:p-10 p-5 border border-[#d9d9d9] lg:h-[422px] lg:m-auto m-4 flex flex-col gap-4'>
                                <p className='lg:text-3xl text-xl font-infantBold text-darkSlate'>San Francisco, CA</p>
                                <p className='lg:text-xl text-base font-joseRegular text-[#4A4A4A]'>Riverside 25, San Francisco
                                    California
                                </p>
                                <div className='flex items-center gap-2'>
                                    <img src={mailIcon} alt="" />
                                    <p className='lg:text-xl text-base font-joseRegular text-[#4A4A4A]'>contact@tasteat.com</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <img src={callIcon} alt="" />
                                    <p className='lg:text-xl text-base font-joseRegular text-[#4A4A4A]'>(487) 870 - 1087</p>
                                </div>
                            </div>
                            <img src={sanFran} alt="sanFran" />
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default Contact