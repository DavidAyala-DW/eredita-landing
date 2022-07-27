import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import {AppContext} from "../helpers/Context";

import "swiper/css";
import "swiper/css/effect-coverflow";

import { Navigation } from "swiper";


import YaleaBanner from "../public/yalea_banner.png";
import YaleaLogo from "../public/yalea_logo.svg";

import PoliceBanner from "../public/police_banner.png";
import PoliceLogo from "../public/police_logo.svg";

import JohnBanner from "../public/john_banner.png";
import JohnLogo from "../public/john_logo.svg";

import LuckyBanner from "../public/lucky_banner.png";
import LuckyLogo from "../public/lucky_logo.svg";

import LeftArrow from "../public/left_arrow.svg";
import RightArrow from "../public/right_arrow.svg";
import { useEffect, useState,useContext } from "react";

const slidesArray = [

  {
    banner: YaleaBanner,
    Logo: YaleaLogo,
  },
  {
    banner: PoliceBanner,
    Logo: PoliceLogo,
  },
  {
    banner: JohnBanner,
    Logo: JohnLogo,
  },
  {
    banner: LuckyBanner,
    Logo: LuckyLogo,
  }

]

function Brands() {
  
  const [slides,setSlides] = useState([]);
  const [contentPage, setContentPage] = useContext(AppContext);
  
  useEffect(() => {
    setSlides(slidesArray);
  }, []);

  return (

    <section className="w-full flex flex-col py-20">

      <h2 className="text-primary text-[32px] font-bold leading-[38.4px] tracking-[0.145em] uppercase text-center mb-10">
        {contentPage?.texts?.[contentPage?.language]?.collections_gallery_heading}
      </h2>

      <div>
        <Swiper 
          loop={true}
          centeredSlides={false}
          speed={300}
          spaceBetween={20}
          className = "w-full flex relative"
          navigation={{
            prevEl: '.left-arrow',
            nextEl: '.right-arrow ',
          }}
          modules={[Navigation]}
          breakpoints = {{

            320: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 20
            }

          }}
        >

          {
            slides.map((slide,i) => {

              const {banner,Logo} = slide;

              return(

                <SwiperSlide className="relative" key={i}>

                  <div className="w-full">
                    <Image
                      src={banner}
                      alt="Banner"
                      layout="responsive"
                    />
                  </div>

                  <div className="absolute bottom-8  w-full">
                    <div className="relative flex justify-center">
                      <Logo/>
                    </div>
                  </div>

                </SwiperSlide>

              )
            })
          }
        
          <div className="absolute z-20 top-0 left-0 h-full w-20 bg-brands-left"></div>
          <div className="absolute z-20 top-0 right-0 h-full w-20 bg-brands-right rotate-180"></div>

          <div className="absolute cursor-pointer left-arrow z-30 top-[calc(50%-15px)] left-7 ">          
            <LeftArrow/>
          </div>

          <div className="absolute cursor-pointer right-arrow z-30 top-[calc(50%-15px)] right-7 ">          
            <RightArrow/>
          </div>

        </Swiper>
      </div>

    </section>

  )
}

export default Brands