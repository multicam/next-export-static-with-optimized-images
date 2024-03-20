import Image from 'next/image'
import Flickity from "react-flickity-component";

import "flickity/css/flickity.css";

function Carousel() {
    return (
        <Flickity>
            <Image width={1200}  height={940} style={{ marginLeft: 5, marginRight: 5 }} src="/images/dev/orange-horn-mod-10-hd.png" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
            <Image width={1200}  height={940} style={{ marginLeft: 5, marginRight: 5 }} src="/images/dev/pink-megaphone.png" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
        </Flickity>
    );
}
import Link from 'next/link'

import data from './index.yaml'
const {log} = console

const SlidePage = (props) => {
    log(data)
    return (<>
        <div>
            <Link className="p-2 text-xl font-bold" href={'/'}>Home</Link>
            <Link className="p-2 text-xl font-bold" href={'/grid'}>Grid</Link>
        </div>
        <div className='px-8 py-4 h-32'>
            <Carousel />
        </div>
    </>)
}

export default SlidePage
