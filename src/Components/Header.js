import React from "react";

export default function Header() {
  return (
    <>
    {/* ml-2 lg:mr-24 lg:ml-24 */}
      <div className="hidden sm:block">
        <nav className="">
          <div className="ml-[5%] mr-[5%] ">
            <div className="  flex justify-between h-12  ">
              <h1 className="text-2xl p-2 font-bold text-[#02353c] ">
                ADOPTEV
              </h1>

              <div className=" hidden  sm:flex  ">
                <div className="flex text-[#02353c] ">
                  <h3 className="p-2 mt-1">Finance</h3>
                  <h3 className="p-2 mt-1">Partner with us</h3>
                </div>
                <div className="flex  justify-center">
                  <div className="mt-2 ml-2">
                    <button
                      type="button"
                      className=" px-6 pt-1.5 pb-1 bg-[#02353c] text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex "
                    >
                      Login
                    </button>
                    {/* <GiHamburgerMenu></GiHamburgerMenu> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
