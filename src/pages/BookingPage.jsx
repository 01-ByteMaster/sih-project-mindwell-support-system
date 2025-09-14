
// src/pages/BookingPage.jsx
import React from 'react';
import BookingTypeToggle from '../../views/booking/BookingTypeToggle.jsx';
// import CalendarView from '../../views/booking/CalendarView.jsx';
import TimeSlots from '../../views/booking/TimeSlots.jsx';
import BookingConfirmation from '../../views/booking/BookingConfirmation.jsx';
// ... any other components for this page

const BookingPage = () => {
  return (
    <main className="flex-1 px-10 py-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-stone-900 text-4xl font-bold">Book a Confidential Counseling Session</h1>
          <p className="text-stone-500 text-lg mt-2 max-w-2xl mx-auto">Choose a time that works for you.</p>
        </div>

        <BookingTypeToggle />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* ... CalendarView components go here ... */}
        </div>
        {/* <CalendarView month="October 2024" showLeftArrow={false}>
          
          <button className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-stone-100 transition-colors">1</button>
          <button className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-stone-100 transition-colors">2</button>
          <button className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-stone-100 transition-colors">3</button>
          <button className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-stone-100 transition-colors">4</button>
          <button className="h-10 w-10 flex items-center justify-center rounded-full bg-rose-50 text-rose-600 font-semibold">5</button>
          <button className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-stone-100 transition-colors">6</button>
          <button className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-stone-100 transition-colors">7</button>
        </CalendarView> */}
        <TimeSlots selectedDate="October 5, 2024" />
        <BookingConfirmation />
      </div>
    </main>
  );
};

export default BookingPage;