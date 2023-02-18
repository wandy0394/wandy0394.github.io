import './App.css'
import { useEffect, useRef, useState } from 'react'

import SectionTools from './SectionTools'
import SectionSkills from './SectionSkills'
import SectionProjects from './SectionProjects'
import SectionExperience from './SectionExperience'

function NavLink({href, label, index, activeIndex}) {
  return (
    <a href={href} className={`${index==activeIndex?'border-accent-focus':''} tab tab-bordered cursor-pointer hover:text-accent-focus hover:border-accent-focus`}>
      <p className='prose-xl'>{label}</p>
    </a>
  )
}

function Anchor({href, children, index, activeIndex, onClick}) {
  return (
    <a href={href} onClick={onClick} className={`${index==activeIndex?'text-accent-focus':''} hover:bg-teal-900 focus:bg-teal-800`}>{children}</a>
  )
}

function Section({id, children, classes, refProp}) {

  return (
    <div ref={refProp} id={id} className={`min-h-screen py-20 lg:py-0 w-full ${classes}`}>
      <div className='min-h-screen px-16 md:px-24 h-full w-full flex flex-col items-center justify-center'>
        {children}
      </div>
    </div>
  )
}

function Footer({id, children, classes, refProp}) {

  return (
    <div ref={refProp} id={id} className={`h-[50vh] py-20 xl:py-0 w-full ${classes}`}>
      <div className='px-16 md:px-24 h-full w-full flex flex-col items-center justify-center'>
        {children}
      </div>
    </div>
  )
}





function App() {

  const [visible, setVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [scrollvalue, setScrollvalue] = useState(0)

  const descRef = useRef(null)
  const expRef = useRef(null)
  const projectRef = useRef(null)
  const skillsRef = useRef(null)
  const toolsRef = useRef(null)
  const footerRef = useRef(null)

  const refs = [descRef, expRef, projectRef, skillsRef, toolsRef, footerRef]

  function toggleVisible() {
    setVisible(p=>!p)
  }

  function handleScroll() {
    let index = 0
    refs.map(ref=>{
      if (ref.current.offsetTop + window.innerHeight / 2 < window.scrollY) {
        index++
      }
    })
    setActiveIndex(index)
  }

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll, true)
    return () =>{
      window.removeEventListener('scroll', handleScroll, true)
    }
  }, [])


  return (
    <div className='w-full h-full overflow-y-scroll'>
      <div className="drawer drawer-end h-auto" >
        <input id="side-menu-drawer" type="checkbox" className="drawer-toggle" checked={visible} readOnly/> 
        <div className="drawer-content w-full">
          <div className="w-full fixed navbar bg-base-300 px-4 md:px-24">
            <div className='navbar-start prose'>
              <h1 className='text-accent'>AW</h1>
            </div>
            <div className="flex-none navbar-end hidden md:block w-1/2 md:w-3/4">
              <div className='hidden tabs gap-x-4 items-center justify-end md:flex'>
                  <NavLink href='#experience' label='Experience' index={1} activeIndex={activeIndex}/>
                  <NavLink href='#project-list' label='Projects'index={2} activeIndex={activeIndex}/>
                  <NavLink href='#skills' label='Skills'index={3} activeIndex={activeIndex}/>
                  <NavLink href='#tools' label='Tools'index={4} activeIndex={activeIndex}/>
              </div>
              
            </div>
            <div className="navbar-end flex-none md:hidden">
              <button htmlFor="side-menu-drawer" className="btn btn-square btn-ghost" onClick={toggleVisible}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </button>
            </div> 
          </div>
          
          <Section refProp={descRef} id='description' classes='bg-base-200'>
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
            <SectionExperience refProp={expRef} />
          </Section>
          <Section  id='project-list' classes='bg-base-200'>
            <SectionProjects refProp={projectRef}/>
          </Section>
          <Section id='skills' classes=''>
            <SectionSkills refProp={skillsRef} />
          </Section>
          <Section id='tools' classes='bg-base-200'>
            <SectionTools refProp={toolsRef} />
          </Section>
          <Footer refProp={footerRef} id='footer'>
            Updated 2023
          </Footer>
        </div> 
        <div className="drawer-side h-full">
          <div htmlFor="side-menu-drawer"  className="drawer-overlay w-full h-full fixed" onClick={toggleVisible}></div> 
          <ul className="menu p-4 w-60 bg-base-100 h-full fixed">
            <li><Anchor href='#experience' onClick={toggleVisible} index={1} activeIndex={activeIndex}>Experience</Anchor></li>
            <li><Anchor href='#project-list'onClick={toggleVisible} index={2} activeIndex={activeIndex}>Projects</Anchor></li>
            <li><Anchor href='#skills' onClick={toggleVisible} index={3} activeIndex={activeIndex}>Skills</Anchor></li>
            <li><Anchor href='#tools'  onClick={toggleVisible} index={4} activeIndex={activeIndex}>Tools</Anchor></li>
          </ul>
        </div>
      </div>

          {/* <section id='project-list' className='h-screen pt-20'>projects</section> */}


    </div>
  )
}


export default App;
