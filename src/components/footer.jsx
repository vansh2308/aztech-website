
import logo from "../assets/logo.png"
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import qr from "./../assets/qr.png"

export default function Footer() {
  return (
    <>
      <section className="w-screen h-[20rem] bg-purple-300 p-12 px-24 flex items-start gap-20 text-white relative max-[850px]:p-5 max-[850px]:flex-col max-[850px]:items-center max-[850px]:h-fit max-[850px]:gap-5">
        <img src={logo} className="w-[100px] aspect-square max-[850px]:w-[50px]" />
        <div className=" flex-grow h-full flex items-start justify-between max-[850px]:flex-col max-[850px]:items-center max-[850px]:text-center">
          <div className="h-full flex flex-col gap-8 max-[850px]:items-center">
            <div className="flex gap-6 text-[2rem] max-[850px]:text-[1.5rem]">
              <a href="/"><SiGmail /></a>
              <a href="/"><FaLinkedin /></a>
              <a href="/"><AiFillInstagram /></a>
            </div>

            <div className="flex flex-col gap-2 text-sm font-medium max-[850px]:text-xs">
              <p className="">Call at +91 9571924777 or +91 9636101175</p>
              <p className="">Mail us at agarwal.25@iitj.ac.in</p>
              <p className="">Follow us on instagram @aztech.web</p>

            </div>
          </div>

          <img src={qr} className="h-full aspect-square max-[850px]:mt-5 max-[850px]:w-1/3" />
        </div>



      </section>
      <div className="w-full bg-purple-500 h-10 absolute" />
    </>
  )
}