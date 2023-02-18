function ExperienceCard({duration, years, title, subtitle, company}) {
    return (
        <div className='flex w-full'>
            <div className='hidden md:grid items-center justify-center bg-base-300 stat w-1/3'>
                <div className='stat-title'>Years</div>
                <div className='stat-value'>
                    <div className='text-accent'>{years}</div>                   
                </div>
                <div className='stat-desc whitespace-pre-wrap'>{duration}</div>
            </div>
            <div className='w-full grid grid-rows-[3fr_1fr] md:grid-rows-1'>
                <div className='w-full prose flex flex-col gap-4 p-8 bg-gray-800'>
                    <h2>{title}</h2>
                    <h3>{subtitle}</h3>
                    <p>{company}</p>
                </div>
                <div className='w-full h-full grid grid-cols-2 items-center justify-center bg-base-300 px-4 md:hidden'>
                    <div className='prose flex items-center justify-center'>
                        <div className='text-4xl font-black text-accent text-center'>{years}</div>                   
                        <div className='text-center'>{ (parseInt(years) > 1 ? 'Years' : 'Year')}</div>
                    </div>
                    <div className='whitespace-pre-wrap'>{duration}</div>
                </div>
            </div>
        </div>
    )
}


export default function SectionExperience() {
    return (
        <div className='flex flex-col gap-y-8 items-center justify-center h-full w-full px-0 md:px-16 md:py-24'>
            <div className='prose'>
                <h1 className='hidden border-b border-teal-400 md:block'>Experience</h1>
                <h2 className='border-b border-teal-400 md:hidden'>Experience</h2>
            </div>
            <div className='grid grid-rows-3 gap-8 items-center justify-center'>
                <ExperienceCard 
                    duration='Jan 2020 - Now' 
                    years='3'
                    title='Systems Engineer'
                    subtitle='Naval Communications Systems'
                    company='Thales Australia'
                />
                <ExperienceCard 
                    duration='Jun 2017 - Jun 2018' 
                    years='1'
                    title='Engineering Intern'
                    subtitle='VBA Developer'
                    company='Schneider Electric'
                />
                <ExperienceCard 
                    duration='Jun 2016 - Apr 2017' 
                    years='1'
                    title='Undergraduate Electrical Engineer'
                    subtitle='Building Services Consultant'
                    company='AECOM Sydney'
                />
            </div>
        </div>
    )
}