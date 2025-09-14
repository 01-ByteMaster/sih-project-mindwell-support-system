
// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="flex justify-center border-t border-slate-200">
      <div className="flex max-w-[960px] flex-1 flex-col">
        <div className="flex flex-col gap-6 px-5 py-10 text-center @container">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 @[480px]:flex-row @[480px]:justify-center">
            <a className="text-slate-600 text-base font-normal leading-normal hover:text-slate-800" href="#">
              Privacy Policy
            </a>
            <a className="text-slate-600 text-base font-normal leading-normal hover:text-slate-800" href="#">
              Terms of Service
            </a>
            <a className="text-slate-600 text-base font-normal leading-normal hover:text-slate-800" href="#">
              Contact Us
            </a>
          </div>
          <p className="text-slate-500 text-base font-normal leading-normal">
            © 2024 MindfulU. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;