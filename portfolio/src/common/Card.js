export default function Card({title, children}) {
    return (
        <div className='flex flex-col items-center bg-gray-800 shadow-xl'>
        <div className='prose-lg bg-base-300 w-full align-middle text-center h-10'>{title}</div>
        <div className='flex flex-col items-center gap-y-4 py-4 px-4 md:px-20 h-full'>
            <div className='flex w-full flex-col gap-y-8'>
                {children}
            </div>
        </div>
    </div>        
    )
}