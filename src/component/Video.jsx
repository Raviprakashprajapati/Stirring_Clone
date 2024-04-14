import React from 'react'

function Video() {
  return (
 <>
   <div className='flex flex-wrap justify-center items-center gap-5 mt-16 mb-9' >

<div>

<iframe
  width="500"
  height="400"
  src={`https://www.youtube.com/embed/igVKdmUTQoM`}
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  title="Embedded youtube"
/>     
</div>

<div className='p-6 bg-gray-100 w-[450px] ' >

    <div>
    <button className='bg-cyan-400 p-2 text-sm font-semibold text-white' >SCIENTIFICALLY PLAN YOUR CAREER</button>

    </div>

    <h3 className='mt-4 text-2xl text-black font-semibold' >A CAREER COUNSELLOR CAN CHANGE YOUR LIFE</h3>
    <p className='text-gray-500 mt-4' >CareerGuide.com brings to you personalized career counselling session along with scientific and meticulously designed Psychometric Career Assessment to discover your true potential and interest.</p>

    <div className='mt-5 text-center' >
        <button className='bg-red-600 mt-5 p-3 text-center font-semibold text-lg text-white' >VIEW PRICING</button>
    </div>
</div>



   </div>

<div className='flex justify-center mt-6 mb-9' >
<img src="https://www.careerguide.com/images-mcg/award-best-career-guidance.png" alt="" />
</div>
 </>
  )
}

export default Video
