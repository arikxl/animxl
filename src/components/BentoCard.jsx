import React from 'react'

const BentoCard = ({ src, title, desc }) => {
    return (
        <div className='relative size-full'>
            <video src={src}
                loop muted autoPlay
                className='absolute left-0 top-0 size-full object-cover object-center'
            />
            <div className='relative z-10 flex size-full flex-col justify-between p-5 text-blue-50'>
                <div>
                    <h1 className='bento-title special-font'>{title}</h1>
                    {
                        desc && (
                            <p className='mt-3 max-w-64 text-sm md:text-base'>{desc}</p>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default BentoCard