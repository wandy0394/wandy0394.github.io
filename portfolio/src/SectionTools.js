
import {IoLogoJavascript as IconJavascript} from 'react-icons/io'
import {FaHtml5 as IconHtml, FaCss3Alt as IconCSS, FaReact as IconReact, FaNodeJs as IconNode, FaFileCode as IconScript, FaFileExcel as IconExcel} from 'react-icons/fa'
import {SiPowershell as IconPowerShell, SiTypescript as IconTypescript} from 'react-icons/si'
import {GrMysql as IconSQL} from 'react-icons/gr'
function ToolSetCard({children}) {
    return (
    <div className='flex flex-col items-center border gap-y-4 py-4 px-20 bg-gray-900'>
        {children}
      </div>
    )
}

function ToolCard({children}) {
    return (
     <div className='flex max-w-xs items-center gap-x-4 px-2 border-b border-solid  border-slate-500'>
       {children}
     </div>
    )
}
export default function SectionTools() {
    return (
        <div className='flex flex-col gap-y-8 items-center justify-center h-full'>
            <div className='prose'>
                <h1 className='border-b border-teal-400'>Tools</h1>
            </div>
            {/* <div id='tool-set' className='flex gap-16 h-full w-full items-start justify-center flex-wrap'> */}
            <div id='tool-set' className='grid grid-rows-3 lg:grid-rows-2 lg:grid-cols-2 xl:grid-rows-1 xl:grid-cols-3 gap-16'>
            
            <ToolSetCard>
                <div className='prose-xl'>Frontend</div>
                <div className='flex max-w-xs w-full flex-col gap-y-4'>
                <ToolCard>
                    <IconHtml size={30} className='' color='#f06529'/>
                    <div className='prose-2xl'>HTML</div>
                </ToolCard>
                <ToolCard>
                    <IconCSS size={30}  className='' color='#2965f1'/>
                    <div className='prose-2xl'>CSS</div>
                    </ToolCard>
                <ToolCard>
                    <IconJavascript size={30}  className=''color='goldenrod'/>
                    <div className='prose-2xl'>Javascript</div>
                    </ToolCard>
                
                <ToolCard>
                    <IconTypescript size={30}  className=''color='#007acc'/>
                    <div className='prose-2xl'>Typescript</div>
                    </ToolCard>
                <ToolCard>
                    <IconReact size={30} className='' color='#61DBFB'/>
                    <div className='prose-2xl'>React</div>
                </ToolCard>
                </div>
            </ToolSetCard>
            <ToolSetCard>
                <div className='prose-xl'>Backend</div>
                <div className='flex max-w-xs w-full flex-col gap-y-4'>
                <ToolCard>
                    <IconNode size={30} className='' color='#68A063'/>
                    <div className='prose-2xl'>NodeJS</div>
                </ToolCard>
                <ToolCard>
                    <IconSQL size={30} className='' color='#2965f1'/>
                    <div className='prose-2xl'>mySQL</div>
                </ToolCard>
                </div>
            </ToolSetCard>
            <ToolSetCard>
                <div className='prose-xl'>Scripting</div>
                <div className='flex max-w-xs w-full flex-col gap-y-4'>
                <ToolCard>
                    <IconPowerShell size={30} className='' color='#008DED'/>
                    <div className='prose-2xl'>PowerShell</div>
                </ToolCard>
                <ToolCard>
                    <IconScript size={30} className='' color='#254768'/>
                    <div className='prose-2xl'>AutoIt</div>
                </ToolCard>
                <ToolCard>
                    <IconScript size={30} className=''color='grey'/>
                    <div className='prose-2xl'>Bash</div>
                </ToolCard>
                <ToolCard>
                    <IconExcel size={30} className='' color='#1d6f42'/>
                    <div className='prose-2xl'>VBA</div>
                </ToolCard>
                </div>
            </ToolSetCard>
            </div>
        </div>
    )
}