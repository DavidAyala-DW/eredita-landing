import React from 'react'
import {AppContext} from "../helpers/Context";
import { useContext, useEffect } from 'react';
import LogoSpeers from "../public/speers.svg";
import Bar from "../public/_.svg";
import Eredita from "../public/eredita.svg";
import Cineplex from "../public/cineplex.svg"
import LogoFooter from "../public/brands_footer.svg";

function Footer() {
  
  const [contentPage, setContentPage] = useContext(AppContext);

  return (
    
    <footer className="w-full bg-primary pt-[66px] pl-5 3xl:pl-[46px] md:pt-20 md:pb-8 md:pl-24 md:pr-16 flex flex-col">

      <div className="w-full flex flex-col space-y-12 md:space-y-0 md:flex-row md:space-x-20 pb-20">

        <div className="flex flex-col">

          <h2 className="mb-8 font-bold text-[20px] leading-6 text-white uppercase">
            {contentPage?.texts?.[contentPage?.language]?.footer_support}
          </h2>

          <div className="flex flex-col space-y-[15px] font-normal text-lg leading-9 text-white mb-[50px]">
            <a className="block" href="">sales@ereditaeyewear.com</a>
            <a className="block" href="">order@ereditaeyewear.com</a>
            <a className="block" href="">1-855-793-EYES</a>
          </div>

          <div className="flex items-center space-x-[30px]">

            <a href="" className="block h-[30px] w-[30px] opacity-50">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M0 15.0838C0 22.5413 5.41625 28.7425 12.5 30V19.1663H8.75V15H12.5V11.6663C12.5 7.91625 14.9163 5.83375 18.3337 5.83375C19.4163 5.83375 20.5837 6 21.6663 6.16625V10H19.75C17.9163 10 17.5 10.9163 17.5 12.0837V15H21.5L20.8337 19.1663H17.5V30C24.5837 28.7425 30 22.5425 30 15.0838C30 6.7875 23.25 0 15 0C6.75 0 0 6.7875 0 15.0838Z" fill="white"/>
              </svg>
            </a>

            <a href="" className="block h-[30px] w-[30px] opacity-50">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path d="M15 0C6.71562 0 0 6.71562 0 15C0 23.2844 6.71562 30 15 30C23.2844 30 30 23.2844 30 15C30 6.71562 23.2844 0 15 0ZM11.3281 21.2172H8.29062V11.4422H11.3281V21.2172ZM9.79062 10.2422C8.83125 10.2422 8.21094 9.5625 8.21094 8.72187C8.21094 7.86406 8.85 7.20469 9.82969 7.20469C10.8094 7.20469 11.4094 7.86406 11.4281 8.72187C11.4281 9.5625 10.8094 10.2422 9.79062 10.2422ZM22.4219 21.2172H19.3844V15.8C19.3844 14.5391 18.9437 13.6828 17.8453 13.6828C17.0063 13.6828 16.5078 14.2625 16.2875 14.8203C16.2062 15.0188 16.1859 15.3 16.1859 15.5797V21.2156H13.1469V14.5594C13.1469 13.3391 13.1078 12.3187 13.0672 11.4406H15.7062L15.8453 12.7984H15.9062C16.3062 12.1609 17.2859 11.2203 18.925 11.2203C20.9234 11.2203 22.4219 12.5594 22.4219 15.4375V21.2172Z" fill="white"/>
              </svg>
            </a>

            <a href="" className="block h-[30px] w-[30px] opacity-50">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path d="M15.004 9.99787C17.7583 9.99787 20.0061 12.2456 20.0061 15C20.0061 17.7544 17.7583 20.0021 15.004 20.0021C12.2497 20.0021 10.002 17.7544 10.002 15C10.002 12.2456 12.2497 9.99787 15.004 9.99787ZM0.00167465 15C0.00167465 12.9286 -0.0170898 10.876 0.0992374 8.80832C0.215563 6.40669 0.763424 4.27525 2.51958 2.51907C4.27948 0.759128 6.40713 0.215011 8.80871 0.098682C10.8801 -0.0176466 12.9327 0.00111617 15.0003 0.00111617C17.0716 0.00111617 19.1242 -0.0176466 21.1918 0.098682C23.5934 0.215011 25.7248 0.762881 27.481 2.51907C29.2409 4.27901 29.785 6.40669 29.9013 8.80832C30.0176 10.8797 29.9989 12.9324 29.9989 15C29.9989 17.0676 30.0176 19.124 29.9013 21.1917C29.785 23.5933 29.2371 25.7247 27.481 27.4809C25.7211 29.2409 23.5934 29.785 21.1918 29.9013C19.1205 30.0176 17.0679 29.9989 15.0003 29.9989C12.9289 29.9989 10.8763 30.0176 8.80871 29.9013C6.40713 29.785 4.27573 29.2371 2.51958 27.4809C0.75967 25.721 0.215563 23.5933 0.0992374 21.1917C-0.0208416 19.124 0.00167465 17.0714 0.00167465 15ZM15.004 22.6964C19.2631 22.6964 22.7003 19.2591 22.7003 15C22.7003 10.7409 19.2631 7.30355 15.004 7.30355C10.745 7.30355 7.30773 10.7409 7.30773 15C7.30773 19.2591 10.745 22.6964 15.004 22.6964ZM6.99252 8.7858C7.98692 8.7858 8.78995 7.98276 8.78995 6.98834C8.78995 5.99392 7.98692 5.19087 6.99252 5.19087C5.99811 5.19087 5.19509 5.99392 5.19509 6.98834C5.19479 7.22447 5.24108 7.45834 5.3313 7.67655C5.42153 7.89476 5.55392 8.09303 5.72088 8.26C5.88785 8.42697 6.08611 8.55936 6.30432 8.64958C6.52253 8.73981 6.75639 8.7861 6.99252 8.7858Z" fill="white"/>
              </svg>
            </a>

          </div>

        </div>

        <div className="flex flex-col">

          <h2 className="mb-8 font-bold text-[20px] leading-6 text-white uppercase">
            {contentPage?.texts?.[contentPage?.language]?.footer_terms_conditions}
          </h2>

          <div className="flex flex-col space-y-[15px] text-white font-normal text-lg leading-9">

            <a href="" className="block">
              {contentPage?.texts?.[contentPage?.language]?.footer_terms_services}
            </a>

            <a href="" className="block">
              {contentPage?.texts?.[contentPage?.language]?.footer_refund}
            </a>

            <a href="" className="block">
              {contentPage?.texts?.[contentPage?.language]?.footer_privacy}
            </a>

            <a href="" className="block">
              {contentPage?.texts?.[contentPage?.language]?.footer_shipping}
            </a>
            
          </div>

        </div>

      </div>

      <div className="flex flex-col w-full md:flex-row items-center justify-between">

        <div className="flex w-full flex-col space-y-2.5 md:space-y-0 md:flex-row md:items-center md:space-x-5 pr-5 3xl:pr-0">

          <h3 className="text-white font-normal text-xs leading-9">
            © 2022 Eredità Eyewear Group Inc. | Website & Marketing by :
          </h3>

          <LogoSpeers/>

        </div>

        <div className="flex items-center space-x-5 w-full">
          <Eredita/>
          <Bar/>
          <Cineplex/>
        </div>

      </div>

    </footer>

  )
}

export default Footer