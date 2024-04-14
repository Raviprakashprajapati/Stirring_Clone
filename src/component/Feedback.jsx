import React from "react";

function Feedback() {
  return <>
  <div className="flex justify-center items-center mt-9 mb-9 gap-5 flex-wrap bg-gray-100 p-5" >

  <div>
      
      <iframe
  width="400"
  height="200"
  src={`https://www.youtube.com/embed/_5ThNUGLx4Y`}
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  title="Embedded youtube"
/>    

    </div>

    <div className="bg-white w-[400px] p-5" >
        <div>
        A special thanks to Surabhi ma'am for her guidance and career clarity. I highly recommend that anyone with confusion regarding their next career steps consult her for better clarity.
        </div>
        <div className="flex mt-4  justify-start items-center" >
            <img className="w-[4rem] rounded-full" src="https://www.careerguide.com/career/wp-content/uploads/2024/03/picture_editing.png" alt="" />
            <div className="ml-5">
                <p>Tanishi</p>
                <p className="text-gray-600">Graduate Degress/ Diploma</p>
            </div>
        </div>
    </div>

    <div>
      
      <iframe
  width="400"
  height="200"
  src={`https://www.youtube.com/embed/olu3CpIaGho`}
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  title="Embedded youtube"
/>    

    </div>


    
    <div className="bg-white w-[400px] p-5" >
        <div>
        I am grateful for the session with Ma'am. She was generous and resourceful with her inputs and she also gave her time beyond schedule.
        </div>
        <div className="flex mt-4  justify-start items-center" >
            <img className="w-[4rem] rounded-full" src="https://www.careerguide.com/career/wp-content/uploads/2024/03/picture_editing_2.png" alt="" />
            <div className="ml-5">
                <p>Dinesh Sharma</p>
                <p className="text-gray-600">Working Professional</p>
            </div>
        </div>
    </div>

    <div>
      
      <iframe
  width="400"
  height="200"
  src={`https://www.youtube.com/embed/O426vngPojM`}
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  title="Embedded youtube"
/>    

    </div>

        
    <div className="bg-white w-[400px] p-5" >
        <div>
        I found the session very informative regarding what can be done in the field of science other than MBBS and engineering. I am thankful for Ma'am's time and effort to answer everything.
        </div>
        <div className="flex mt-4  justify-start items-center" >
            <img className="w-[4rem] rounded-full" src="https://www.careerguide.com/career/wp-content/uploads/2024/03/picture_editing_3.png" alt="" />
            <div className="ml-5">
                <p>JEET Nabam</p>
                <p className="text-gray-600">12th Class</p>
            </div>
        </div>
    </div>

  </div>

  
  
  </>;
}

export default Feedback;
