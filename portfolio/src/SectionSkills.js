import Card from "./common/Card"

function SkillCard({label}) {
    return (
     <div className='flex justify-start md:justify-center items-center w-full'>
        <div className='prose-lg md:prose-xl'>{label}</div>
     </div>
    )
}

export default function SectionSkills({refProp}) {
    return (
        <div className='flex flex-col gap-y-8 px-4 md:px-16 items-center justify-center gap-2 h-full w-full'>
            <div ref={refProp} className='prose'>
                <h1 className='hidden border-b border-teal-400 md:block'>Skills</h1>
                <h2 className='border-b border-teal-400 md:hidden'>Skills</h2>
            </div>
            <div id='skill-set' className='grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 gap-16 w-full'>
                <Card title='Technical'>
                    <SkillCard label='Requirements Analysis'/>
                    <SkillCard label='Systems Design'/>
                    <SkillCard label='Solution Implementation'/>
                    <SkillCard label='Testing, Validation, Verification'/>
                    <SkillCard label='Troubleshooting'/>
                    <SkillCard label='Configuration Management'/>                    
                </Card>
                <Card title='Professional'>
                    <SkillCard label='Solution Demonstration'/>
                    <SkillCard label='Feedback Elicitation'/>
                    <SkillCard label='User Training andd Support'/>             
                    <SkillCard label='Document Management'/>
                </Card>
            </div>
        </div>
    )
}