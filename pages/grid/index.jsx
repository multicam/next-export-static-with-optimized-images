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
                        <Image  className='min-h-full w-auto' src={'/images/dev/'+i+'.png'} width={1920} height={1281} sizes="(min-width: 768px) 720px, 85vw"/>
                    </div>
                })}
            </div>
        </div>
    </>)
}

export default GridPage