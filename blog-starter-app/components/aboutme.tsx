
import React from 'react';

import ReactDOM from 'react-dom'




const AboutMe = () => {
  return (
    <div className="container">
      <div className="header flex justify-center items-center">
        <h2 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-4xl">About me</h2>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-center md:justify-start mt-4">
        <div className="imag rounded-2xl mb-4 md:mb-0 md:mr-4" style={{ width: '5000px', height: '390px' }}>
          {/* Adjust width and height as needed */}
          <img src="/assets/blog/authors/nick.jpeg" className=" " alt="Profile" />
        </div>

        <div className="main-text">
          <h2 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-20">Bio</h2>
          <p className="main-text mt-2">
            I have studied mechanical engineering for the past 7 years from 2013 to 2020 at Baker College in Flint.
            Graduating into the pandemic, I got a job as a remote worker as a mortgage underwriter at Rocket.
            I always love teaching/tutoring/mentoring. My first job was at college as a Math tutoring where I tutored learners from pre-algebra all the way to Calculus 1. When I heard about the Apple Developer Academy, I thought it was too good to be true. The fact there it was actually in the heart of Detroit and not in Royal Oak like the Detroit zoo. You get offered free tech, parking, and a stipend of a qualify and all you have to do is just show up and be a team player.

Entering the space and for the first time, I didn’t feel like the minority, I was just excited to learn and pass knowledge on to my classmates to help them excel in their personal endeavors.
 Im excited to be a mentor and a role model as a Detroit native.


            Applied to the Apple Developer Academy in downtown Detroit in hopes to switch careers into the Tech Field.
            Made it through the 10-month program and got hired as a coding mentor. 
As a mentor Im most excited to meet new people, make new connections, and strengthened my existing connections.
          </p>
          <p>
            I have a YouTube channel where I do course content on iOS development and day-in-the-life videos. I also
            have a freelance company where I produce apps for clients throughout the Detroit area.
          </p>


        

<h2 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-5">Skills </h2>
  <ul id="skill-list">

    <li>iOS Development</li>
    <li>Web Development</li>
    <li>Design process</li>
    <li>Project Manager</li>


  </ul>

        </div>


        
      </div>








      
    </div>
  );
};

export default AboutMe;