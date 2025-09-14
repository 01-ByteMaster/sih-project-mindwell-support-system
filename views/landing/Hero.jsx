
// src/components/Hero.js
import React from 'react';

const Hero = () => {
  return (
    <div className="@container">
      <div className="@[480px]:p-4">
        <div
          className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-2xl items-center justify-center p-4"
          style={{
            backgroundImage:
              'linear-gradient(to top, rgba(37, 79, 74, 0.7) 0%, rgba(37, 79, 74, 0.2) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAV58B7ANnXzKiYHbtAY5fTfZjAMgHEA61R_6LOXfLB3Gm3y3tHQ91Y6xB5dLd4Hr6D67BB7tJ-5pkFQORGCiaOO4JNSxN-X1rsGmcaJx7x4nljKGrBfRi4oICHXy2LecED_u_gjTAtlGWDebsCK22bX3SR_2B4iobpvlGNozEetDVWqwI9L9RjDM4t8lPbDhPM1ALa6eeByUj5KROoHCRCC9y7On9cG5aJr3p2WhTIQs4Jjt0f92vVABZ88NtUwV2hae8yVnmIWw")',
          }}
        >
          <div className="flex flex-col gap-4 text-center text-white">
            <h1 className="text-4xl font-bold leading-tight tracking-tighter @[480px]:text-6xl @[480px]:font-bold @[480px]:leading-tight @[480px]:tracking-tighter">
              Your Safe Space for Mental Wellbeing
            </h1>
            <h2 className="text-base font-normal leading-normal @[480px]:text-lg @[480px]:font-normal @[480px]:leading-normal max-w-2xl mx-auto">
              Find support, resources, and a community that understands. We're here for you, every step of the way.
            </h2>
          </div>
          <div className="flex-wrap gap-4 flex justify-center">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 @[480px]:h-14 @[480px]:px-8 bg-white text-[var(--primary-800)] text-base font-bold leading-normal tracking-[0.015em] @[480px]:text-lg @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] hover:bg-gray-100 transition-colors duration-200">
              <span className="truncate">Chatbot Support</span>
            </button>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 @[480px]:h-14 @[480px]:px-8 bg-white/20 text-white text-base font-bold leading-normal tracking-[0.015em] @[480px]:text-lg @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] backdrop-blur-sm hover:bg-white/30 transition-colors duration-200">
              <span className="truncate">Book a Session</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;