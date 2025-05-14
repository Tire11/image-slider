// import React, { useState } from 'react'
// import { descriptions, images } from '../data'
// import { ArrowLeft, ArrowRight } from 'lucide-react'

// const getRandomNumber = () => Math.floor(Math.random() * 41) - 20;

// const Slider = () => {
//     const [index, setIndex] = useState(0)
//     return (
//         <div className='relative'>
//             {/* Slider */}
//             <div className='flex gap-x-20 lg:items-start items-center lg:flex-row flex-col'>
//                 {/* Image */}
//                 <div className='sm:w-[400px] sm:h-[400px] w-[300px] h-[300px] relative'>
//                     {images.map((image, i) => (
//                         <img key={i} src={image} width={500} alt="image" className={`w-full h-full absolute object-cover rounded-3xl transition-all duration-300 ${i === index ? "activeImg" : "inactiveImg"}`} style={{ transform: `rotate(${index === i ? 0 : getRandomNumber()}deg)` }} />
//                     ))}
//                 </div>
//                 {/* Description */}
//                 <div className='relative sm:w-[400px] w-[320px] mt-22 lg:mt-5 '>{descriptions.map((desc, i) => <p className={`text-center sm:text-xl text-gray-600 absolute transition-all duration-300 ${i === index ? "activeDesc delay-200" : "inactiveDesc"}`} key={i}>{desc}</p>)}</div>
//             </div>
//             {/* Controls  */}
//             <div className='absolute bottom-0 lg:-bottom-20 left-1/2 -translate-x-1/2 flex gap-x-5'>
//                 <button className='bg-gray-100 p-1.5 cursor-pointer rounded-full text-gray-600 hover:bg-gray-200 transition-colors'>
//                     <ArrowLeft size={18} onClick={() => setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))} />
//                 </button>
//                 <button className='bg-gray-100 p-1.5 cursor-pointer rounded-full text-gray-600 hover:bg-gray-200 transition-colors' onClick={() => setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}>
//                     <ArrowRight size={18} />
//                 </button>
//             </div>
//         </div>
//     )
// }

// export default Slider


import React, { useState } from 'react'
import { descriptions, images } from '../data'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const getRandomNumber = () => Math.floor(Math.random() * 41) - 20;

const Slider = () => {
    const [index, setIndex] = useState(0)

    return (
        <div className='relative px-4 py-10 w-full max-w-6xl mx-auto'>
            {/* Slider */}
            <div className='flex flex-col lg:flex-row items-center lg:items-start gap-y-10 gap-x-20'>
                {/* Image */}
                <div className='w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] relative shrink-0'>
                    {images.map((image, i) => (
                        <img
                            key={i}
                            src={image}
                            alt="image"
                            className={`w-full h-full absolute object-cover rounded-3xl transition-all duration-300 ${i === index ? "opacity-100 scale-100 z-10" : "opacity-0 scale-90 z-0"}`}
                            style={{ transform: `rotate(${index === i ? 0 : getRandomNumber()}deg)` }}
                        />
                    ))}
                </div>

                {/* Description */}
                <div className='relative w-full max-w-md min-h-[100px] sm:min-h-[120px] mt-4'>
                    {descriptions.map((desc, i) => (
                        <p
                            key={i}
                            className={`absolute text-center text-gray-400 text-sm sm:text-base md:text-lg px-4 transition-all duration-300 ${i === index ? "opacity-100 translate-y-0 z-10" : "opacity-0 translate-y-5 z-0"}`}
                        >
                            {desc}
                        </p>
                    ))}
                </div>
            </div>

            {/* Controls */}
            <div className='mt-10 flex justify-center gap-x-5'>
                <button
                    className='bg-gray-100 p-2 rounded-full text-gray-600 hover:bg-gray-200 transition-colors'
                    onClick={() => setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
                >
                    <ArrowLeft size={18} />
                </button>
                <button
                    className='bg-gray-100 p-2 rounded-full text-gray-600 hover:bg-gray-200 transition-colors'
                    onClick={() => setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
                >
                    <ArrowRight size={18} />
                </button>
            </div>
        </div>
    )
}

export default Slider

