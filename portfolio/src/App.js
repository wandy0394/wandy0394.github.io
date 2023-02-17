import './App.css'
import {Button, Drawer, Navbar} from 'react-daisyui'
import { useState } from 'react'
import {IoLogoJavascript as IconJavascript} from 'react-icons/io'
import {FaHtml5 as IconHtml, FaCss3Alt as IconCSS, FaReact as IconReact, FaNodeJs as IconNode, FaFileCode as IconScript, FaFileExcel as IconExcel} from 'react-icons/fa'
import {SiPowershell as IconPowerShell, SiTypescript as IconTypescript} from 'react-icons/si'
import {GrMysql as IconSQL} from 'react-icons/gr'

function NavLink({href, label}) {
  return (
    <a href={href} className='tab tab-bordered cursor-pointer hover:text-accent-focus hover:border-accent-focus'>
      <p className='prose-xl'>{label}</p>
    </a>
  )
}

function Section({id, children, classes}) {
  return (
    <div id={id} className={`min-h-screen pt-20 w-full ${classes}`}>
      <div className='px-4 md:px-24 h-full w-full'>
        {children}
      </div>
    </div>
  )
}

function ToolCard({children}) {
 return (
  <div className='flex max-w-xs items-center gap-x-4 px-2 border-b border-solid  border-slate-500'>
    {children}
  </div>
 )
}

function SkillCard({children}) {
  return (
   <div className='flex items-center gap-x-4 px-2'>
     {children}
   </div>
  )
 }

function ToolSetCard({children}) {
  return (
    <div className='flex flex-col h-1/2 items-center rounded-2xl border gap-y-4 py-4 px-20 lg:h-full'>
      {children}
    </div>
  )
}

function App() {

  const [visible, setVisible] = useState(false)

  function toggleVisible() {
    setVisible(p=>!p)
  }


  return (
    <div className='w-full'>
      <div className="drawer drawer-end ">
        <input id="side-menu-drawer" type="checkbox" className="drawer-toggle" checked={visible} defaultChecked/> 
        <div className="drawer-content w-full">
          <div className="w-full fixed navbar bg-base-300 px-4 md:px-24">
            <div className='navbar-start prose'>
              <h1 className='text-accent'>AW</h1>
            </div>
            <div className="flex-none navbar-end hidden md:block w-1/2 md:w-3/4">
              <div className='hidden tabs gap-x-4 items-center justify-end md:flex'>
                  <NavLink href='#project-list' label='Projects'/>
                  <NavLink href='#experience' label='Experience'/>
                  <NavLink href='#skills' label='Skills'/>
                  <NavLink href='#tools' label='Tools'/>
              </div>
            </div>
            <div className="navbar-end flex-none md:hidden">
              <label for="side-menu-drawer" className="btn btn-square btn-ghost" onClick={toggleVisible}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </label>
            </div> 
          </div>
          <Section id='description' classes='bg-base-200'>
            <div className='flex items-center justify-center w-full h-screen'>
              <div className='flex flex-col gap-y-2 items-center justify-center w-full'>
                <div className='prose'>
                  <h1 className='flex flex-col items-center justify-center'>Hey, it's<span className='text-accent'>Andy <span className='text-neutral-content'> here</span></span></h1>
                </div>
                <div className='prose'>
                  <h2>An Engineer</h2>
                </div>
                <p className='prose-2xl text-center'>Focusing on learning new skills and technologies. See a bit of my journey below.</p>
                <div className='flex gap-x-4'>
                  <button className='btn btn-accent bg-teal-900 border-teal-900'>Resume</button>
                  <button className='btn text-white bg-slate-800'>Email me</button>
                </div>
              </div>
            </div>
          </Section>

          <Section id='experience'>
            Experience
          </Section>
          <Section id='project-list' classes='bg-base-200 h-full'>
            <div className='flex flex-col gap-y-8 items-center justify-center gap-2 h-3/4 w-full px-16'>
              <div className='prose'>
                <h1 className='border-b border-teal-400'>Projects</h1>
              </div>
              <div className='carousel w-full h-full space-x-8'>
                <div id='project-1' className='carousel-item w-full md:w-1/2 lg:w-1/3'>
                  <div className='card rounded-none w-full border border-solid border-black h-full'>
                    <div className='h-3/5 bg-slate-700'> IMAGE </div>
                    <div className='card-body space-y-2 pt-4'>
                      <h2 className='card-title'>
                        Project 1
                      </h2>
                      <p>Descriptive text about project goes here</p>
                      <div className='card-actions flex justify-end gap-4'>
                        <button className='btn btn-accent'>Try me</button>
                        <button className='btn'>Source</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='carousel-item w-full md:w-1/2 lg:w-1/3'>
                  <div id='project-2' className='card rounded-none w-full border border-solid border-black h-full'>
                    <div className='h-3/5 bg-slate-700'> IMAGE </div>
                    <div className='card-body space-y-2 pt-4'>
                      <h2 className='card-title'>
                        Project 2
                      </h2>
                      <p>Descriptive text about project goes here</p>
                      <div className='card-actions flex justify-end gap-4'>
                        <button className='btn btn-accent'>Try me</button>
                        <button className='btn'>Source</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='carousel-item w-full md:w-1/2 lg:w-1/3'>
                  <div id='project-3' className='card rounded-none w-full border border-solid border-black h-full'>
                    <div className='h-3/5 bg-slate-700'> IMAGE </div>
                    <div className='card-body space-y-2 pt-4'>
                      <h2 className='card-title'>
                        Project 3
                      </h2>
                      <p>Descriptive text about project goes here</p>
                      <div className='card-actions flex justify-end gap-4'>
                        <button className='btn btn-accent'>Try me</button>
                        <button className='btn'>Source</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='carousel-item w-full md:w-1/2 lg:w-1/3'>
                  <div id='project-4' className='card rounded-none w-full border border-solid border-black h-full'>
                    <div className='h-3/5 bg-slate-700'> IMAGE </div>
                    <div className='card-body space-y-2 pt-4'>
                      <h2 className='card-title'>
                        Project 4
                      </h2>
                      <p>Descriptive text about project goes here</p>
                      <div className='card-actions flex justify-end gap-4'>
                        <button className='btn btn-accent'>Try me</button>
                        <button className='btn'>Source</button>
                      </div>
                    </div>
                  </div>
                </div>                                                
              </div>
              <div className='flex justify-center w-full py-2 gap-2'>
                <a href='#project-1' class='btn btn-xs'>1</a>
                <a href='#project-2' class='btn btn-xs'>2</a>
                <a href='#project-3' class='btn btn-xs'>3</a>
                <a href='#project-4' class='btn btn-xs'>4</a>
              </div>
            </div>

          </Section>
          <Section id='skills' classes='h-screen'>
            <div className='hidden flex-col gap-y-8 items-center justify-center gap-2 h-full w-full lg:flex'>
              <div className='prose'>
                <h1 className='border-b border-teal-400'>Skills</h1>
              </div>
              <div id='skill-set' className='flex gap-16 w-full items-start justify-center flex-wrap'>
                <div className='flex flex-col min-w-[30%] w-1/3 items-center border gap-y-4 py-4 px-20 h-full'>
                  <div className='prose-lg'>Technical</div>
                  <div className='flex w-full flex-col gap-y-8'>
                    <SkillCard>
                      <div className='prose-xl'>Requirements Analysis</div>
                    </SkillCard>
                    <SkillCard>
                      <div className='prose-xl'>Systems Design</div>
                      </SkillCard>
                    <SkillCard>
                      <div className='prose-xl'>Solution Implementation</div>
                      </SkillCard>
                    
                    <SkillCard>
                      <div className='prose-xl'>Testing, Validation and Verification</div>
                    </SkillCard>
                    <SkillCard>
                      <div className='prose-xl'>Troubleshooting/Debugging</div>
                    </SkillCard>
                    <SkillCard>
                      <div className='prose-xl'>Configuration Management</div>
                    </SkillCard>
                  </div>
                </div>
                <div className='flex flex-col min-w-[20%] w-1/3 items-center border gap-y-4 py-4 px-20 h-full'>
                  <div className='prose-lg'>Professional</div>
                  <div className='flex w-full flex-col gap-y-4'>
                    <SkillCard>
                      <div className='prose-xl'>Solution Demonstration</div>
                    </SkillCard>
                    <SkillCard>
                      <div className='prose-xl'>Feedback Elicitation</div>
                      </SkillCard>
                    <SkillCard>
                      <div className='prose-xl'>User Training and Support</div>
                      </SkillCard>
                    
                    <SkillCard>
                      <div className='prose-xl'>Collaborative Problem Solving</div>
                      </SkillCard>
                    <SkillCard>
                      <div className='prose-xl'>Documentation</div>
                    </SkillCard>
                  </div>
                </div>                
              </div>
            </div>
          </Section>
          <Section id='tools' classes='bg-base-200 h-screen'>
            <div className='flex flex-col gap-y-8 items-center justify-center gap-2 h-full'>
              <div className='prose'>
                <h1 className='border-b border-teal-400'>Tools</h1>
              </div>
              <div id='tool-set' className='flex gap-16 w-full items-start justify-center flex-wrap'>
                <ToolSetCard>
                  <div className='prose-xl'>Frontend</div>
                  <div className='flex max-w-xs w-full flex-col gap-y-4'>
                    <ToolCard>
                      <IconHtml size={30} className='' color='#f06529'/>
                      <div className='prose-2xl'>HTML</div>
                    </ToolCard>
                    <ToolCard>
                      <IconCSS size={30}  className='' color='#2965f1'/>
                      <div className='prose-2xl'>CSS</div>
                      </ToolCard>
                    <ToolCard>
                      <IconJavascript size={30}  className=''color='goldenrod'/>
                      <div className='prose-2xl'>Javascript</div>
                      </ToolCard>
                    
                    <ToolCard>
                      <IconTypescript size={30}  className=''color='#007acc'/>
                      <div className='prose-2xl'>Typescript</div>
                      </ToolCard>
                    <ToolCard>
                      <IconReact size={30} className='' color='#61DBFB'/>
                      <div className='prose-2xl'>React</div>
                    </ToolCard>
                  </div>
                </ToolSetCard>
                <ToolSetCard>
                  <div className='prose-xl'>Backend</div>
                  <div className='flex max-w-xs w-full flex-col gap-y-4'>
                    <ToolCard>
                      <IconNode size={30} className='' color='#68A063'/>
                      <div className='prose-2xl'>NodeJS</div>
                    </ToolCard>
                    <ToolCard>
                      <IconSQL size={30} className='' color='#2965f1'/>
                      <div className='prose-2xl'>mySQL</div>
                    </ToolCard>
                  </div>
                </ToolSetCard>
                <ToolSetCard>
                  <div className='prose-xl'>Scripting</div>
                  <div className='flex max-w-xs w-full flex-col gap-y-4'>
                    <ToolCard>
                      <IconPowerShell size={30} className='' color='#008DED'/>
                      <div className='prose-2xl'>PowerShell</div>
                    </ToolCard>
                    <ToolCard>
                      <IconScript size={30} className='' color='#254768'/>
                      <div className='prose-2xl'>AutoIt</div>
                    </ToolCard>
                    <ToolCard>
                      <IconScript size={30} className=''color='grey'/>
                      <div className='prose-2xl'>Bash</div>
                    </ToolCard>
                    <ToolCard>
                      <IconExcel size={30} className='' color='#1d6f42'/>
                      <div className='prose-2xl'>VBA</div>
                    </ToolCard>
                  </div>
                </ToolSetCard>
              </div>
            </div>
          </Section>
        </div> 
        <div className="drawer-side h-full">
          <label for="side-menu-drawer"  className="drawer-overlay" onClick={toggleVisible}></label> 
          <ul className="menu p-4 w-80 bg-base-100">
            <li><a href='#project-list' onClick={toggleVisible}>Projects</a></li>
            <li><a href='#experience' onClick={toggleVisible}>Experience</a></li>
            <li><a href='#skills' onClick={toggleVisible}>Skills</a></li>
            <li><a href='#tools' onClick={toggleVisible}>Tools</a></li>

          </ul>
        </div>
      </div>

          {/* <section id='project-list' className='h-screen pt-20'>projects</section> */}


    </div>
  )
}


export default App;
