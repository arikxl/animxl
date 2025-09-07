import React from 'react'

const test = () => {
  return (
    
      <div className='grid grid-cols-1 md:grid-cols-2 gap-7'>

          {/* עמודה שמאלית (בדסקטופ) - תופסת 2 שורות גובה */}
          <div className='bento-tilt_1 md:row-span-2'>
              <BentoCard src='videos/feature-2.mp4'
                  title={<>zig<b>m</b>a</>}
                  desc='An anime and gaming-inspired NFT collection - the IP primed for expansion.'
              />
          </div>

          {/* פריט ראשון בעמודה הימנית (בדסקטופ) */}
          <div className='bento-tilt_1'>
              <BentoCard src="videos/feature-3.mp4"
                  title={<>ne<b>x</b>us</>}
                  desc='A pixeled social hub, adding a new dimension of animations to social interaction for artists communities.'
              />
          </div>

          {/* פריט שני בעמודה הימנית (בדסקט...
  )
}

export default test