import React from "react";

export default function Footer() {
  return (
    <div className="bg-[#02353c]">
    <div className=" mr-[5%] ml-[5%] text-white">
      <div className="">
        EVMart
      </div>
       <hr className="border border-white mt-2 " />
       
      <div className=" md:flex md:justify-between md:space-y-3  md:text-left text-center">
        
        <div className="mt-3">  
          <p>E-Bikes</p>
          <br />
          <p className="hidden md:block ">
            Revolt RV400 <br />
            Ola S1 <br />
            TVS iQube <br />
            Ather 450X <br />
            Bajaj Chetak <br />
            Hero Electric Optima <br /> 
            Hero Electric Atria <br />
            Komaki XGTKM <br />
            Ampere Magnus <br />
            Hero Electric NY <br />
          </p>
        </div>

        <div>
          <p>E-3 wheeler</p>
          <br />
          <p className="hidden md:block">
          Mahindra Treo Zor <br />
          Kinetic Safar Jumbo <br />
          Atul Elite Cargo <br />
          Lohia Marain Cargo <br />
          Kinetic Safar Shakti <br />
          </p>
        </div>

        <div>
          <p>E-Car</p>
          <br />
          <p className="hidden md:block">
          Tata Nexon EV <br />
          Tata Tigor EV <br />
          MG ZS EV <br />
          Hyundai Koma Electric <br />
          Jaguar I-Pace <br />
          Audi e-Tron <br />
          BMW iX <br />
          Audi e-Tron Sportback <br />
          </p>
        </div>

        <div>
          <p>
            Support
          </p>
          <br />
          <p className="hidden md:block">
          Contact Us <br />
          Book a Test Ride <br />
          Become a Seller <br />
          Become a Dealer <br />
          </p>
        </div>

        <div>
          <p>About us</p>
         <br />
          <p className="hidden md:block">About EVMart</p>
        </div>

        <div>
          <p>Careers</p>
          <br />
          <p className="hidden md:block">Our culture <br />
             Job Openings <br />
          </p>
        </div>

      </div>
<hr className="border border-white "/>
        <div className="mt-2 pb-4 text-center">
          <p className="">2022.AdoptEV Technologies PVT LTD | *Privacy policy</p>
        </div>
    </div>
    </div>
  );
}
