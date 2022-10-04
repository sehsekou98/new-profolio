import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircle from './BackgroundCircles';
import Link from 'next/link'
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';






type Props = {
    pageInfo: PageInfo
}


 function AnimatedText({ name }: { name?: string | String }) {
    const [text, count] = useTypewriter({
        words: [
           `Hi, my Name's ${name}`,
            "Do you Love Coding?",
            "<Cause I Love Coding as Well/>",
        ],
        loop: true,
        delaySpeed: 2000,
    });

  return (
    <h1>
        <span className='text-5xl lg:text-6xl font-semibold
        scroll-px-10'>{text}</span>
        <Cursor/>
    </h1>
  );
}



export default function Hero({pageInfo}: Props) {
    

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center
    text-center overflow-hidden  text-blue-500'>
        <BackgroundCircle/>

        <img className='relative rounded-full  h-32
         w-32 mx-auto object-cover'
          src={urlFor(pageInfo?.heroImage).url()} 
         alt=''
         />
        
         <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
                {pageInfo?.role}
            </h2>

    <AnimatedText name={pageInfo?.name} />

    <div className='pt-5'>
        <Link href='#about'>
        <button className='heroButton'>About</button>
        </Link>
        <Link href='#experience'>
        <button className='heroButton'>Experience</button>
        </Link>
        <Link href='#skills'>
        <button className='heroButton'>Skills</button>
        </Link>
        <Link href='#projects'>
        <button className='heroButton'>Projects</button>
        </Link>
    </div>
    </div>
    </div>
  );
}



