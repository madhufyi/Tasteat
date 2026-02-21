import React from "react";
import Footer from "../Footer";
import Header from "../Header";

import best from "../../assets/images/best.png";
import reserved from "../../assets/images/reserved.jpeg";
import TextInput from "../TextInput";
import Button from "../Button";

import time from "../../assets/icons/best/time.svg";
import truck from "../../assets/icons/best/truck.svg";
import pizza from "../../assets/icons/best/pizza.svg";
import quality from "../../assets/icons/best/quality.svg";

const keyFeatures = [
  {
    name: "Fresh Foood",
    icon: pizza,
  },
  {
    name: "Fast Delivery",
    icon: truck,
  },
  {
    name: "Quality Maintain",
    icon: quality,
  },
  {
    name: "24/7 Service",
    icon: time,
  },
];

const Booking = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="lg:w-[1378px] lg:mx-auto mx-5 lg:mt-20 mt-10 flex flex-col justify-center items-center">
        <div className="flex lg:flex-row flex-col-reverse justify-center items-center lg:gap-10 gap-5">
          <div className="flex flex-col lg:items-start gap-2 lg:w-[638px] items-start">
            <span className="text-lg border-y border-dimYellow text-darkSlate font-joseRegular uppercase">
              reservation
            </span>
            <p className="lg:text-4xl text-3xl font-infantBold text-darkSlate">
              Book your table now
            </p>
            <p className="text-base font-joseRegular text-[#555] lg:w-[538px]">
              The people, food and the prime locations make Rodich the perfect
              place good friends & family to come together and have great time.
            </p>

            <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 my-5 w-full">
              {["Name", "Email", "Phone", "Date", "Time", "Person"].map(
                (item) => (
                  <div className="w-full">
                    <TextInput label={item} placeholder={item} />
                  </div>
                )
              )}
              <div>
                <Button label="Book Now" variant="contained" fullWidth />
              </div>
            </div>
          </div>
          <img
            src={reserved}
            alt="reserved"
            className="lg:w-[538px] object-cover lg:h-[638px]"
          />
        </div>

        <div className="flex lg:flex-row flex-col justify-center items-center lg:gap-10 gap-5 lg:my-20 my-10">
          <img
            src={best}
            alt="best"
            className="lg:w-[538px] object-cover lg:h-[638px]"
          />
          <div className="flex flex-col lg:items-start gap-2 lg:w-[638px] items-start">
            <span className="text-lg border-y border-dimYellow text-darkSlate font-joseRegular uppercase">
              Why Choose Us
            </span>
            <p className="lg:text-4xl text-3xl font-infantBold text-darkSlate">
              Why We Are The Best?
            </p>
            <p className="text-base font-joseRegular text-[#555] lg:w-[538px]">
              Bring the table winwin survival strateges ensure proactive the
              domination the end of the day going forward new normal that has
              evolved froms generation on the runway heading towards streamlined
              cloud solution generated content in real times will have multiple
              touchpoints.
            </p>

            <div className=" grid lg:grid-cols-2 grid-cols-1 gap-10 items-cente mt-5 w-full">
              {keyFeatures.map((item: any) => (
                <span className="border-2 text-lg font-joseRegular border-[#5555] w-[269px] h-[68px] flex gap-2 items-center px-6">
                  <img src={item?.icon} alt="" />
                  {item?.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
};

export default Booking;
