import React from 'react'

function Profile() {
  return (
    <div className='h-screen'>
        <div className="w-1/3">
          <p className="text-7xl pb-8">Profile</p>
          <p className="text-2xl pb-4">
            Hey, I am a self taught UI/UX designer and Web-Developer, with a
            passion to learn new skills and technologies.
          </p>

          <p className="text-2xl">
            I am currently studying Computer Science in Mannheim. I am actively
            learning and doing Web-Developement since 2022.
          </p>
        </div>
        
        <p className="text-7xl pt-48">I can help buisinesses</p>
        <p className="text-7xl">Leave a lasting impression</p>
        <button className="mt-2 px-12 border border-white text-2xl py-1 rounded-full">
          How?
        </button>
    </div>
  )
}

export default Profile