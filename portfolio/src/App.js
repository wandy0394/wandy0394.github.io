import './app-styles.css';
import './project-styles.css';
import './tool-styles.css';
import Tools from './Tools'
import Bio from './Bio';
import ProjectList from './ProjectList';
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


  return (
    <div className="App">
      <nav>
        <a href='#' className={`nav-link left ${pageProjectSelected ? 'selected':''}`} onClick={clickProject}>Projects</a>
        <a href='#' className={`nav-link right ${pageToolSelected ? 'selected':''}`}  onClick={clickTools}>Tools</a>
      </nav>
      <Bio/>
      <hr></hr>
      <ProjectList isactive={pageProjectSelected} />
      <Tools isactive={pageToolSelected}/>
      <hr></hr>
      <div className='footer'></div>
    </div>
  );
}

export default App;
