import React from 'react'

function Cards() {
  return (
    <div className='flex justify-center md:justify-evenly items-center flex-wrap' >

            {/* card 1 */}
        <div className='flex mt-4  flex-col justify-center  border-cyan-500 border-2 p-9  lg:p-2 w-[80%] lg:w-[30%] mb-4' >

            <div className='m-auto'  >
                <button className='bg-cyan-500 p-3 text-sm text-black font-semibold lg:mt-8 text-center ' >CAREER REPORT</button>
            </div>

            <div className='m-auto'>
                <p className=' mt-7 font-semibold' ><del className='text-4xl '>1999 <sup>◻</sup> </del></p>
            </div>

            <div className='bg-blue m-auto' >
                <p className='mt-9 bg-cyan-500 pl-9 pr-9 pt-4 pb-4 text-4xl font-semibold text-white rounded-lg text-center ' >499 <sup>◻</sup></p>
            </div>

            <div className='m-auto'>                
                <p className='mt-12 text-center' ><span>◻</span>1 PSYCHOMETRIC CAREER REPORT <span>◻</span></p>
            </div>

            <div className='m-auto' >
                <p className='mt-20 font-sans text-center ' >
                A SCIENTIFICALLY PREPARED PSYCHOMETRIC TEST
               TO HELP YOU EVALUATE THE BEST VERSION OF YOURSELF
                </p>
            </div>

            <div className='m-auto' >
                <div className='border-2 mt-8 border-black  pt-3 pb-3 pl-5 pr-5 font-bold hover:bg-black hover:text-white lg:mb-9 ' >GET STARTED </div>
            </div>

        </div>


            {/* card 2 */}
        <div className='flex mt-4 flex-col justify-center  border-cyan-500 border-2  p-9  lg:p-2 w-[80%] lg:w-[30%] mb-4' >

            <div className='m-auto'  >
                <button className='bg-cyan-500 lg:mt-8 p-3 text-sm text-black font-semibold text-center ' >RECOMMENDED PLAN</button>
            </div>

            <div className='m-auto'>
                <p className=' mt-7 font-semibold' ><del className='text-4xl '>4999 <sup>◻</sup> </del></p>
            </div>

            <div className='bg-blue m-auto' >
                <p className='mt-9 bg-cyan-500 pl-9 pr-9 pt-4 pb-4 text-4xl font-semibold text-white rounded-lg text-center ' >3,499 <sup>◻</sup></p>
            </div>

            <div className='m-auto'>                
                <p className='mt-12 text-center' ><span>◻</span>2 PSYCHOMETRIC CAREER REPORT <span>◻</span></p>
            </div>

            <div className='m-auto'>                
                <p className='mt-2 text-center underline' ><span>◻</span>1 VIDEO CAREER COUNSELLING SESSION <span>◻</span></p>
            </div>

            <div className='m-auto' >
                <p className='mt-20 hover:text-cyan-400 font-sans text-center ' >
                GRAB THIS FANTASTIC OPPORTUNITY FOR A CAREER COUNSELING SESSION WITH A CERTIFIED EXPERT CAREER GUIDE WHO WILL HELP YOU IN EVERY STEP OF YOUR CAREER PLANNING
                </p>
            </div>

            <div className='m-auto' >
                <div className='border-2 mt-8 border-black  pt-3 pb-3 pl-5 pr-5 font-bold hover:bg-black hover:text-white lg:mb-9 ' >GET STARTED </div>
            </div>

            </div>


            {/* card 3 */}

            <div className='flex mt-4 flex-col justify-center  border-cyan-500 border-2  p-9  lg:p-2 w-[80%] lg:w-[30%] mb-4 bg-cyan-500' >

                <div className='m-auto'  >
                    <button className='bg-white text-black p-3 text-sm  font-semibold lg:mt-8 text-center ' >OUR MOST POPULAR CAREER PLAN</button>
                </div>

                <div className='m-auto'>
                    <p className=' mt-7 font-semibold' ><del className='text-4xl '>9,999 <sup>◻</sup> </del></p>
                </div>

                <div className='bg-blue m-auto' >
                    <p className='mt-9 bg-white pl-9 pr-9 pt-4 pb-4 text-4xl font-semibold text-cyan-400 rounded-lg text-center ' >6,999 <sup>◻</sup></p>
                </div>

                <div className='m-auto'>                
                    <p className='mt-12 text-center' ><span>◻</span>3 PSYCHOMETRIC CAREER REPORT <span>◻</span></p>
                </div>

                <div className='m-auto'>                
                    <p className='mt-2 text-center underline' ><span>◻</span>4 VIDEO CAREER COUNSELLING SESSION <span>◻</span></p>
                </div>

                <div className='m-auto' >
                    <p className='mt-20 text-gray-700 hover:text-white font-sans  text-center ' >
                    WHETHER YOU ARE A STUDENT OR A WORKING PROFESSIONAL, WE PREPARE A PERSONALISED ROADMAP CATERING TO EACH REQUIREMENT OF YOURS. WE COVER ALL ASPECTS, FROM PLANNING FOR YOUR EDUCATION AHEAD TO HELPING YOU CHOOSE THE RIGHT CAREER AND GUIDING YOU TO GROW IN YOUR CHOSEN JOB.


                    </p>
                </div>

                <div className='m-auto' >
                    <div className='border-2 mt-8 border-black  pt-3 pb-3 pl-5 pr-5 font-bold hover:bg-black lg:mb-9 hover:text-white ' >GET STARTED </div>
                </div>

                </div>
      
    </div>
  )
}

export default Cards
