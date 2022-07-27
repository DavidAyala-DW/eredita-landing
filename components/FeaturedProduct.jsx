import Image from "next/image";
import FeaturedImage from "../public/featuredImage.png";
import {AppContext} from "../helpers/Context";
import { useContext, useEffect } from 'react';

function FeaturedProduct() {

  const [contentPage, setContentPage] = useContext(AppContext);

  return (

    <section className="w-full bg-primary flex flex-col px-5 py-20 md:p-[106px]">

      <div className="w-full mx-auto border border-[#F7F7FB] pt-10 px-5 md:pl-[55px] md:pr-[44px] flex flex-col md:flex-row md:items-center ">

        <div className="flex flex-col items-center mr-[45px] w-full max-w-max order-2 md:order-1">

          <h2 className="text-secondary font-starduster tracking-[-0.1em] uppercase text-center text-[60px] leading-[56px] italic mb-6">
            SPLE37
          </h2>

          <p className="text-white text-center tracking-[0.015em] leading-[19px] max-w-[96.4%] w-full text-base font-normal mb-6">
            {contentPage?.texts?.[contentPage?.language]?.spl37_description}
          </p>

          <a href="" className="block bg-secondary text-primary py-[13.5px] px-4 uppercase tracking-[0.145em] text-center font-bold mb-[-24px]">
            {contentPage?.texts?.[contentPage?.language]?.spl37_preOrder_text}
          </a>

        </div>

        <div className="w-full grid order-1 md:order-2 mb-10 md:mb-0">

          <Image
            src={FeaturedImage}
            alt="Alt"
            layout="intrinsic"
            className="object-cover"
          />

        </div>


      </div>

    </section>

  )

}

export default FeaturedProduct