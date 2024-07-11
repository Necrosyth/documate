"use client";
import React from "react";
import { Boxes } from "../ui/background-boxes";
import { cn } from "../../utils/cn";
import "./Hero.css";
import { GlobeDemo } from "../ui/GlobeDemo";



export function Hero() {
  return (
    <>
    
  
    <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">

      <div className="absolute inset-0 w-full h-full bg-slate-900 z-10 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
<Boxes />

      <div className="landing text-white z-20 pointer-events-none" >
      <header class="flex flex-col items-center justify-center p-4">
        <img src="./logo-no-background.png" class="w-72 h-32 mt-9" alt="img not found" />
    
    
    </header>         
                <div className="landing-center">
                    <div className="landing-left px-24 ">

                    <div className="main-title">
                        <h1>Welcome to DocuMate</h1>
                    </div>
                    <p>
                    DocuMate is a user-friendly tool that simplifies the process of creating README.md files for your Github profile. With DocuMate, you can easily create a README file that showcases your projects, skills, and interests.
                    </p>
                <button id="start" onClick={()=>navigate("/create-readme")}>Create Readme</button>
                    </div>
                    
                    <GlobeDemo/>
                    
                </div>
            </div>
    </div>
    </>
  );
}
