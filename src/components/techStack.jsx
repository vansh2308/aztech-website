
import tsImg from "./../assets/ts.png"
import { GoDotFill } from "react-icons/go";

export default function TechStack(){
  return(
    <div className="w-screen h-fit py-[13vh] flex flex-col items-center">
      <div className="flex gap-14 items-center justify-between text-2xl text-purple-500">
        <span>DESIGN</span>
        <GoDotFill />
        <span>DEVELOP</span>
        <GoDotFill />
        <span>DEPLOY</span>
      </div>
      <img src={tsImg} className="w-auto aspect-auto " />

    </div>
  )
}