import React from 'react'
import lock from '../../assets/icons/lock.svg'
import TextInput from '../TextInput'
import Button from '../Button'
import Header from '../Header'
import Footer from '../Footer'

const Proctected = () => {
    return (
        <React.Fragment>
            <Header />
            <div className="my-10 flex flex-col justify-center items-center">

                <div className='bg-[#FFF8F5] border border-dimYellow lg:w-[904px] flex flex-col justify-center items-center lg:m-auto  m-5 text-center lg:p-20  p-5 gap-5'>
                    <img src={lock} alt="lock" />
                    <p className='lg:text-5xl text-3xl font-infantSemiBold text-darkSlate'>Protected Page</p>
                    <p className='lg:text-xl text-lg font-joseRegular'>This page is password protected. If you are the website admin, or have access to this page, please type your password below.</p>

                    <div className='flex flex-col gap-5 lg:w-[70%] w-full'> 
                        <TextInput placeholder="Enter Your Password" />
                        <Button variant="contained" label="Submit" fullWidth />
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default Proctected