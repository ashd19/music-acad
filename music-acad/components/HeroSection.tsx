"use client";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { BackgroundGradient } from "./ui/background-gradient";
import CardModal from "./CardModal";
import CourseDate from '../data/music_courses.json';

const HeroSection = () => {
     
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
           

      </div>
    </div>
  );
};

export default HeroSection;
