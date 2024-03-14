import Image from 'next/image'
import Link from 'next/link'

import imgSrc from '/images/img.png'
const {log} = console

import data from './index.yaml'

const GridPage = (props) => {
    log(data)
    return (<>
        <div>
            <Link className="text-xl font-bold" href={'/'}>Home</Link>
        </div>
        <div className='px-8'>
            <div className='grid grid-cols-12 gap-2'>
                {data.dev.map((i, n) => {
                    return <div key={i} className={`grid-item col-span-4 overflow-hidden aspect-square flex justify-center items-center`}>
                        <Image  alt={i.replace(/-/g, ' ')} width={1920} height={1260} className='min-h-full w-auto' src={'/images/dev/'+i+'.png'} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                    </div>
                })}
            </div>
        </div>
    </>)
}

export default GridPage