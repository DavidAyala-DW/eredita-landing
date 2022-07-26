import React from 'react'
import Bar from "../public/_.svg";
import Eredita from "../public/eredita.svg";
import Cineplex from "../public/cineplex.svg";

function Header(){
  return (

    <header className="w-full flex items-center pt-[25px] pb-7 justify-between pl-[100px] pr-[160px] bg-primary">

      <div className="flex items-center space-x-5">
        <Eredita/>
        <Bar/>
        <Cineplex/>
      </div>

      
      <a className="bg-secondary block uppercase text-primary py-[13.5px] px-4 text-[17px] tracking-[0.145em] font-bold text-center">
        <p className="min-w-[192px] mx-auto">
          Shop now
        </p>        
      </a>

    </header>

  )
}

export default Header