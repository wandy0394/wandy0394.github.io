
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='titlebar-contact'>
        <div className='my-name'>
            <p className='label-name'>FirstName, LastName</p>
        </div>
        <div className='my-email'>
          <p className='label-email'>email@email.com</p>
        </div>
      </div>

      <div className='bio'>
        <p className='bio-text'>Hi, I'm <p className='bio-name'>Andy</p>.This is some placeholder text that is as long as I am willing to make it plus a little bit more</p>
        <p className='bio-email'>bioEmail@email.com</p>
      </div>
      <hr></hr>
      <div className='project-list'>
        <div className='project'>
          <div className='project-name'>Project Name 1</div>
          <div className='project-blurb'>Blurb blurby blurb</div>
          <div className='project-demo'>Try me</div>
          <div className='project-source'>View on GitHub</div>
        </div>
        <div className='project'>
        <div className='project-name'>Project Name 2</div>
          <div className='project-blurb'>Blurb blurby blurb</div>
          <div className='project-demo'>Try me</div>
          <div className='project-source'>View on GitHub</div>          
        </div>
        <div className='project'>
        <div className='project-name'>Project Name 3</div>
          <div className='project-blurb'>Blurb blurby blurb</div>
          <div className='project-demo'>Try me</div>
          <div className='project-source'>View on GitHub</div>        
        </div>

        <div className='project'>
        <div className='project-name'>Project Name 4</div>
          <div className='project-blurb'>Blurb blurby blurb</div>
          <div className='project-demo'>Try me</div>
          <div className='project-source'>View on GitHub</div>        
        </div>

    </div>

    </div>
  );
}

export default App;
