import './App.css'
import {Button, Drawer, Navbar} from 'react-daisyui'
import { useState } from 'react'
import {IoLogoJavascript as IconJavascript} from 'react-icons/io'
import {FaHtml5 as IconHtml, FaCss3Alt as IconCSS, FaReact as IconReact, FaNodeJs as IconNode, } from 'react-icons/fa'

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

function ToolCard({icon, label}) {

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
          <Section id='project-list' classes='bg-base-200'>
            MyProjects
          </Section>
          <Section id='skills'>
            Skills
          </Section>
          <Section id='tools' classes='bg-base-200'>
            <div className='flex flex-col gap-y-8 items-center justify-center gap-2 h-full'>
              <div className='prose'>
                <h1>Tools</h1>
              </div>
              <div id='tool-set' className='flex gap-16 w-full items-start justify-center flex-wrap'>
                  <div className='flex max-w-xs w-full flex-col gap-y-4 items-center rounded border py-4'>
                    <div className='prose-xl'>Frontend</div>
                      <div className='flex max-w-xs items-center gap-x-4 px-2 border border-solid  border-slate-200'>
                        <IconHtml className='' color='#f06529'/>
                        <div className='prose-2xl'>HTML5</div>
                      </div>
                      <div className='flex max-w-xs items-center gap-x-4 px-2 border border-solid  border-slate-200'>
                        <IconCSS className='' color='#2965f1'/>
                        <div className='prose-2xl'>CSS</div>
                      </div>
                      <div className='flex max-w-xs items-center gap-x-4 px-2 border border-solid  border-slate-200'>
                        <IconJavascript className=''color='goldenrod'/>
                        <div className='prose-2xl'>Javascript</div>
                      </div>
                      <div className='flex max-w-xs items-center gap-x-4 px-2 border border-solid  border-slate-200'>
                        <IconReact className='' color='#61DBFB'/>
                      <div className='prose-2xl'>ReactJS</div>
                    </div>
                  </div>

                  <div className='flex max-w-xs w-full flex-col gap-y-4 items-center rounded border py-4'>
                    <div className='prose-xl'>Backend</div>
                      <div className='flex items-center gap-x-4 px-2 border border-solid  border-slate-200'>
                        <IconNode className='' color='#68A063'/>
                        <div className='prose-2xl'>NodeJS</div>
                      </div>
                      <div className='flex items-center gap-x-4 px-2 border border-solid  border-slate-200'>
                        <IconCSS className='' color='#2965f1'/>
                        <div className='prose-2xl'>mySQL</div>
                      </div>
                      <div className='flex items-center gap-x-4 px-2 border border-solid  border-slate-200'>
                        <IconJavascript className=''color='goldenrod'/>
                        <div className='prose-2xl'>Thing</div>
                      </div>
                      <div className='flex items-center gap-x-4 px-2 border border-solid  border-slate-200'>
                        <IconReact className='' color='#61DBFB'/>
                      <div className='prose-2xl'>Thing</div>
                    </div>
                  </div>

                  <div className='flex max-w-xs w-full flex-col gap-y-4 items-center rounded border py-4'>
                    <div className='prose-xl'>Languages</div>
                      <div className='flex items-center gap-x-4 px-2 border border-solid  border-slate-200'>
                        <IconNode className='' color='#68A063'/>
                        <div className='prose-2xl'>NodeJS</div>
                      </div>
                      <div className='flex items-center gap-x-4 px-2 border border-solid  border-slate-200'>
                        <IconCSS className='' color='#2965f1'/>
                        <div className='prose-2xl'>mySQL</div>
                      </div>
                      <div className='flex items-center gap-x-4 px-2 border border-solid  border-slate-200'>
                        <IconJavascript className=''color='goldenrod'/>
                        <div className='prose-2xl'>Thing</div>
                      </div>
                      <div className='flex items-center gap-x-4 px-2 border border-solid  border-slate-200'>
                        <IconReact className='' color='#61DBFB'/>
                      <div className='prose-2xl'>Thing</div>
                    </div>
                  </div>                                  
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
