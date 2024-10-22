import React from 'react'
import SecondaryBtn from "/src/components/Button/SecondaryBtn.jsx";
const About = () => {
  return (
    <>
      <div className="w-full h-auto flex items-center justify-between gap-7 lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4 flex-wrap-reverse w-full">
        <div className="lg:w-[38%] mf:w-full sm:w-full w-full h-auto relative overflow-hidden rounded-lg">
            <img src="/public/pexels-pixabay-34514.jpg" alt="about img" className="w-full lg:h-[70%] md:h-[68vh] sm:h-[60vh] h-[55vh] object-cover" />
        </div>
        <div className="lg:w-[50%] md:w-full sm:w-full w-full h-auto lg:text-start md:text-start sm:text-start text-center">
            <h6 className="text-lg font-medium text-red-700 flex items-center lg:justify-start md:justify-start sm:justify-center justifu-center gap-x-2 mb-3">
                About Us
            </h6>
            <h1 className="lg:text-3xl md:text-3xl sm:text-2xl text-xl font-semibold text-gray-200 mb-4 leading-normal lg:pe-5 md:pe-4 sm:pe-1 pe-0">
                Effortless Running Programms
            </h1>
            <p className="lg:text-base md:text-base sm:text-sm text-sm text-gray-500 font-medium mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
            <SecondaryBtn className="lg:w-auto md:w-auto sm:w-full w-full px-7 py-2 text-base font-medium uppercase justify-center">Become a Member</SecondaryBtn>
        </div>
      </div>
    </>
  )
}

export default About
