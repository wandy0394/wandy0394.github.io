
import './app-styles.css';
import {useEffect, useState} from 'react'
import {AiOutlineConsoleSql, AiOutlineHtml5} from 'react-icons/ai'
import {FaHtml5 as IconHtml, FaCss3Alt as IconCSS, FaReact as IconReact, FaNodeJs as IconNode, } from 'react-icons/fa'

function Bio() {

    return (
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
    );
}

export default Bio