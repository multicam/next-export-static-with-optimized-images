import Image from 'next/image'
import Link from 'next/link'

import imgSrc from '../images/img.png'

const IndexPage = () => {
    return (<>
        <div>
            <Link className="text-xl font-bold" href={'/grid'}>Grid</Link>
        </div>
        <div style={{width: '75vw', maxWidth: '960px', margin: '0 auto'}}>
            <Image src={imgSrc} priority/>

            <Image src="/images/img.png" width={1920} height={1281} sizes="(min-width: 768px) 720px, 85vw"/>
        </div>
    </>)
}

export default IndexPage