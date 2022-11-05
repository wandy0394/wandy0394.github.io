import './app-styles.css';
import './project-styles.css';
import {useEffect, useState} from 'react'
import {AiOutlineConsoleSql, AiOutlineHtml5} from 'react-icons/ai'
import {FaHtml5 as IconHtml, FaCss3Alt as IconCSS, FaReact as IconReact, FaNodeJs as IconNode, } from 'react-icons/fa'

function ProjectList( {isactive}) {

    console.log(isactive)
    return (
        <div className={isactive ? 'page-project active' :'page-project inactive'}>
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
    );
}

export default ProjectList