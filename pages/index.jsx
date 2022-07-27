import { useContext, useEffect } from 'react'
import Brands from '../components/Brands'
import FeaturedProduct from '../components/FeaturedProduct'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HeroWithSlider from '../components/HeroWithSlider'
import {AppContext} from "../helpers/Context";


export default function Home({texts,server}) {

  const [contentPage, setContentPage] = useContext(AppContext);

  useEffect(() => {    
    console.log(server);
    const actualSettings = {texts}
    if(typeof window !== "undefined"){

      if(navigator.language.includes("fr")){
        actualSettings.language = "french"
      }else{
        actualSettings.language = "english"
      }
      
    }

    setContentPage(actualSettings);
    
    
  }, [texts,setContentPage]);

  useEffect(() => {
    console.log(contentPage);
  }, [contentPage]);

  return (

    <main>
      <Header/>
      <HeroWithSlider/>
      <FeaturedProduct/>
      <Brands/>
      <Footer/>
    </main>

  )
}

export const getServerSideProps = async (ctx) => {

  

  const dev = process.env.NODE_ENV !== 'production';
  let textObject;
  let server;

  try {  
    server = dev ? 'http://localhost:3000' : ctx.req.headers.referer;
    const req = await fetch(server + "/settings.json");
    const res = await req.json();
    const {texts} = res;
    if(!texts){
      textObject = {};  
    }else{
      textObject = texts;
    }    

  } catch (error) {
    textObject = {};
  }
  return {
    props:{
      texts: textObject,
      server
    }
  }
}