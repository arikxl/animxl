import React, { useRef, useState } from 'react'
import Button from './Button';
import { TiLocationArrow } from 'react-icons/ti';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Hero = () => {
    const [currentIdx, setCurrentIdx] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedVideos, setLoadedVideos] = useState(0);

    const totalVideos = 4;

    // refs נפרדים: אחד לוידאו הראשי ואחד לוידאו הבא (לקרוס־פייד)
    const mainVidRef = useRef(null);
    const nextVidRef = useRef(null);

    const upcomingVideoIdx = (currentIdx % totalVideos) + 1;

    // קרוס־פייד state
    const [isFading, setIsFading] = useState(false);
    const [pendingIdx, setPendingIdx] = useState(null);

    const handleVideoLoad = () => {
        setLoadedVideos((prev) => prev + 1);
    };

    const getVideoSrc = (index) => `videos/hero-${index}.mp4`; // כמו אצלך

    // התחלת מעבר: טען את הווידאו הבא ל- next-video, הפעל אותו, והעלה שקיפות
    const handleMiniVideoClick = async () => {
        setHasClicked(true);

        const nextIdx = upcomingVideoIdx;
        const nextEl = nextVidRef.current;
        if (!nextEl) return;

        // טען את המקור הבא
        if (nextEl.src !== window.location.origin + '/' + getVideoSrc(nextIdx)) {
            nextEl.src = getVideoSrc(nextIdx);
            // הבטחה לשקט — חלק מהדפדפנים זקוקים ל-load מפורש
            try { nextEl.load?.(); } catch (_) { }
        }

        // הפעלה כדי להבטיח שאין פריים שחור בזמן הקרוס־פייד
        try { await nextEl.play(); } catch (_) { }

        setPendingIdx(nextIdx);
        setIsFading(true); // יפעיל opacity-100 ב- next-video
    };

    // כשהקרוס־פייד הסתיים, מחליפים את הוידאו הראשי ומחזירים את next למצב שקוף
    const handleFadeEnd = () => {
        if (!isFading || pendingIdx == null) return;

        setCurrentIdx(pendingIdx);
        setPendingIdx(null);
        setIsFading(false);

        // לעצור/לאפס את הווידאו הבא (אופציונלי)
        const nextEl = nextVidRef.current;
        if (nextEl) {
            try {
                nextEl.pause();
                nextEl.currentTime = 0;
            } catch (_) { }
        }

        // הבטח שהווידאו הראשי ממשיך לנגן (בעיקר ב-iOS)
        const mainEl = mainVidRef.current;
        if (mainEl) {
            mainEl.play?.().catch(() => { });
        }
    };

    useGSAP(() => {
        if (hasClicked) {
            gsap.set('#next-video', { visibility: 'visible' });

            gsap.to('#next-video', {
                transformOrigin: 'center center',
                scale: 1,
                width: '100%',
                height: '100%',
                duration: 1,
                ease: 'power1.inOut',
                onStart: () => nextVidRef.current.play()
            })
            
            gsap.from('#current-video', {
                transformOrigin: 'center center',
                scale: 0,
                duration: 1.5,
                ease: 'power1.inOut',
                
            })
        }
    }, {dependencies:[currentIdx], revertOnUpdate: true})

    return (
        <div className='relative h-dvh w-screen overflow-x-hidden'>
            <div id='video-frame' className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75'>
                <div>

                    {/* === תיבת מיני-תצוגה (כמו אצלך) === */}
                    <div className='mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg'>
                        <div
                            onClick={handleMiniVideoClick}
                            className='origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100'
                        >
                            <video
                                loop
                                src={getVideoSrc(upcomingVideoIdx)}
                                muted
                                id='current-video'
                                className='size-64 origin-center scale-150 object-cover object-center'
                                onLoadedData={handleVideoLoad}
                                playsInline
                                preload="metadata"
                            />
                        </div>
                    </div>

                    {/* === וידאו הבא לקרוס-פייד (מעל הראשי, שקוף כברירת מחדל) === */}
                    <video
                        ref={nextVidRef}
                        // src מתעדכן דינאמית בלחיצה, אז כאן אפשר להשאיר ריק בהתחלה
                        loop
                        muted
                        playsInline
                        preload="auto"
                        id='next-video'
                        className={`absolute left-0 top-0 z-20 size-full object-cover object-center pointer-events-none transition-opacity duration-300 ${isFading ? 'opacity-100' : 'opacity-0'}`}
                        onTransitionEnd={handleFadeEnd}
                        onLoadedData={handleVideoLoad}
                    />

                    {/* === הוידאו הראשי (נשאר מאחור, מחליף מקור רק אחרי שה-next נראה) === */}
                    <video
                        ref={mainVidRef}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        src={getVideoSrc(currentIdx)}
                        className='absolute left-0 top-0 size-full object-cover object-center'
                        onLoadedData={(e) => {
                            handleVideoLoad();
                            // ודא שמנגן אחרי החלפה
                            e.currentTarget.play().catch(() => { });
                        }}
                    />
                </div>
                <h1 className='special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75'>
                    G<b>a</b>ming
                </h1>

                <div className='absolute left-0 top-0 z-40 size-full'>
                    <div className='mt-10 px-5 sm:px-10'>
                        <h1 className='special-font hero-heading text-blue-100'>redefi<b>n</b>e</h1>
                        <p className='mb-5 max-w-64 font-robert-regular text-blue-100'>
                            Enter the Metagame Layer
                            <br />
                            Unleash the Play Economy
                        </p>
                        <Button id='watch-trailer' title='Watch Trailer' leftIcon={<TiLocationArrow />}
                        containerClass='bg-yellow-300 flex-center gap-1'/>
                    </div>
                </div>
            </div>

            <h1 className='special-font hero-heading absolute bottom-5 right-5 text-black'>
                G<b>a</b>ming
            </h1>
        </div>
    )
}

export default Hero
