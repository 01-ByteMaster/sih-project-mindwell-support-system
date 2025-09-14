
import React from 'react';

const BookingConfirmation = () => {
  return (
    <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
      <div className="flex items-center justify-between gap-8">
        <div className="flex flex-col gap-2 flex-1">
          <h3 className="text-stone-900 text-xl font-bold leading-tight">Your Booking is Confirmed!</h3>
          <p className="text-stone-500 text-sm font-normal leading-normal">
            You have successfully booked a session with a counselor on <span className="font-semibold text-stone-700">November 15th, 2024 at 2:00 PM</span>. You will receive a reminder email 24 hours before your session.
          </p>
          <div className="mt-4">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-stone-200 text-stone-800 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-stone-300 transition-colors">
              <span className="truncate">Cancel Booking</span>
            </button>
          </div>
        </div>
        <div
          className="w-full max-w-xs bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
          style={{
            backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAEcCngBBmDvQ5g7AS36kGT_IKQl0Yem6qeRwEGTX9f4Y6DgUkvdhaMD4Er3rKPD289cC5aW2Dj4jsZEmpKg9XKUyKH0EpJNs1Pr0RCp-7fAzawfor_R_-WYw-vkBCrFZp179XBhoGQOYeXLEn8wlZqniGdLOIb2DwIWAw000y38hSB-H8UHdEmWwT8r8PFN5hR-AFA88T9ebAXcUTVWldFhoFrGcxlicAw1FLvsGtoh5Zs8doNJkvbzeg9jAMi7Ik8WiXD7Y8-8g")',
          }}
        ></div>
      </div>
    </div>
  );
};



export default BookingConfirmation;