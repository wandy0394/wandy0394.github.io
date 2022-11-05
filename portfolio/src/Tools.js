
// import './AppVariant.css';
import './app-styles.css';
import './tool-styles.css';
import {useEffect, useState} from 'react'
import {AiOutlineConsoleSql, AiOutlineHtml5} from 'react-icons/ai'
import {IoLogoJavascript as IconJavascript} from 'react-icons/io'
import {FaHtml5 as IconHtml, FaCss3Alt as IconCSS, FaReact as IconReact, FaNodeJs as IconNode, } from 'react-icons/fa'

function Tools( {isactive}) {

    console.log(isactive)
    return (
        <div className={isactive ? 'page-tool active' :'page-tool inactive'}>
            <div className='tools-grid'>
                <div className='tool'>
                    <IconHtml className='tool-icon' color='#f06529'/>
                    <div className='tool-label'>HTML5</div>
                </div>
                <div className='tool'>
                    <IconCSS className='tool-icon' color='#2965f1'/>
                    <div className='tool-label'>CSS</div>
                </div>
                <div className='tool'>
                    <IconReact className='tool-icon' color='#61DBFB'/>
                    <div className='tool-label'>ReactJS</div>
                </div>
                <div className='tool'>
                    <IconNode className='tool-icon' color='#68A063'/>
                    <div className='tool-label'>NodeJS</div>
                </div>
                <div className='tool'>
                    <IconJavascript className='tool-icon'color='goldenrod'/>
                    <div className='tool-label'>Javascript</div>
                </div>

            </div>
            
            
            
            
            
            
        </div>
    );
}

export default Tools