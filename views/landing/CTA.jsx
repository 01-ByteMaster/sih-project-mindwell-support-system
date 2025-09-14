
// src/components/CTA.js
import React from 'react';

const CTA = () => {
  return (
    <div className="@container bg-white rounded-2xl shadow-sm">
      <div className="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20 text-center">
        <div className="flex flex-col gap-2">
          <h1 className="text-slate-800 tracking-tight text-3xl font-bold leading-tight @[480px]:text-4xl @[480px]:font-bold @[480px]:leading-tight @[480px]:tracking-tight max-w-[720px] mx-auto">
            Ready to Prioritize Your Mental Health?
          </h1>
          <p className="text-slate-600 text-lg font-normal leading-normal max-w-[720px] mx-auto">
            Join MindfulU today and take the first step towards a healthier, happier you.
          </p>
        </div>
        <div className="flex flex-1 justify-center">
          <div className="flex justify-center">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 @[480px]:h-14 @[480px]:px-8 bg-[var(--primary-500)] text-white text-base font-bold leading-normal tracking-[0.015em] @[480px]:text-lg @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] hover:bg-[var(--primary-600)] transition-colors duration-200">
              <span className="truncate">Get Started</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;