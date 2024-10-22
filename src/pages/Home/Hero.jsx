import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import PrimaryBtn from '/src/components/Button/PrimaryBtn';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay,  Navigation } from 'swiper/modules';


const Hero = () =>{

  const swiperData = [
    {
      id: 1,
      bgImg: "/public/pexels-nappy-936094.jpg",
      slogan: "EAT",
    },
    {
      id: 2,
      bgImg: "/public/pexels-punttim-60230.jpg",
      slogan: "RUN",
    },
    {
      id: 3,
      bgImg: "/public/pexels-runffwpu-2526878.jpg",
      slogan: "SLEEP",
    },
    {
      id: 4,
      bgImg: "/public/pexels-runffwpu-2526878.jpg",
      slogan: "REPEAT",
    },
  ];



    return(
    <>
    <div className="w-full h auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        
        navigation={true}
        modules={[Autoplay,  Navigation]}
        className="mySwiper"
      >

        {swiperData.map((data)=>(
          <SwiperSlide
          key={data.id}
          className="w-full h-[70vh] relative "
          style={{
            backgroundImage: `url(${data.bgImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}>
            <div className="w-full h-full bg-black/80 absolute top-0 left-0 -z-10"></div>
            <div className="w-full h-full flex items-center justify-center flex-col z-10 lg:px-24 md:px-16 sm:px-6 px-4">
              <h5 className="lg:text-4xl md:text-3xl sm:text-2xl text-neutral-50 font-semibold mb-2 uppercase">
                {data.slogan}
              </h5>
              <PrimaryBtn className="lg:w-[35%] md:w-[35%} sm:w-[75%] text-xl font-semibold rounded-full">Get Started</PrimaryBtn>
            </div>
          </SwiperSlide>
        ))}
        

       
      </Swiper>

       <div className="w-full h-auto flex items-center lg:justify-between md:lg:justify-between sm:lg:justify-center jusify-center lg:gap-7 md:gap-5 sm:gap-5 gap-5 lg:px-24 md:px-16 sm:px-6 px-6 mt-6 flex-wrap">
        <div className="flex items-center justify-center flex-col lg:w-fit md:w-[48%] sm:w-[48%] w-full lg:py-6 md:py-7 sm:pu-8 py-9 px-10 bg-black/10 hover:bg-black/30 rounded-md ease-out duration-700 cursor-pointer">
          <h5 className="text-4xl text-red-700 font-semibold mb-2 uppercase">
            1.000+
          </h5>
          <p className="text-lg text-gray-600 font-medium">Runners</p>
        </div>
        <div className="flex items-center justify-center flex-col lg:w-fit md:w-[48%] sm:w-[48%] w-full lg:py-6 md:py-7 sm:pu-8 py-9 px-10 bg-black/10 hover:bg-black/30 rounded-md ease-out duration-700 cursor-pointer">
          <h5 className="text-4xl text-red-700 font-semibold mb-2 uppercase">
            25
          </h5>
          <p className="text-lg text-gray-600 font-medium">Expert Trainers</p>
        </div>
        <div className="flex items-center justify-center flex-col lg:w-fit md:w-[48%] sm:w-[48%] w-full lg:py-6 md:py-7 sm:pu-8 py-9 px-10 bg-black/10 hover:bg-black/30 rounded-md ease-out duration-700 cursor-pointer">
          <h5 className="text-4xl text-red-700 font-semibold mb-2 uppercase">
            15+
          </h5>
          <p className="text-lg text-gray-600 font-medium">Years of Experience</p>
        </div>
        <div className="flex items-center justify-center flex-col lg:w-fit md:w-[48%] sm:w-[48%] w-full lg:py-6 md:py-7 sm:pu-8 py-9 px-10 bg-black/10 hover:bg-black/30 rounded-md ease-out duration-700 cursor-pointer">
          <h5 className="text-4xl text-red-700 font-semibold mb-2 uppercase">
            50+
          </h5>
          <p className="text-lg text-gray-600 font-medium">Distinctios</p>
        </div>
       
       </div>

    </div></>);
}

export default Hero;