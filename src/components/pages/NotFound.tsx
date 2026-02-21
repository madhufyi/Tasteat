import React from 'react'
import error from '../../assets/images/404.png'
import { Link } from 'react-router-dom'
import Button from '../Button'
import Header from '../Header'
import Footer from '../Footer'

const NotFound = () => {

    return (
        <React.Fragment>
            <Header error/>
            <div className='flex flex-col justify-center items-center gap-5 text-center'>
                <img src={error} alt="404" className='scale-[0.8]' />
                <p className='lg:text-5xl md:text-2xl text-xl font-cormorantBold'>Whoops, Nothing delicious to find here!</p>
                <p className='lg:text-lg text-base font-joseRegular'>The page you are looking for doesn't exist or has been moved.</p>

                <Link to="/">
                    {/* <button className='bg-dimYellow h-[68px] w-[232px] text-xl font-joseMedium text-primary'>Back to Home</button> */}
                    <Button variant="contained" label="Back to Home" />
                </Link>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default NotFound