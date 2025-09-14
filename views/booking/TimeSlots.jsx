
import React from 'react';

const TimeSlots = ({ selectedDate }) => {
  return (
    <div className="mt-12">
      <h2 className="text-stone-900 text-2xl font-bold leading-tight tracking-tight text-center">
        Available Slots for <span className="text-rose-500">{selectedDate}</span>
      </h2>
      <div className="flex flex-wrap gap-4 justify-center mt-6">
        <label className="text-sm font-semibold leading-normal flex items-center justify-center rounded-full border-2 border-stone-200 px-6 py-3 text-stone-700 has-[:checked]:border-rose-500 has-[:checked]:bg-rose-50 has-[:checked]:text-rose-600 relative cursor-pointer transition-all duration-200 hover:border-rose-300">
          10:00 AM - 11:00 AM
          <input className="invisible absolute" name="time-slot" type="radio" />
        </label>
        <label className="text-sm font-semibold leading-normal flex items-center justify-center rounded-full border-2 border-stone-200 px-6 py-3 text-stone-700 has-[:checked]:border-rose-500 has-[:checked]:bg-rose-50 has-[:checked]:text-rose-600 relative cursor-pointer transition-all duration-200 hover:border-rose-300">
          11:30 AM - 12:30 PM
          <input className="invisible absolute" name="time-slot" type="radio" />
        </label>
        <label className="text-sm font-semibold leading-normal flex items-center justify-center rounded-full border-2 border-stone-200 px-6 py-3 text-stone-700 has-[:checked]:border-rose-500 has-[:checked]:bg-rose-50 has-[:checked]:text-rose-600 relative cursor-pointer transition-all duration-200 hover:border-rose-300">
          2:00 PM - 3:00 PM
          <input defaultChecked className="invisible absolute" name="time-slot" type="radio" />
        </label>
        <label className="text-sm font-semibold leading-normal flex items-center justify-center rounded-full border-2 border-stone-200 px-6 py-3 text-stone-700 has-[:checked]:border-rose-500 has-[:checked]:bg-rose-50 has-[:checked]:text-rose-600 relative cursor-pointer transition-all duration-200 hover:border-rose-300">
          3:30 PM - 4:30 PM
          <input className="invisible absolute" name="time-slot" type="radio" />
        </label>
      </div>
    </div>
  );
};

export default TimeSlots;