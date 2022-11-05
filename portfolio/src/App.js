
import './AppVariant.css';
import {AiOutlineHtml5} from 'react-icons/ai'
import {FaHtml5 as IconHtml, FaCss3Alt as IconCSS, FaReact as IconReact, FaNodeJs as IconNode, } from 'react-icons/fa'

function App() {
  return (
    <div className="App">
      <div className='background-blur'></div>
      <nav>
        <a href='#' className='nav-link left active'>Projects</a>
        <a href='#' className='nav-link right'>Tools</a>
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
      <div className='project-list'>
        <div className='project'>
          <div className='project-image'><IconHtml class='icon'/><IconCSS class='icon'/><IconReact class='icon'/></div>
            <div className='project-name'>Project Name 1</div>
          <div className='project-blurb'>Blurb blurby blurb</div>
          <div className='project-buttons'>
            <div className='project-source button'>&lt;src /&gt;</div>
            <div className='project-demo button'>Try me</div>
          </div>
        </div>
        <div className='project'>
          <div className='project-image'><IconHtml class='icon'/><IconCSS class='icon'/><IconReact class='icon'/></div>
            <div className='project-name'>Project Name 1</div>
          <div className='project-blurb'>Blurb blurby blurb</div>
          <div className='project-buttons'>
            <div className='project-source button'>&lt;src /&gt;</div>
            <div className='project-demo button'>Try me</div>
          </div>
        </div>
        <div className='project'>
          <div className='project-image'><IconHtml class='icon'/><IconCSS class='icon'/><IconReact class='icon'/></div>
            <div className='project-name'>Project Name 1</div>
          <div className='project-blurb'>Blurb blurby blurb</div>
          <div className='project-buttons'>
            <div className='project-source button'>&lt;src /&gt;</div>
            <div className='project-demo button'>Try me</div>
          </div>
        </div>
        <div className='project'>
          <div className='project-image'><IconHtml class='icon'/><IconCSS class='icon'/><IconReact class='icon'/></div>
            <div className='project-name'>Project Name 1</div>
          <div className='project-blurb'>Blurb blurby blurb</div>
          <div className='project-buttons'>
            <div className='project-source button'>&lt;src /&gt;</div>
            <div className='project-demo button'>Try me</div>
          </div>
        </div>
        <div className='project'>
          <div className='project-image'><IconHtml class='icon'/><IconCSS class='icon'/><IconReact class='icon'/></div>
            <div className='project-name'>Project Name 1</div>
          <div className='project-blurb'>Blurb blurby blurb</div>
          <div className='project-buttons'>
            <div className='project-source button'>&lt;src /&gt;</div>
            <div className='project-demo button'>Try me</div>
          </div>
        </div>
    </div>

    </div>
  );
}

export default App;
