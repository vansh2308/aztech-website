
import project1 from "./../assets/Instagram post - 1.png"
import project2 from "./../assets/igpost2.png"
import project3 from "./../assets/igpost3.png"
import { IoLink } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "EasyBank Website",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ",
    githubLink: "#",
    liveSiteURL: "#",
    imgSrc: project1
  },
  {
    title: "Weather Dashboard",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ",
    githubLink: "#",
    liveSiteURL: "#",
    imgSrc: project2
  },
  {
    title: "Crypto Dashboard",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ",
    githubLink: "#",
    liveSiteURL: "#",
    imgSrc: project3
  },
  {
    title: "EasyBank Website",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ",
    githubLink: "#",
    liveSiteURL: "#",
    imgSrc: project1
  },
]



export default function ProjectsSection(){
  return(
    <section className="w-full h-fit flex flex-col items-cente p-20 bg-[#E7EBF1] text-purple-300 gap-8 max-[850px]:p-5">
      <h1 className="w-full text-[2.5rem] font-medium text-center mb-4 max-[850px]:text-2xl max-[850px]:mb-2"> PROJECTS </h1>
      <div className="h-fit w-full flex  overflow-x-scroll gap-7 max-[850px]:flex-col">
        {
          projects.map((item, key) => {
            return(
              <ProjectTile item={item} key={key}/>
            )
          })
        }
      </div>
    </section>
  )
}

function ProjectTile({item}){

  return(
    <div className="w-[25vw] h-fit bg-purple-500 project-tile flex-shrink-0 rounded-lg overflow-hidden max-[850px]:w-full">
      <img className="w-[100%] aspect-square" src={item.imgSrc} />
      <div className="w-[100%] h-[12rem] bg-purple-300 p-5 text-white flex flex-col overflow-hidden gap-3">
        <span className="text-nowrap font-semibold text-md">{item.title}</span>
        <p className="text-sm font-thin h-[50%] overflow-hidden">{item.content}</p>
        <div className="flex items-center h-fit gap-4 text-[1.7rem]">
          <a href={item.githubLink}><FaGithub /></a>
          <a href={item.liveSiteURL}><IoLink /></a>
        </div>


      </div>


    </div>
      
  )
}