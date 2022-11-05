
// import './AppVariant.css';
import './app-styles.css';
import './project-styles.css';
import './tool-styles.css';
import {useEffect, useState} from 'react'
import {AiOutlineConsoleSql, AiOutlineHtml5} from 'react-icons/ai'
import {FaHtml5 as IconHtml, FaCss3Alt as IconCSS, FaReact as IconReact, FaNodeJs as IconNode, } from 'react-icons/fa'

function App() {

  const pageProjectID = 'page-project';
  const pageToolID = 'page-tool';
  const [pageProjectSelected, setPageProjectSelected] = useState(true)
  const [pageToolSelected, setPageToolSelected] = useState(false)

  const clickProject = () => {
    console.log('project')
    setPageProjectSelected(true)
    setPageToolSelected(false)
  }

  const clickTools = () => {
    console.log('tools')
    setPageProjectSelected(false)
    setPageToolSelected(true)
  }

  useEffect(()=> {

  }, [pageProjectSelected, pageToolSelected])

  return (
    <div className="App">
      <nav>
        <a href='#' className='nav-link left active' onClick={clickProject}>Projects</a>
        <a href='#' className='nav-link right' onClick={clickTools}>Tools</a>
      </nav>
      <div className='bio'>
        <div className='bio-header'>
          <div className='bio-greeting'>Hi, I'm <p className='bio-name'>Andy</p>.</div>
          <div className='bio-email'><p>bioEmail<br></br>@email.com</p></div>
        </div>
        <div className='bio-blurb'>
          <p className='bio-narrow'>These are my projects.</p>
          <p className='bio-wide'>This is some placeholder text that is as long as I am willing to make it plus a little bit more</p>
        </div>  
      </div>
      <hr></hr>
      <div className={pageProjectSelected ? 'page-project active' :'page-project inactive'} id={pageProjectID}>
        <div className='project-list'>
          <div className='project'>
            <div className='project-image'><IconHtml className='icon'/><IconCSS className='icon'/><IconReact className='icon'/></div>
              <div className='project-name'>Project Name 1</div>
            <div className='project-blurb'>Blurb blurby blurb</div>
            <div className='project-buttons'>
              <div className='project-source button'>&lt;src /&gt;</div>
              <div className='project-demo button'>Try me</div>
            </div>
          </div>
          <div className='project'>
            <div className='project-image'><IconHtml className='icon'/><IconCSS className='icon'/><IconReact className='icon'/></div>
              <div className='project-name'>Project Name 1</div>
            <div className='project-blurb'>Blurb blurby blurb</div>
            <div className='project-buttons'>
              <div className='project-source button'>&lt;src /&gt;</div>
              <div className='project-demo button'>Try me</div>
            </div>
          </div>
          <div className='project'>
            <div className='project-image'><IconHtml className='icon'/><IconCSS className='icon'/><IconReact className='icon'/></div>
              <div className='project-name'>Project Name 1</div>
            <div className='project-blurb'>Blurb blurby blurb</div>
            <div className='project-buttons'>
              <div className='project-source button'>&lt;src /&gt;</div>
              <div className='project-demo button'>Try me</div>
            </div>
          </div>
          <div className='project'>
            <div className='project-image'><IconHtml className='icon'/><IconCSS className='icon'/><IconReact className='icon'/></div>
              <div className='project-name'>Project Name 1</div>
            <div className='project-blurb'>Blurb blurby blurb</div>
            <div className='project-buttons'>
              <div className='project-source button'>&lt;src /&gt;</div>
              <div className='project-demo button'>Try me</div>
            </div>
          </div>
          <div className='project'>
            <div className='project-image'><IconHtml className='icon'/><IconCSS className='icon'/><IconReact className='icon'/></div>
              <div className='project-name'>Project Name 1</div>
            <div className='project-blurb'>Blurb blurby blurb</div>
            <div className='project-buttons'>
              <div className='project-source button'>&lt;src /&gt;</div>
              <div className='project-demo button'>Try me</div>
            </div>
          </div>
        </div>
      </div>
      <div className={pageToolSelected ? 'page-tool active' :'page-tool inactive'} id={pageToolID}>Tools go here</div>
    </div>
  );
}

export default App;
