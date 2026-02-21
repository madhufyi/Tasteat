import React from "react";
import Footer from "../Footer";
import Header from "../Header";

import ceo from "../../assets/images/ceo.png";
import signature from "../../assets/vectors/signature.svg";
import cooking from "../../assets/images/cooking.png";

import product from "../../assets/vectors/product.svg";
import hat from "../../assets/vectors/hat.svg";
import drinks from "../../assets/vectors/drinks.svg";
import cuisine from "../../assets/vectors/cuisine.svg";

import chef1 from "../../assets/images/chef1.png";
import chef2 from "../../assets/images/chef2.png";
import chef3 from "../../assets/images/chef3.png";
import chef4 from "../../assets/images/chef4.png";

import guy from "../../assets/avatars/guy.png";
import backquote from "../../assets/vectors/backquote.svg";

import rest1 from '../../assets/images/rest1.png'
import rest2 from '../../assets/images/rest2.png'
import rest3 from '../../assets/images/rest3.png'
import rest4 from '../../assets/images/rest4.png'
import rest5 from '../../assets/images/rest5.png'


const team = [
  {
    name: "Avacado",
    image: chef1,
  },
  {
    name: "Avacado",
    image: chef2,
  },
  {
    name: "Avacado",
    image: chef3,
  },
  {
    name: "Avacado",
    image: chef4,
  },
];

const attractions = [
  {
    id: 1,
    name: "Fresh Product",
    description: "Professional consider everyone probls small niche friendly.",
    icon: product,
  },
  {
    id: 2,
    name: "Skilled Chef",
    description: "Professional consider everyone probls small niche friendly.",
    icon: hat,
  },
  {
    id: 3,
    name: "Drinks & Juices",
    description: "Professional consider everyone probls small niche friendly.",
    icon: drinks,
  },
  {
    id: 4,
    name: "Vegan Cuisine",
    description: "Professional consider everyone probls small niche friendly.",
    icon: cuisine,
  },
];

const About = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="lg:w-[1378px] flex flex-col justify-center items-center m-auto lg:my-20 my-10">
        <div className="flex lg:flex-row flex-col justify-center items-center">
          <div className="lg:w-[628px] flex flex-col items-start gap-2 p-5">
            <span className="border-y border-dimYellow font-joseRegular text-base tracking-wide uppercase">
              About us
            </span>
            <p className="lg:text-4xl text-3xl font-infantBold text-darkSlate">
              Quality and Tradition
            </p>
            <p className="font-joseRegular lg:text-lg text-base text-[#555]">
              Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using 'Content here, content gfshere making
              look like readable English. Many desktop publishing packages.
            </p>
            <img src={signature} alt="sign" className="w-[190px] h-[190px]" />
            <button
              className={`bg-none border-2 border-dimYellow lg:h-[68px] h-[57px] w-[232px]
              } lg:text-xl text-lg font-joseRegular text-dimYellow`}
            >
              See More
            </button>
          </div>
          <img src={ceo} alt="" className="lg:block w-[648px] hidden" />
        </div>
      </div>

      <div className="w-full relative ">
        <img src={cooking} alt="bg" />
        <br />
        <div className="flex lg:flex-row flex-col items-center justify-center lg:gap-10 gap-5 lg:absolute top-[20%] left-[7%]">
          {attractions.map((item) => (
            <div className="flex flex-col justify-center items-center gap-2 text-center w-[279px]">
              <img src={item?.icon} alt="" />
              <p className="font-infantBold lg:text-xl text-lg lg:text-white">
                {item?.name}
              </p>
              <p className="font-joseRegular text-base lg:text-white">
                {item?.description}
              </p>
              <button className="font-joseRegular text-base text-dimYellow mt-5">
                See more
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-center items-center lg:mt-20 mt-10">
        <span className="border-y uppercase border-dimYellow font-joseRegular lg:text-lg text-base">
          team
        </span>
        <p className="font-infantBold lg:text-4xl text-3xl text-darkSlate">
          Meet Our Professional Chefs
        </p>

        <div className="flex lg:flex-row flex-col items-center justify-center lg:w-[1378px] m-auto lg:gap-10 gap-5 mt-10">
          {team.map((item) => (
            <div className="flex flex-col justify-center items-center gap-1">
              <img src={item.image} alt="" className="w-[283px]" />
              <p className="font-infantBold text-darkSlate lg:text-2xl text-lg">
                {item.name}
              </p>
              <p className="font-joseRegular text-base text-[#555]">
                Master Chef
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full bg-darkSlate p-10 flex flex-col justify-center items-center mt-10 overlfow-hidden">
        <span className="border-y uppercase border-dimYellow font-joseRegular lg:text-lg text-base text-white">
          team
        </span>
        <p className="font-infantBold lg:text-4xl text-3xl text-white">
          What Our Clients Say
        </p>

        <div className="mt-10">
          <div className="flex flex-col justify-center items-center gap-2">
            <img src={backquote} alt="" className="w-[46px] h-[34px]" />
            <p className="font-infantItalic lg:text-xl text-lg text-white lg:w-[815px] text-center m-auto">
              " Ex dolor elit elit excepteur.Velit adipisicing ut ex consectetur
              duis cupidatat est veniam velit ut tempor mollit tempor magna.Aute
              duis exercitation et fugiat ad cillum culpa velit duis et duis
              aute aute."
            </p>
            <img src={guy} alt="" />
            <p className="font-infantBold text-white lg:text-2xl text-xl">
              John Doe
            </p>
            <p className="font-joseRegular text-dimYellow text-base">
              Senior Executive
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col justify-center items-center lg:mt-20 mt-10">

      <span className="border-y uppercase border-dimYellow font-joseRegular lg:text-lg text-base text-darkSlate">
          galary
        </span>
        <p className="font-infantBold lg:text-4xl text-3xl text-darkSlate">
          What We Make
        </p>

        <div className="flex lg:flex-row flex-col justify-center items-center gap-5 mt-10 mx-5">

            <div className="flex flex-col justify-center items-center gap-5">
              <img src={rest5} alt="" className="" />
              <img src={rest2} alt="" />
            </div>

            <div className="lg:block hidden">
              <img src={rest3} alt="" className="lg:h-[622px] object-fit "/>
            </div>

            <div className="flex flex-col justify-center items-center gap-5">
              <img src={rest1} alt="" />
              <img src={rest4} alt="" />
            </div>

        </div>

      </div>
      <Footer />
    </React.Fragment>
  );
};

export default About;
