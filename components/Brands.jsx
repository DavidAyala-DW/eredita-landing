import Image from "next/image";
import {AppContext} from "../helpers/Context";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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
    handle: "handle1",
    banner: YaleaBanner,
    Logo: YaleaLogo,
    maxW: 174
  },
  {
    handle: "handle2",
    banner: PoliceBanner,
    Logo: PoliceLogo,
    maxW: 170
  },
  {
    handle: "handle3",
    banner: JohnBanner,
    Logo: JohnLogo,
    maxW: 236
  },
  {
    handle: "handle4",
    banner: LuckyBanner,
    Logo: LuckyLogo,
    maxW: 202
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

              const {banner,Logo, maxW, handle} = slide;

              return(

                <SwiperSlide className="relative" key={i}>

                  <div className="w-full">
                    <Image
                      src={banner}
                      alt="Banner"
                      layout="responsive"
                      quality={100}
                    />
                  </div>

                  <div className="absolute bottom-0 h-[100px] flex-col justify-center  w-full min-h-[25px] flex">

                    <style jsx>{`

                      .logo-${handle} {
                        max-width: 80%;
                      }
                      @media(min-width: 768px){
                        .logo-${handle} {
                          max-width: 65%;
                        } 
                      }

                      @media(min-width: 1080px){
                        .logo-${handle} {
                          max-width: ${maxW}px;
                        } 
                      }

                    `}</style>

                    <div className={`relative logo-${handle} w-full mx-auto flex justify-center`}>
                      <Logo className="h-auto w-[inherit]"/>
                    </div>
                  </div>

                </SwiperSlide>

              )
            })
          }
        
          <div className="absolute z-20 top-0 left-0 h-full w-20 bg-brands-left"></div>
          <div className="absolute z-20 top-0 right-0 h-full w-20 bg-brands-right rotate-180"></div>

          <div className="absolute hidden md:block cursor-pointer left-arrow z-30 top-[calc(50%-15px)] left-7 ">          
            <LeftArrow/>
          </div>

          <div className="absolute hidden md:block cursor-pointer right-arrow z-30 top-[calc(50%-15px)] right-7 ">          
            <RightArrow/>
          </div>

        </Swiper>
      </div>
      {/* <div className="flex bg-red-500 w-[40vw]">
      <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 169 22" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M6.76606 6.42231H16.163C16.9306 6.42231 17.5124 6.59304 17.9083 6.93448C18.3769 7.33283 18.6193 7.99133 18.6193 8.90998C18.6193 9.82863 18.385 10.4871 17.9083 10.8855C17.5124 11.2025 16.9306 11.3651 16.163 11.3651H6.76606V6.42231ZM0.261719 21.7142H6.76606V16.6982H16.163C19.6293 16.6982 21.924 16.2754 23.0471 15.4137C24.4046 14.3975 25.0833 12.2269 25.0833 8.89372C25.0833 5.53618 24.3965 3.35744 23.0148 2.34124C21.9159 1.50389 19.6293 1.08927 16.163 1.08927H0.261719V21.7142ZM40.7664 6.78002C41.3886 6.34915 43.5702 6.13778 47.3112 6.13778C51.036 6.13778 53.2095 6.34915 53.8317 6.78002C54.4538 7.21089 54.7609 8.75552 54.7609 11.4139C54.7609 14.056 54.4538 15.6007 53.8317 16.0315C53.2095 16.4705 51.0279 16.69 47.2869 16.69C43.5621 16.69 41.3886 16.4705 40.7664 16.0315C40.1443 15.5925 39.8372 14.056 39.8372 11.4139C39.8372 8.75552 40.1443 7.21089 40.7664 6.78002ZM59.3745 2.39002C58.0332 1.34129 54.0013 0.812866 47.2869 0.812866C40.5483 0.812866 36.5083 1.34942 35.167 2.42253C33.947 3.41435 33.3329 6.42232 33.3329 11.4383C33.3329 15.0885 33.5268 17.4867 33.9227 18.6412C34.4318 20.1045 35.6599 21.0719 37.591 21.5272C39.1262 21.8442 42.3582 21.9987 47.2869 21.9987C54.0256 21.9987 58.0656 21.4784 59.4068 20.4541C60.6511 19.4622 61.2652 16.4543 61.2652 11.4383C61.2652 6.41419 60.635 3.39809 59.3745 2.39002ZM69.4502 1.12992H75.9545V16.3892H90.7004V21.7142H69.4502V1.12992ZM97.6976 21.7142V1.16244H104.202V21.7142H97.6976ZM124.281 0.812866C130.308 0.812866 134.025 1.30877 135.423 2.29246C136.643 3.12168 137.257 5.36546 137.257 9.03193H130.728C130.728 7.82061 130.405 7.05643 129.751 6.73937C128.943 6.34102 127.117 6.14591 124.281 6.14591C121.105 6.14591 119.247 6.38167 118.697 6.86132C118.148 7.34096 117.873 8.86121 117.873 11.422C117.873 13.9666 118.148 15.4869 118.697 15.9665C119.247 16.4543 121.113 16.6982 124.281 16.6982C127.157 16.6982 128.959 16.5275 129.67 16.1941C130.381 15.8608 130.745 15.056 130.745 13.8122H137.249C137.249 17.4867 136.659 19.7387 135.479 20.5679C134.082 21.519 130.349 21.9987 124.281 21.9987C118.213 21.9987 114.544 21.4703 113.268 20.4053C111.999 19.3484 111.361 16.3486 111.361 11.4058C111.361 6.50361 111.967 3.53629 113.195 2.47944C114.52 1.36568 118.213 0.812866 124.281 0.812866ZM145.434 21.7142V1.08927H168.187V6.07274H151.93V8.92624H167.444V13.9097H151.93V16.7307H168.187V21.7142H145.434Z" fill="white"/>
      </svg>
      </div> */}
      
    </section>

  )
}

export default Brands