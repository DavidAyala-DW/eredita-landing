import Image from 'next/image'
import {AppContext} from "../helpers/Context";
import FirstImage from "../public/hero_banner.png";

import Location from "../public/location1.png";

import Less from "../public/less.svg";
import Plus from "../public/plus.svg";

import Quality from "../public/Acetate.svg";
import Aesthetics from "../public/smart-glasses.svg";
import Film from "../public/Film.svg";

import Glass from "../public/VPLE37.png";
import Badge from "../public/badge_featured.png";
import HeroArrow from "../public/arrow_down.svg";
import {galleries} from "../helpers/Slides";
import {allVariants} from "../helpers/Variants";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";


import { Navigation, Pagination} from 'swiper';


import { useCallback, useContext, useEffect, useState } from 'react';

import LeftArrow from "../public/right_arrow_variant.svg";
import RightArrow from "../public/right_arrow_variant.svg";

function HeroWithSlider() {
  
  const [contentPage, setContentPage] = useContext(AppContext);
  const [variants,setVariants] = useState([]);
  const [activeGallery, setActiveGallery] = useState([]);
  const [activeVariant, setActiveVariant] = useState(null);
  const [swiperGallery, setSwiperGallery] = useState(null);
  const [swiperGallery2, setSwiperGallery2] = useState(null);

  const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

  function handleScrollDown(){
    document.querySelector('.product-content').scrollIntoView({ 
      behavior: 'smooth' 
    });
  }

  function handleScrollLocator(){
    document.querySelector('.locator').scrollIntoView({ 
      behavior: 'smooth' 
    });
  }

  function handleOpenDescription(){

    const plus = document.querySelector(".plus");
    plus ? plus.classList.add("hidden") : null;

    const less = document.querySelector(".less");
    less ? less.classList.remove("hidden") : null;

    const description_content = document.querySelector(".description_content");
    description_content.classList.remove("absolute","invisible");

    const description_container = document.querySelector(".description-container");

    setTimeout(() => {
      description_container.classList.add("!max-h-[300px]")
    }, 10);

  } 

  function handleCloseDescription(){

    const plus = document.querySelector(".plus");
    plus ? plus.classList.remove("hidden") : null;

    const less = document.querySelector(".less");
    less ? less.classList.add("hidden") : null;

    const description_content = document.querySelector(".description_content");

    const description_container = document.querySelector(".description-container");
    description_container.classList.remove("!max-h-[300px]")

    setTimeout(() => {
      description_content.classList.add("absolute","invisible");
    }, 150);

  }
  
  const slideTo = useCallback((index) => {

    if(activeGallery.length){
      swiperGallery.slideTo(index)
      swiperGallery2.slideTo(index);
    }    

  }, [swiperGallery,activeGallery,swiperGallery2])

  const handleChangeVariant = useCallback((handle) => {

    const array_of_slides = galleries.find(slide => slide.handle == handle);
    const {slides} = array_of_slides;
    setActiveVariant(allVariants.find(variant => variant.handle == handle));
    
    if(slides?.length){
      setActiveGallery(slides);
      slideTo(0);    
    }   

  }, [slideTo])
    
  useEffect(() => {

    if(activeGallery.length == 0){
      handleChangeVariant("slide1");
    }
    
  }, [handleChangeVariant,activeGallery]);

  useEffect(() => {
    setVariants(allVariants);
  }, []);

  return (

    <section className="w-full md2:px-5 xl:px-0 xl:max-w-[85%] xl:mx-auto flex flex-col md:pt-20 pb-16">

      <div className="relative h-[512px] w-full grid md2:hidden">

        <Image
          src={FirstImage}
          alt="Alt text"
          layout="responsive"
          quality={100}
          priority={true}
          className="object-cover object-right"
        />

        <div className="absolute w-[90.1%] max-w-[386px] bottom-[30.85%] left-[4.9%] xs:left-[calc(50%-193px)]">
          <Image
            src={Glass}
            alt="Alt"
            layout="intrinsic"
            quality={100}
            priority={true}
            className="z-[3]"
          />
        </div>

        <div className="absolute w-[31.54%] max-w-[136px] left-[19.6%] xs:left-[calc(51%-68px)] bottom-[58.5%] z-[4]">
          <Image
            src={Badge}
            alt="Alt"
            layout="intrinsic"
            quality={100}
            priority={true}
          />
        </div>

        <div className="absolute w-full bottom-[22px] inset-x-0 flex flex-col">

          <h2 className="mb-[15.8px] max-w-[222px] mx-auto text-primary text-base font-bold leading-5 text-center tracking-[0.145em] uppercase">
            {contentPage?.texts?.[contentPage?.language]?.shop_movie_text}
          </h2>

          <div onClick={() => handleScrollDown()}  className="flex animate-arrow  cursor-pointer flex-col justify-center items-center h-[70px] w-[70px]  hover:animate-hoverArrow transition delay-100 mx-auto rounded-full border-2 border-secondary border-dashed">

            <div className="w-[60%] mx-auto pointer-events-none">
              <HeroArrow className="mx-auto"/>
            </div>

          </div>  

        </div>

      </div>

      <div className="w-full flex flex-col px-5 md2:grid md2:grid-cols-[57.8%_39.3%] gap-x-10">

        <div className="relative h-auto w-full hidden md2:grid">

          {

            activeVariant?.background_image ? (

              <Image
                src={activeVariant?.background_image}
                alt="Background Image"
                layout="responsive"
                quality={100}
                priority={true}
              />

            ) :

            (
              <div className="h-full w-full bg-white"></div>
            )

          }

          <div className="absolute swiperGallery max-w-[87%] bottom-[16.6%] left-[6.5%]">

            <Swiper 
              modules={[Pagination]}
              speed={300}
              spaceBetween={20}
              className="w-full relative !z-[3] !grid grid-flow-col h-auto"
              slides={activeGallery.length}
              onSwiper={setSwiperGallery2}
              slidesPerView={1}
              pagination={{clickable:true}}
            >
              {            

                activeGallery.map((slide,i) => {

                  return (

                    <SwiperSlide className="w-full min-h-[303px] z-[3] flex justify-center h-auto" key={i}>
                      <Image
                        src={slide}
                        alt="Alt"
                        layout="intrinsic"
                        quality={100}
                        priority={true}
                        className="z-[3] mx-auto h-full object-contain"
                      />
                    </SwiperSlide>

                  )

                }

              )}
            </Swiper>


          </div>

          <div className="absolute max-w-[24.2%] left-[24%] md2:left-[unset] md2:right-[18%] bottom-[50%] md2:bottom-[39%] z-[4] md2:z-[2]">
            <Image
              src={Badge}
              alt="Alt"
              layout="intrinsic"
              quality={100}
              priority={true}
            />
          </div>

        </div>

        <div className="flex flex-col items-center md2:items-start h-auto pt-10 md2:pt-0 product-content">

          <div className="px-5 md2:pr-[0] md2:pl-[26px] w-full flex flex-col items-center md2:items-start">

            <h2 className="text-black tracking-[0.145em] leading-[22px] text-lg uppercase font-bold mb-2">
              {contentPage?.texts?.[contentPage?.language]?.collection_name}
            </h2>

            <h1 className="max-w-[354px] text-center md2:text-left italic w-full tracking-[-0.1em] 3xs:leading-[56px] leading-[36px] text-[50px] 3xs:text-[60px] font-normal font-starduster text-primary uppercase mb-2">
              {contentPage?.texts?.[contentPage?.language]?.product_name}
            </h1>

            <div className="flex items-center space-x-4 mb-8">

              <div className="flex items-center">
                {range(0,5,1).map((star,i) => {
                  return (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                      <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#FFCB05"/>
                    </svg>      
                  )
                })}
              </div>

              <h3 className="text-[#0A0B0E] tracking-[0.2px] leading-7 text-sm font-normal">
                2 {contentPage?.texts?.[contentPage?.language]?.reviews_title}
              </h3>

            </div>

            <div className="w-full swiperVariants relative block md2:hidden mb-5">

              <Swiper 

                modules={[Pagination]}
                speed={300}
                spaceBetween={20}
                className="w-full flex relative cursor-pointer !pb-2.5"
                slides={activeGallery.length}
                onSwiper={setSwiperGallery}
                slidesPerView={1}
                pagination={true}
              > 

                {            

                  activeGallery.map((slide,i) => {

                    return (

                      <SwiperSlide className="cursor-pointer flex justify-center" key={i}>
                        <Image
                          src={slide}
                          alt="slide"
                        />
                      </SwiperSlide>

                    )

                  }

                )}

              </Swiper>

            </div>

            <div className="flex flex-col w-full mb-2">
              <p>{contentPage?.texts?.[contentPage?.language]?.colours_title}</p>
              <p>{activeVariant?.color}</p>
            </div>

            <div className="flex mb-8 w-full relative swiper-products">

              <div className="absolute md:hidden rotate-180 cursor-pointer left-arrow-variant z-30 top-[-50px] right-[50px]">          
                <LeftArrow/>
              </div>

              <div className="absolute md:hidden cursor-pointer right-arrow-variant z-30 top-[-50px] right-0">          
                <RightArrow/>
              </div>

              <Swiper 
                speed={300}
                spaceBetween={20}
                modules={[Navigation]}
                navigation={{
                  prevEl: '.left-arrow-variant',
                  nextEl: '.right-arrow-variant',
                }}
                className="w-full flex relative cursor-pointer"
                breakpoints = {{

                  320: {
                    slidesPerView: 2.8,
                    spaceBetween: 20
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 20
                  }
      
                }}
              >

                {
                  variants.map((variant,i) => {

                    const {handle,image} = variant;
                    return(

                      <SwiperSlide className="w-full" key={i}>

                        <div
                          data-handle={handle}
                          onClick={() => handleChangeVariant(handle)}
                          className={`pb-4 variant w-full relative after:absolute after:w-full after:h-[1.5px] ${activeVariant.handle == handle ? 'after:bg-black' : 'after:bg-[#B6B6B6]' } after:bottom-0 after:left-0`}
                        >
                          <Image src={image} alt={"alt"} quality={100} layout="responsive" />
                        </div>

                      </SwiperSlide>

                    )

                  })
                }

              </Swiper>

            </div>

            <div className="w-full py-[15.5px] px-5 border border-[#0A0B0E] mb-4 cursor-pointer">

              <div className="flex items-center space-x-2 max-w-max mx-auto">

                <p onClick={handleScrollLocator} className="font-semibold text-sm leading-5 cursor-pointer tracking-[0.045em] uppercase text-center text-[#0A0B0E]">
                  {contentPage?.texts?.[contentPage?.language]?.store_locator_button_text}
                </p>

                <div className="flex flex-col justify-center items-center">
                  <Image src={Location} alt="" layout="intrinsic" />
                </div>
                
              </div>

            </div>

            <div className="w-full py-[15.5px] px-[74px] border border-secondary bg-secondary mb-[30px] cursor-pointer">
              <p className="font-semibold text-sm leading-5 tracking-[0.045em] uppercase text-center text-[#0A0B0E]">
              {contentPage?.texts?.[contentPage?.language]?.hero_cta_text}
              </p>
            </div>

            <div className="flex max-h-[40px] description-container w-full flex-col space-y-5 pb-6 border-[#F5F5F5] border-b transition-[max-height] ease-[ease-in-out] duration-150 relative">

              <div className="flex items-center justify-between w-full">

                <h3 className="text-[#111827] tracking-[0.045em] uppercase text-[15px] leading-5 font-black">
                  {contentPage?.texts?.[contentPage?.language]?.description_heading}
                </h3>

                <div className="max-w-max h-4 w-4 flex flex-col justify-center items-center cursor-pointer">

                  <div onClick={handleOpenDescription} className="plus h-4 w-4 flex flex-col justify-center items-center">
                    <Plus/>
                  </div>

                  <div onClick={handleCloseDescription} className="less hidden h-4 w-4 flex flex-col justify-center items-center">
                    <Less/>
                  </div>

                </div>

              </div>

              <div className="absolute description_content max-w-max invisible w-full">
                {contentPage?.texts?.[contentPage?.language]?.description_content}
              </div>

            </div>

            <div className="mt-4 flex w-full flex-col space-y-[25px]">

              <div className="flex items-center space-x-[18px]">
                <div className="max-w-max">
                  <Quality/>
                </div>
                <p className="tracking-[0.2px] text-[#0A0B0E] text-base font-base leading-[150%]">
                  {contentPage?.texts?.[contentPage?.language]?.acetate_icon_text}
                </p>
              </div>

              <div className="flex items-center space-x-[18px]">
                <div className="max-w-max">
                  <Aesthetics/>
                </div>
                <p className="tracking-[0.2px] text-[#0A0B0E] text-base font-base leading-[150%]">
                  {contentPage?.texts?.[contentPage?.language]?.aesthetics_icon_text}
                </p>
              </div>

              <div className="flex items-center space-x-[18px]">
                <div className="max-w-max">
                  <Film/>
                </div>
                <p className="tracking-[0.2px] text-[#0A0B0E] text-base font-base leading-[150%]">
                  {contentPage?.texts?.[contentPage?.language]?.film_icon_text}
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  )

}

export default HeroWithSlider