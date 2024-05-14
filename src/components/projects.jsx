
import project1 from "./../assets/Instagram post - 1.png"
import { IoLink } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

export default function ProjectsSection(){
  return(
    <section className="w-full h-fit flex flex-col items-cente py-20 px-20 bg-[#E7EBF1] text-purple-300 gap-8">
      <h1 className="w-full text-[2.5rem] font-medium text-center mb-4"> PROJECTS </h1>
      <div className="h-fit w-full flex  overflow-x-scroll gap-7">
        <ProjectTile />
        <ProjectTile />
        <ProjectTile />
        <ProjectTile />
        <ProjectTile />
      </div>
      


    </section>
  )
}

function ProjectTile(){
  return(
    <div className="w-[25vw] h-fit bg-purple-500 project-tile flex-shrink-0 rounded-lg overflow-hidden">
      <img className="w-[100%] aspect-square" src={project1} />
      <div className="w-[100%] h-[12rem] bg-purple-300 p-5 text-white flex flex-col overflow-hidden gap-3">
        <span className="text-nowrap font-semibold text-md">EasyBank Website</span>
        <p className="text-sm font-thin h-[50%] overflow-hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
        <div className="flex items-center h-fit gap-4 text-[1.7rem]">
          <a href="#"><FaGithub /></a>
          <a href="#"><IoLink /></a>
        </div>


      </div>


    </div>
      
  )
}