function ProjectCard({id, projectName, description}) {
    return (
        <div id={id}className='carousel-item w-full md:w-1/2 lg:w-1/3'>
          <div className='rounded-none w-full border border-solid border-base-300 h-full bg-base-200'>
            <div className='h-3/5 bg-slate-700'> IMAGE </div>
            <div className='card-body space-y-2 pt-8'>
              <h2 className='card-title'>
                {projectName}
              </h2>
              <p>{description}</p>
              <div className='card-actions flex justify-end items-end h-full gap-4'>
                <button className='btn btn-accent'>Try me</button>
                <button className='btn'>Source</button>
              </div>
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
        <div className='flex flex-col gap-y-8 items-center justify-center gap-2 h-3/4 w-full px-4 md:px-16'>
              <div className='prose'>
                <h1 className='border-b border-teal-400'>Projects</h1>
              </div>
              <div className='carousel carousel-center w-full h-full space-x-8 p-8 bg-base-300'>
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