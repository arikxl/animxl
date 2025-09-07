import React from 'react'
import BentoCard from './BentoCard'
import { TiLocationArrow } from 'react-icons/ti'
import BentoTilt from './BentoTilt'

const Features = () => {
    return (
        <section className='bg-black pb-22' >
            <div className='container mx-auto px-3 md:px-10'>
                <div className='px-5 py-32' id='prologue'>
                    <p className='font-circular-web text-lg text-blue-50' >
                        Into the MetaFrame Layer
                    </p>

                    <p className='max-w-md font-circular-web text-lg text-blue-50 opacity-50'>
                        Explore AnimXL's Native Products
                        AnimXL brings together human experience, agentic AI, and living data, unlocking new dimensions of value creation, monetization, and distribution.
                    </p>
                </div>

                {/* <div id='features'/> */}

                <BentoTilt  className='border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]'>
                    <BentoCard src="/videos/feature-1.mp4"
                        title={<>radia<b>n</b>t</>}
                        desc='A cross-platform MetaFrame app, turning your animations into a rewarding adventure.'
                    />
                </BentoTilt>

                <div className="grid gap-7 md:grid-cols-2 h-[135vh]">
                    {/* שמאל – תופס 2 שורות */}
                    <BentoTilt className="md:row-span-2" id='features'>
                        <BentoCard
                            src="/videos/feature-2.mp4"
                            title={<>zig<b>m</b>a</>}
                            desc="An anime and gaming-inspired NFT collection - the IP primed for expansion."
                        />
                    </BentoTilt>

                    {/* ימין למעלה */}
                    <BentoTilt className='ms-32 md:ms-0' id='nexus' sectionId='#nexus'
>

                        {/* <div className='bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0'> */}
                        <BentoCard
                            src="/videos/feature-3.mp4"
                            title={<>ne<b>x</b>us</>}
                            desc="A pixeled social hub, adding a new dimension of animations to social interaction for artists communities."
                        />
                    </BentoTilt>

                    {/* ימין למטה */}
                    <BentoTilt className='me-14  md:me-0'>
                        {/* <div className='bento-tilt_1 me-14 md:col-span-1 md:me-0'> */}
                        <BentoCard
                            src="/videos/feature-4.mp4"
                            title={<>az<b>u</b>l</>}
                            desc="A cross-world AI Agent - elevating your works to be more fun and productive."
                        />
                    </BentoTilt>
                </div>

                <div className="mt-7 grid grid-cols-2 gap-7 w-full">

                    <BentoTilt className='bento-tilt_2'>
                        <div className='flex size-full flex-col justify-between bg-violet-300 p-5'>
                            <h1 className='bento-title special-font max-w-64 text-black'>
                                M<b>o</b>re co<b>m</b>ing so<b>o</b>n!
                            </h1>
                            <TiLocationArrow className="m-5 scale-[5] self-end" />
                        </div>
                    </BentoTilt>


                    <BentoTilt className='bento-tilt_2'>
                        <video
                            src='videos/feature-5.mp4'
                            loop muted autoPlay
                            className='size-full object-cover object-center'
                        />
                    </BentoTilt>
                </div>



            </div>
        </section>
    )
}

export default Features