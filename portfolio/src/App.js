
import './AppVariant.css';

function App() {
  return (
    <div className="App">
      <div className='background-blur'></div>
      <div className='titlebar-contact'>
        <div className='my-name'>
            <p className='label-name'>FirstName, LastName</p>
        </div>
        <div className='my-email'>
          <p className='label-email'>email@email.com</p>
        </div>
      </div>

      <div className='bio'>
        <div className='bio-greeting'>Hi, I'm <p className='bio-name'>Andy</p>.</div>
        <div className='bio-email'><p>bioEmail@email.com</p></div>
        <div className='bio-blurb'>
          <p className='bio-narrow'>These are my projects.</p>
          <p className='bio-wide'>This is some placeholder text that is as long as I am willing to make it plus a little bit more</p>
        </div>  
        
      </div>
      <hr></hr>
      <div className='project-list'>
        <div className='project'>
        
          <div className='project-header'>
            <div className='project-name'>Project Name 1 <p>subtitle</p></div>
          </div>
          <div className='project-blurb'>Blurb blurby blurb</div>
          <div className='project-image'></div>
          <div className='project-demo'>Try me</div>
          <div className='project-source'>GitHub</div>
        </div>
        <div className='project'>
          <div className='project-header'>
            <div className='project-name'>Project Name 2 <p>subtitle</p></div>
          </div>  
          <div className='project-blurb'>Blurb blurby blurb</div>
          <div className='project-image'></div>
          <div className='project-demo'>Try me</div>
          <div className='project-source'>GitHub</div>          
        </div>
        <div className='project'>
        <div className='project-header'>
            <div className='project-name'>Project Name 3 <p>subtitle</p></div>
          </div>  
          <div className='project-blurb'>Blurb blurby blurb</div>
          <div className='project-image'></div>
          <div className='project-demo'>Try me</div>
          <div className='project-source'>GitHub</div>        
        </div>

        <div className='project'>
        <div className='project-header'>
            <div className='project-name'>Project Name 4 <p>subtitle</p></div>
          </div>  
          <div className='project-blurb'>Blurb blurby blurb</div>
          <div className='project-image'></div>
          <div className='project-demo'>Try me</div>
          <div className='project-source'>GitHub</div>        
        </div>

    </div>

    </div>
  );
}

export default App;