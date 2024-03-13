import React from "react";

function Profile() {
  return (
    <div className="h-screen">
      <div className="w-1/3">
        
        <p className="text-8xl pb-8">Profile</p>
        <div>
          <div className="flex justify-between w-96 items-center text-lg border-2 border-white py-2 px-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chevron-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
              />
            </svg>
            <p>ImageName</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
              />
            </svg>
          </div>
          <img src="/images/affen-selfie-peta-david-slater.jpg" className="cover" alt="" />
        </div>
        <p className="text-2xl pb-4">
          Hey, I am a self taught UI/UX designer and Web-Developer, with a
          passion to learn new skills and technologies.
        </p>

        <p className="text-2xl">
          I am currently studying Computer Science in Mannheim. I am actively
          learning and doing Web-Developement since 2022.
        </p>
      </div>
      {/*
                  <p className="text-8xl pt-48">I help buisinesses</p>
        <p className="text-8xl">Leave a lasting impression</p>
          */}
    </div>
  );
}

export default Profile;
