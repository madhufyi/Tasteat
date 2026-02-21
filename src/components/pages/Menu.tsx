import React from "react";
import Footer from "../Footer";
import Header from "../Header";

import pwarn from '../../assets/images/pwarn.png'
import red from '../../assets/images/red.png'


const Menu = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="lg:my-20 my-10 flex flex-col justify-center items-center">
        <div className="w-full ">
          <img src={pwarn} alt="" className="obect-cover w-full"/>
        </div>
      </div>

      <div className="lg:my-20 my-10 flex flex-col justify-center items-center">
        <div className="w-full ">
          <img src={red} alt="" className="obect-cover w-full"/>
        </div>
      </div>


      <Footer />
    </React.Fragment>
  );
};

export default Menu;
