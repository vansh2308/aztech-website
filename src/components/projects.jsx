
import project1 from "./../assets/Instagram post - 1.png"

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
    <div className="w-[25vw] h-fit bg-purple-500 project-tile flex-shrink-0">
      <img className="w-[100%] aspect-square" src={project1} />


    </div>
      
  )
}