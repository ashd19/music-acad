"use client";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

import CardModal from "./CardModal";
import CourseDate from '../data/music_courses.json';
import { StickyScroll } from "./ui/sticky-scroll-reveal";
// use coures as a component


const HeroSection = () => {
  const musicContent =[
        {
    title: "Beginner Guitar Lessons",
    description: "Start your guitar journey with easy-to-learn chords and strumming patterns. Play your first songs in a few weeks. Fun, interactive, and perfect for beginners."
  },
  {
    title: "Advanced Piano Mastery",
    description: "Take your piano skills to the next level with advanced techniques and expressive playing. Learn complex pieces and improve your music theory knowledge. Ideal for serious learners."
  },
  {
    title: "Vocal Training for Beginners",
    description: "Develop a strong, confident voice through proper breathing, pitch control, and vocal exercises. Learn techniques to sing different genres. Build your singing foundation from scratch."
  },
  {
    title: "Music Production with Ableton",
    description: "Learn to create, mix, and produce your own tracks using Ableton Live. Understand digital effects, sampling, and sound design. Perfect for aspiring music producers."
  },
  {
    title: "Jazz Drumming Essentials",
    description: "Master the fundamentals of jazz drumming and improve your rhythm and timing. Explore grooves, fills, and improvisation. A great class for budding drummers."
  },
  {
    title: "Classical Violin Techniques",
    description: "Learn classical violin techniques, scales, and expressive playing. Develop proper posture, bowing, and fingering skills. Perfect for students aiming to excel in classical music."
  },
  {
    title: "Songwriting Basics",
    description: "Discover the art of writing songs with melody, lyrics, and chord progressions. Learn how to structure songs and express your creativity. Ideal for beginners and hobbyists."
  },
  {
    title: "Electronic Music Composition",
    description: "Produce electronic tracks using synthesizers, samples, and digital effects. Learn composition, arrangement, and mixing techniques. Perfect for EDM and electronic music enthusiasts."
  },
  {
    title: "Ukulele for Beginners",
    description: "Learn to play simple chords and songs on the ukulele. Explore strumming patterns and fingerpicking techniques. Fun and easy for all ages."
  },
  {
    title: "Music Theory Essentials",
    description: "Understand scales, chords, harmony, and rhythm fundamentals. Learn to read sheet music and apply theory to your instrument. A must for all aspiring musicians."
  }
    ]
     
  const featuredCourses = CourseDate.filter((course)=> course.is_featured);

  return (
    <div className="relative mt-50 top-0 left-0 h-auto md:[40rem] w-full rounded-md flex-col items-center justify-center overflow-hidden mx-auto py-10 md:py-0 bg-black">
      {/* ✨ Shooting star background effect */}
      <span className="shooting-star"></span>

      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="text-7xl font-mono font-semibold mb-5 text-white">
          Master the Art of Music
        </h1>
        <p className="text-2xl font-mono font-semibold text-gray-300">
          Dive into the comprehensive music courses and transform your musical
          journey today. <br />
          Whether you're a beginner or looking to refine your skills , join us
          to unlock your true potential.
        </p>

        <div className="button  mb-10 mt-8 flex justify-center">
          <Link href="/courses">
            <div className="relative inline-block p-[3px] rounded-xl overflow-hidden">
              <span className="absolute inset-0 rounded-xl bg-[conic-gradient(from_0deg,transparent,transparent,white,transparent,transparent)] animate-spin-slow"></span>
              <Button className="relative z-10 text-2xl font-bold font-mono w-70 h-15 bg-black rounded-xl">
                Explore courses
              </Button>
             
            </div>
          </Link> 

        </div> 



         {/* backend  , let the admin ...// course // creator login ( your courses) create  like in djagno eg */}
        <div className="featuredCourses  w-full h-full bg-cyan-950  py-10 px-10 rounded-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
         {
           featuredCourses.map(
            (course)=>(
              <CardModal 
               key={course.id}
               title={course.title}
               description={course.description}
               details={course.details}
               onCancel={()=>alert("Cancelled")}
               onDeploy={()=>alert("Added")}


              />
            )

            
           )
            
           

         }
     
        </div>
            <div className="ml-[350px] w-full text-center text-4xl font-bold font-mono bg-emerald-900">
       
      </div>
           <div className="whychooseUs">
            <h1 className="text-4xl font-bold font-mono " >Why choose us ?</h1>
           <StickyScroll content={musicContent}/>
           </div>

      </div>
    </div>
  );
};

export default HeroSection;
