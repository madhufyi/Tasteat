import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { questions } from '../../utils/helpers';

const Faq = () => {

    return (
        <React.Fragment>
            <Header />
            <div className='flex flex-col justify-center items-center gap-2 my-10'>
                <span className='uppercase border-y border-dimYellow font-joseMedium lg:text-xl text-lg text-darkSlate'>Questions</span>
                <p className='font-infantBold lg:text-5xl text-3xl text-darkSlate'>Frequently Asked Questions</p>

                <div className='flex flex-col justify-center items-center lg:w-[927px] gap-5 mt-10 m-5'>
                    {questions?.map((item: any) => (
                        <div className="">
                            <Accordion
                                sx={{ border: "1px solid #C4C4C4" }}
                                //   expanded={expanded === "panel1"}
                                elevation={0}
                            >
                                <AccordionSummary
                                    expandIcon={<KeyboardArrowDownIcon sx={{ color: "#292E36" }} />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <p className='py-5'>
                                        <span className='lg:text-xl text-lg font-joseMedium text-darkSlate'>{item?.q}</span>
                                    </p>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <p className='lg:text-xl text-lg font-joseRegular text-[#555555]'>{item?.a}
                                    </p>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    ))}

                </div>

            </div>

            <Footer />
        </React.Fragment>
    )
}

export default Faq