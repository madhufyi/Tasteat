import React from "react";
import footerLogo from "../assets/images/footerLogo.svg";
import { socials } from "../utils/helpers";
import reservation from "../assets/images/reservation.png";
import { useLocation } from "react-router-dom";
import TextInput from "./TextInput";

const Footer = () => {
  const { pathname } = useLocation();

  return (
    <React.Fragment>
      {pathname !== "/reserve" && (
        <div className="relative">
          <div className=" w-full lg:mt-20 mt-10">
            <img src={reservation} alt="reservation" />
          </div>

          <div className="bg-[#1F242C] lg:absolute lg:w-[900px] p-10 left-[20%] top-[25%]">
            <div className="flex flex-col justify-center items-center lg:w-[744px] lg:m-auto">
              <span className="uppercase border-y border-dimYellow font-joseMedium lg:text-xl text-lg text-white">
                reservation
              </span>
              <p className="lg:text-3xl text-2xl font-infantBold text-white">
                Book your table now
              </p>

              <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-5 mt-5 w-full gap-5">
                <TextInput placeholder="Name" noBg textWhite />
                <TextInput placeholder="Email" noBg textWhite />
              </div>

              <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 lg:gap-5 mt-5 w-full">
                <TextInput placeholder="Person" noBg textWhite />
                <TextInput placeholder="Timing" noBg textWhite />
                <TextInput placeholder="Date" noBg textWhite />
              </div>

              <div className="mt-5 w-full flex justify-center items-center">
                <button
                  className={`bg-white text-darkSlate lg:h-[68px] h-[57px] lg:w-[232px] w-full lg:text-xl text-lg font-joseRegular`}
                >
                  Book a Table
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className={`true ? '' : 'lg:mt-20 mt-10'} bg-darkSlate w-full`}>
        {/* footer */}
        <div className=" flex lg:flex-row flex-col lg:justify-between justify-start lg:items-end lg:w-[1378px] m-auto lg:py-10 py-5">
          <div className="flex flex-col justify-start items-start lg:gap-[120px] gap-5 lg:p-0 p-5">
            <div>
              <p className="lg:text-xl text-lg font-joseRegular text-white underline">
                Instagram Feed
              </p>
            </div>

            <div className="flex flex-col gap-2 justify-start items-start">
              <span className="uppercase border-y border-dimYellow font-joseMedium lg:text-xl text-lg text-white">
                Contact
              </span>

              <p className="w-[266px] text-lg text-white font-joseRegular">
                5 Rue Dalou, 75015 Paris <br />
                Call - +33 156 78 89 56 benoit@mail.com
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5 justify-center items-center lg:p-0 p-5">
            <img
              src={footerLogo}
              alt=""
              className="w-[300px] h-[196px] m-auto"
            />
            <div className="lg:w-[300px] text-center">
              <p className="font-joseRegular lg:text-xl text-lg text-white">
                {" "}
                Join our mailing list for updates, Get news & offers events.
              </p>
            </div>
            <div className="flex items-center lg:w-[509px] lg:scale-[0.9] scale-[0.7] ">
              <input
                className="placeholder:font-joseRegular outline-none border border-white p-[17px] w-full bg-darkSlate text-white text-xl placeholder:text-white"
                placeholder="Email"
              />
              <button className="p-[17.8px] px-10 font-joseMedium text-xl bg-white">
                Subscribe
              </button>
            </div>
          </div>

          <div className="flex flex-col lg:gap-[120px] gap-5 justify-end items-end lg:p-0 p-5">
            <div className="flex items-center gap-5">
              {socials.map((item: any) => (
                <img src={item.icon} alt="" />
              ))}
            </div>

            <div className="flex flex-col gap-2 justify-end items-end text-end">
              <span className="uppercase border-y border-dimYellow font-joseMedium lg:text-xl text-lg text-white">
                working hours
              </span>

              <p className="w-[266px] text-lg text-white font-joseRegular">
                Mon – Fri: 7.00am – 6.00pm <br />
                Sat: 7.00am – 6.00pm <br />
                Sun: 8.00am – 6.00pm <br />
              </p>
            </div>
          </div>
        </div>
        {/* copyright */}
        <div className="p-5  border-y border-[#fcfcfc]">
          <div className="flex lg:flex-row flex-col items-center lg:justify-between justify-center lg:w-[1378px] m-auto ">
            <div>
              <p className="text-white font-joseRegular text-lg">
                © Copyright - Restaurantate 2023
              </p>
            </div>

            <div>
              <p className="font-joseRegular text-white text-lg">Tasteat</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
