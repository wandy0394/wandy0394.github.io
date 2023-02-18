import {IoLogoJavascript as IconJavascript} from 'react-icons/io'
import {FaHtml5 as IconHtml, FaCss3Alt as IconCSS, FaReact as IconReact, FaNodeJs as IconNode, FaFileCode as IconScript, FaFileExcel as IconExcel} from 'react-icons/fa'
import {SiPowershell as IconPowerShell, SiTypescript as IconTypescript} from 'react-icons/si'
import {GrMysql as IconSQL} from 'react-icons/gr'

function ProjectCard({id, projectName, description, icons}) {
    return (
        <div id={id} className='carousel-item pt-52 -mt-52 md:pt-72 md:-mt-72 h-full md:w-1/2 lg:w-1/3 grid grid-rows-2 w-full shadow-xl'>
            <div className='bg-slate-700 relative'>
                <div className='flex gap-1 items-center absolute p-2 z-10'>
                    {icons.map(icon=>icon)}
                </div> 
            </div>
            <div className='bg-gray-800 space-y-2 px-4 pt-4'>
              <h2 className='card-title'>
                {projectName}
              </h2>
              <p>{description}</p>
              <div className='flex justify-center items-center gap-4 py-4 px-4'>
                <button className='btn btn-sm btn-accent bg-teal-900 border-teal-900'>Try me</button>
                <button className='btn btn-sm bg-slate-800'>Source</button>
              </div>
            </div>
        </div>
    )
}

const projects = [
    {id: 'project-1', projectName:'Project 1', description:'Descriptive blurb goes here', icons:[<IconHtml size={30}/>, <IconCSS size={30}/>, <IconJavascript size={30}/>]},
    {id: 'project-2', projectName:'Project 2', description:'Descriptive blurb goes here', icons:[<IconReact size={30}/>, <IconTypescript size={30}/>]},
    {id: 'project-3', projectName:'Project 3', description:'Descriptive blurb goes here', icons:[<IconSQL size={30}/>, <IconNode size={30}/>]},
    {id: 'project-4', projectName:'Project 4', description:'Descriptive blurb goes here', icons:[<IconHtml size={30}/>, <IconCSS size={30}/>]},
]

export default function SectionProjects({refProp}) {

    return (
        <div className='flex flex-col gap-y-8 items-center justify-center h-full w-full px-0 md:px-16'>
            <div ref={refProp} className='prose'>
                <h1 className='hidden border-b border-teal-400 md:block'>Projects</h1>
                <h2 className='border-b border-teal-400 md:hidden'>Projects</h2>
            </div>
            <div className='carousel carousel-center w-full h-full space-x-8 p-4 md:p-8 bg-base-300'>
            {
                projects.map((project, index)=>{
                    return (
                        <ProjectCard key={index} id={project.id} projectName={project.projectName} description={project.description} icons={project.icons}/>
                    )
                })
            }
            
            </div>
            <div className='flex justify-center w-full py-2 gap-2'>
            <a href='#project-1' className='btn btn-xs'>1</a>
            <a href='#project-2' className='btn btn-xs'>2</a>
            <a href='#project-3' className='btn btn-xs'>3</a>
            <a href='#project-4' className='btn btn-xs'>4</a>
            </div>
        </div>
        
    )

}