import Image from 'next/image'
import Link from 'next/link'

import data from './index.yaml'
const {log} = console

const SlidePage = (props) => {
    log(data)
    return (<>
        <div>
            <Link className="p-2 text-xl font-bold" href={'/'}>Home</Link>
            <Link className="p-2 text-xl font-bold" href={'/slides'}>Slides</Link>
        </div>
        <div className='px-8 py-4'>
            <div className='grid grid-cols-12 gap-4'>
                {data.images.map((i, n) => {
                    return <div key={i} className={`grid-item col-span-4 overflow-hidden aspect-square flex justify-center items-center`}>
                        <Image  width={1920} height={1260} className='min-h-full w-auto' src={'/images/dev/'+i+'.png'} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt={i.replace(/-/g, ' ')}/>
                    </div>
                })}
            </div>
        </div>
    </>)
}

export default SlidePage