
// src/components/QuickAccess.js
import React from 'react';
import Logo from '../../src/assets/logo.svg';
import Shield from '../../src/assets/shield.svg'

const QuickAccess = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm my-12 p-10">
      <div className="flex flex-col gap-4 text-center mb-8">
        <h2 className="text-slate-800 text-3xl font-bold leading-tight tracking-tight">
          Quick Access
        </h2>
        <p className="text-slate-600 max-w-lg mx-auto">
          Instantly connect with the tools you need to support your mental wellbeing.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <a className="flex flex-col items-center justify-center gap-4 p-8 rounded-2xl bg-[var(--primary-50)] hover:bg-[var(--primary-100)] transition-colors duration-200 text-center" href="#">
          <img src={Logo} alt="Resources Logo" className="w-12 h-12" />
          <h3 className="text-xl font-bold text-slate-800">Resources</h3>
          <p className="text-slate-600">Explore our library of articles, tools, and guides.</p>
        </a>
        <a className="flex flex-col items-center justify-center gap-4 p-8 rounded-2xl bg-[var(--primary-50)] hover:bg-[var(--primary-100)] transition-colors duration-200 text-center" href="#">
        <img src={Shield} alt="Secured Logo" className="w-12 h-12" />
          <h3 className="text-xl font-bold text-slate-800">Safe Space Mode</h3>
          <p className="text-slate-600">A discreet and private browsing experience.</p>
        </a>
      </div>
    </div>
  );
};

export default QuickAccess;