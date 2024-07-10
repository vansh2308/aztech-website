
import landingImg from "./../assets/landing-img.png"
import donutWm from "./../assets/donut-wm.png"
import heading from "./../assets/heading.png"
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";


export default function Landing(){
  return(
    <div className="w-screen h-screen relative max-[850px]:h-[100svh]">
      <img src={donutWm} className="absolute top-0 left-0 w-[18%] max-[850px]:w-1/2"/>
      <img src={landingImg} className="w-screen absolute bottom-0 z-40 landing-img " />

      <p className="absolute top-[13%]  w-screen flex flex-col items-center gap-[4vh] max-[850px]:top-[45%] max-[850px]:-translate-y-1/2">
        <h4 className="text-3xl tracking-widest text-purple-500 text-center max-[850px]:text-sm"> Crafting Intriguing Techscapes </h4>
        <img src={heading} className="w-[60%] max-[850px]:w-[80%]" />
      </p>

      <div className="flex flex-col text-white text-[40px] gap-7 absolute left-7 top-1/3 z-60 max-[850px]:flex-row max-[850px]:text-3xl max-[850px]:top-16 max-[850px]:left-1/2 max-[850px]:-translate-x-1/2 ">
        <a href=""><SiGmail /></a>
        <a href=""><FaLinkedin /></a>
        <a href=""><AiFillInstagram/></a>
      </div>
    </div>
  )
}