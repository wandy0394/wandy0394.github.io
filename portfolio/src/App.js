import './App.css'
import {Button, Drawer, Navbar} from 'react-daisyui'
import { useState } from 'react'

function NavLink({href, label}) {
  return (
    <a href={href} className='tab tab-bordered cursor-pointer hover:text-accent-focus hover:border-accent-focus'>
      <p className='prose-xl'>{label}</p>
    </a>
  )
}

function Section({id, children, classes}) {
  return (
    <div id={id} className={`h-screen pt-20 w-full ${classes}`}>
      <div className='px-4 md:px-24 h-full w-full'>
        {children}
      </div>
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
            <div className='flex items-center justify-center w-full h-full'>
              <div className='flex flex-col gap-y-2 items-center justify-center'>
                <div className='prose'>
                  <h1 >Hi, my name is <span className='text-accent'>Andy</span>.</h1>
                </div>
                <p className='prose-2xl'>I'm focused on learning new technologies to solve interesting challenges in different spaces.</p>
                <div className='flex gap-x-4'>
                  <button className='btn btn-accent bg-teal-900 border-teal-900'>Resume</button>
                  <button className='btn text-white bg-slate-800'>Email me</button>
                </div>
              </div>
            </div>
          </Section>

          <Section id='project-list'>
            MyProjects
          </Section>
          <Section id='experience' classes='bg-base-200'>
            Experience
          </Section>
          <Section id='skills'>
            Skills
          </Section>
          <Section id='tools' classes='bg-base-200'>
            Tools
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
