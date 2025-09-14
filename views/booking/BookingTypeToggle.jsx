
import React from 'react';

const BookingTypeToggle = () => {
  return (
    <div className="flex justify-center mb-12">
      <div className="flex h-12 w-full max-w-md items-center justify-center rounded-full bg-stone-200 p-1.5">
        <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-4 has-[:checked]:bg-white has-[:checked]:shadow-md has-[:checked]:text-stone-900 text-stone-500 text-sm font-semibold leading-normal transition-all duration-300">
          <span className="truncate">Anonymous Booking</span>
          <input
            defaultChecked
            className="invisible w-0"
            name="booking-type"
            type="radio"
            value="Anonymous Booking"
          />
        </label>
        <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-4 has-[:checked]:bg-white has-[:checked]:shadow-md has-[:checked]:text-stone-900 text-stone-500 text-sm font-semibold leading-normal transition-all duration-300">
          <span className="truncate">Secure Login</span>
          <input
            className="invisible w-0"
            name="booking-type"
            type="radio"
            value="Secure Login"
          />
        </label>
      </div>
    </div>
  );
};

export default BookingTypeToggle;