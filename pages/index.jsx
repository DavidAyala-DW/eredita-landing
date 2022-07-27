import { useContext, useEffect } from 'react'
import Brands from '../components/Brands'
import FeaturedProduct from '../components/FeaturedProduct'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HeroWithSlider from '../components/HeroWithSlider'
import {AppContext} from "../helpers/Context";


export default function Home({texts}) {

  const [contentPage, setContentPage] = useContext(AppContext);

  useEffect(() => {    

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

export const getServerSideProps = async () => {

  const dev = process.env.NODE_ENV !== 'production';
  let textObject;

  try {

    const server = dev ? 'http://localhost:3000' : window.origin;
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
      texts: textObject
    }
  }
}