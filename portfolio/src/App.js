import './App.css'

function NavLink({href, label}) {
  return (
    <a href={href} className='tab tab-bordered cursor-pointer hover:text-accent-focus hover:border-accent-focus'>
      <p className='prose-xl'>{label}</p>
    </a>

  )
}

function App() {




  return (
    <div className="h-screen">
      <div className='relative'>
        <section id='header' className='px-24 navbar fixed top-0 left-0'>
          <div className='navbar-start prose w-1/2 md:w-1/4'>
            <h1 className='text-accent'>Andy Wu</h1>
          </div>
          <div className='navbar-center'>
          </div>
          <div className='navbar-end w-1/2 md:w-3/4'>
            <div className='hidden tabs gap-x-4 items-center justify-center md:flex'>
              <NavLink href='#project-list' label='Projects'/>
              <NavLink href='#experience' label='Experience'/>
              <NavLink href='#skills' label='Skills'/>
              <NavLink href='#tools' label='Tools'/>
            </div>
          </div>
        </section>
      </div>
        <section id='description' className='h-screen pt-20'>2</section>

        <section id='project-list' className='h-screen pt-20'>projects</section>
        <section id='experience' className='h-screen pt-20'>exp</section>
        <section id='skills' className='h-screen pt-20'>skills</section>
      

        <section id='tools' className='h-screen pt-20'>tools</section>

        <section id='footer' className='h-screen'>6</section>

    </div>
  )
}

export default App;
