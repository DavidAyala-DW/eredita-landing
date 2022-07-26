import Image from 'next/image'
import FirstImage from "../public/Rectangle 4290.png";

import Product1 from "../public/1.png";
import Product2 from "../public/2.png";
import Product3 from "../public/3.png";
import Product4 from "../public/4.png";
import Product5 from "../public/5.png";

import Location from "../public/location1.png";

import Less from "../public/less.svg";
import Plus from "../public/plus.svg";

import Quality from "../public/Acetate.svg";
import Aesthetics from "../public/BoldAesthetics.svg";
import Film from "../public/Film.svg";

function HeroWithSlider() {

  const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

  return (

    <section className="w-full xl:max-w-[85%] xl:mx-auto flex flex-col pt-20">

      <div className="w-full grid grid-cols-[57.6%_42.4%] gap-x-10">

        <div className="relative h-auto w-full">

          <Image
            src={FirstImage}
            alt="Alt text"
            layout="responsive"
            quality={100}
          />

        </div>

        <div className="flex flex-col h-auto">

          <div className="pl-[26px] w-full">

            <h2 className="text-black tracking-[0.145em] leading-[22px] text-lg uppercase font-bold mb-2">
              police lifestyle
            </h2>

            <h1 className="max-w-[354px] italic w-full  tracking-[-0.1em] leading-[56px] text-[60px] font-normal font-starduster text-primary uppercase mb-2">
              origins bullet 1
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
                2 reviews
              </h3>

            </div>

            <div className="flex flex-col w-full mb-2">
                <p>Colour</p>
                <p>Shiny Black</p>
            </div>

            <div className="flex space-x-1 justify-between items-center mb-8">

              <div className="w-max pb-4 relative after:absolute after:w-full after:h-[1.5px] after:bg-[#B6B6B6] after:bottom-0 after:left-0">
                <Image src={Product1} alt={"alt"} quality={100} layout="intrinsic" />
              </div>   

              <div className="w-max pb-4 relative after:absolute after:w-full after:h-[1.5px] after:bg-[#B6B6B6] after:bottom-0 after:left-0">
                <Image src={Product2} alt={"alt"} quality={100} layout="intrinsic" />
              </div>  

              <div className="w-max pb-4 relative after:absolute after:w-full after:h-[1.5px] after:bg-[#B6B6B6] after:bottom-0 after:left-0">
                <Image src={Product3} alt={"alt"} quality={100} layout="intrinsic" />
              </div> 

              <div className="w-max pb-4 relative after:absolute after:w-full after:h-[1.5px] after:bg-[#B6B6B6] after:bottom-0 after:left-0">
                <Image src={Product4} alt={"alt"} quality={100} layout="intrinsic" />
              </div>  

              <div className="w-max pb-4 relative after:absolute after:w-full after:h-[1.5px] after:bg-[#B6B6B6] after:bottom-0 after:left-0">
                <Image src={Product5} alt={"alt"} quality={100} layout="intrinsic" />
              </div>   

            </div>

            <div className="w-full py-[15.5px] px-[74px] border border-[#0A0B0E] mb-4">

              <div className="flex items-center space-x-2 max-w-max mx-auto">

                <p className="font-semibold text-sm leading-5 tracking-[0.045em] uppercase text-center text-[#0A0B0E]">FIND YOUR PERFECT FIT IN-STORE</p>

                <div className="flex flex-col justify-center items-center">
                  <Image src={Location} alt="" layout="intrinsic" />
                </div>
                
              </div>

            </div>

            <div className="w-full py-[15.5px] px-[74px] border border-secondary bg-secondary mb-[30px]">
              <p className="font-semibold text-sm leading-5 tracking-[0.045em] uppercase text-center text-[#0A0B0E]">BUY NOW</p>
            </div>

            <div className="flex items-center justify-between pb-6 border-[#F5F5F5] border-b">

              <h3 className="text-[#111827] tracking-[0.045em] uppercase text-[15px] leading-5 font-black">Description</h3>

              <div className="max-w-max h-3 w-3 flex flex-col justify-center items-center cursor-pointer">

                <div className="plus">
                  <Plus/>
                </div>

                <div className="plus hidden">
                  <Less/>
                </div>

              </div>

            </div>

            <div className="mt-4 flex flex-col space-y-[25px]">

              <div className="flex items-center space-x-[18px]">
                <div className="max-w-max">
                  <Quality/>
                </div>
                <p className="tracking-[0.2px] text-[#0A0B0E] text-base font-base leading-[150%]">
                  High Quality Acetate
                </p>
              </div>

              <div className="flex items-center space-x-[18px]">
                <div className="max-w-max">
                  <Aesthetics/>
                </div>
                <p className="tracking-[0.2px] text-[#0A0B0E] text-base font-base leading-[150%]">
                  Bold Aesthetics
                </p>
              </div>

              <div className="flex items-center space-x-[18px]">
                <div className="max-w-max">
                  <Film/>
                </div>
                <p className="tracking-[0.2px] text-[#0A0B0E] text-base font-base leading-[150%]">
                  Worn in “Bullet Train”
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