
import logo from "../assets/logo.png"
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import qr from "./../assets/qr.png"

export default function Footer() {
  return (
    <>

    <section className="w-screen h-[20rem] bg-purple-300 p-12 px-24 flex items-start gap-20 text-white relative">
      <img src={logo} className="w-[100px] aspect-square  " />
      <div className=" flex-grow h-full flex items-start justify-between">
        <div className="h-full flex flex-col gap-8">
          <div className="flex gap-6 text-[2rem]">
            <a href="/"><SiGmail /></a>
            <a href="/"><FaLinkedin /></a>
            <a href="/"><AiFillInstagram /></a>
          </div>

          <div className="flex flex-col gap-2 text-sm font-medium">
            <p className="">Call at +91 9571924777 or +91 9636101175</p>
            <p className="">Mail us at agarwal.25@iitj.ac.in</p>
            <p className="">Follow us on instagram @aztech.web</p>
            
          </div>
        </div>

        <img src={qr} className="h-full aspect-square" />
      </div>



    </section>
    <div className="w-full bg-purple-500 h-10 absolute" />
    </>
  )
}