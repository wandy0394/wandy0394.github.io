function ProjectCard({id, projectName, description}) {
    return (
        <div id={id} className='carousel-item pt-52 -mt-52 h-full md:w-1/2 lg:w-1/3 grid grid-rows-2 w-full'>
            <div className='bg-slate-700'> IMAGE </div>
            <div className='bg-gray-800 space-y-2 px-4 pt-4'>
              <h2 className='card-title'>
                {projectName}
              </h2>
              <p>{description}</p>
              <div className='flex justify-center items-center gap-4 py-4 px-4'>
                <button className='btn btn-sm btn-accent'>Try me</button>
                <button className='btn btn-sm '>Source</button>
              </div>
            </div>
        </div>
    )
}

const projects = [
    {id: 'project-1', projectName:'Project 1', description:'Descriptive blurb goes here'},
    {id: 'project-2', projectName:'Project 2', description:'Descriptive blurb goes here'},
    {id: 'project-3', projectName:'Project 3', description:'Descriptive blurb goes here'},
    {id: 'project-4', projectName:'Project 4', description:'Descriptive blurb goes here'},
]

export default function SectionProjects() {

    return (
        <div className='flex flex-col gap-y-8 items-center justify-center h-full w-full px-0 md:px-16'>
            <div className='prose'>
            <h1 className='hidden border-b border-teal-400 md:block'>Projects</h1>
            <h2 className='border-b border-teal-400 md:hidden'>Projects</h2>
            </div>
            <div className='carousel carousel-center w-full h-full space-x-8 p-4 md:p-8 bg-base-300'>
            {
                projects.map((project)=>{
                    return (
                        <ProjectCard id={project.id} projectName={project.projectName} description={project.description}/>
                    )
                })
            }
            
            </div>
            <div className='flex justify-center w-full py-2 gap-2'>
            <a href='#project-1' class='btn btn-xs'>1</a>
            <a href='#project-2' class='btn btn-xs'>2</a>
            <a href='#project-3' class='btn btn-xs'>3</a>
            <a href='#project-4' class='btn btn-xs'>4</a>
            </div>
        </div>
        
    )

}