
function SkillCard({label}) {
    return (
     <div className='flex items-center w-full'>
        <div className='prose-lg md:prose-xl'>{label}</div>
     </div>
    )
}

export default function SectionSkills() {
    return (
        <div className='flex flex-col gap-y-8 px-4 md:px-16 items-center justify-center gap-2 h-full w-full'>
            <div className='prose'>
                <h1 className='border-b border-teal-400'>Skills</h1>
            </div>
            <div id='skill-set' className='grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 gap-16'>
                <div className='flex flex-col items-center border bg-gray-800'>
                    <div className='prose-lg bg-base-300 w-full align-middle text-center h-10'>Technical</div>
                    <div className='flex flex-col items-center gap-y-4 py-4 px-4 md:px-20 h-full'>
                        <div className='flex w-full flex-col gap-y-8'>
                            <SkillCard label='Requirements Analysis'/>
                            <SkillCard label='Systems Design'/>
                            <SkillCard label='Solution Implementation'/>
                            <SkillCard label='Testing, Validation and Verification'/>
                            <SkillCard label='Troubleshooting'/>
                            <SkillCard label='Configuration Management'/>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center border bg-gray-800'>
                    <div className='prose-lg bg-base-300 w-full align-middle text-center h-10'>Professional</div>
                    <div className='flex flex-col items-center gap-y-4 py-4 px-4 md:px-20 h-full'>
                        <div className='flex w-full flex-col gap-y-4'>
                            <SkillCard label='Solution Demonstration'/>
                            <SkillCard label='Feedback Elicitation'/>
                            <SkillCard label='User Training andd Support'/>             
                            <SkillCard label='Documentation Management'/>
                        </div>
                    </div>                
                </div>
            </div>
        </div>
    )
}