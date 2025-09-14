// src/components/ChatSection.jsx

import React from 'react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';

const ChatSection = () => (
  <div className="flex flex-col flex-1">
    <div className="bg-white rounded-2xl shadow-sm p-6 flex-1 flex flex-col">
      <div className="flex-1 space-y-6 overflow-y-auto pr-2">
        <ChatMessage
          author="MindWell Bot"
          profilePic="https://lh3.googleusercontent.com/aida-public/AB6AXuCgvSg_kVWqk5cxPx6oXSk7ttXEQKptUdNlpzHlmqmVyhgQgA_kvd3ayf-B6z2F-UpL4-VFdqxYRX53PGXrL3SIhBS_Exn-1hXpgqMESAwf3nkt12azOAcsuaLPUHA8dJIdsvjTAX7FfKw54ugDUTxPD1UAh2Q8tUSinWfz2w5o7IFGlr6VUHxhGrW2g3BAd1g5UxUEsHcfODejiVZj7osDutvdSiJIc6uqOHpjx9445ulqMDxzafLkNU7TzBWs9w3C4lXsW7u1Xw"
          text="Hi Sarah, I'm here to listen. How can I support you today?"
          isBot={true}
        />
        <ChatMessage
          author="Sarah"
          profilePic="https://lh3.googleusercontent.com/aida-public/AB6AXuBuTw3USRxx7LgyBe-ysBsqABp8l5_RUi7AawsKRSRDep6D2oHCQhwkBJDbh872GsLVFNJWABYYEdAHwh3Nwc28PLv_Xgq01hIVut54vhRCf3ePEwxKabyXGMAkdh0Gg17XgUaVtV2tlw_MgIEHiKheENLMe1DNes-2uFArUxxBZrTFIApnDNqqf9SZU-oxwxzRhDN1N0IB5O37Zg9jMvpsH7VXp7k5UI3tmTrDyoozVSntXfUHoWaBwl8SKXLk3bHQT_goXTvSRA"
          text="I've been feeling a bit overwhelmed with my coursework lately."
          isBot={false}
        />
        <ChatMessage
          author="MindWell Bot"
          profilePic="https://lh3.googleusercontent.com/aida-public/AB6AXuB3DWcAtKJ21-6RScgMGjR3P-WpwXYsm3e7QHkcTuFF8jJPRnX9RD6MvC3aFnV1Dar_1avg1VnfTSpCayEDnMBy7t-krcRXoSAjBPP3Gws6Y14ZZs2CWkRVlpeKCLOm9mfed1A1wHJuLQgoemsbKSDCRBFrP7aZxHZ4yjee8SUoUfy_J9hAcMMk48hpmtkL1xVRfEnp_zYi3YO-KqtaImf6wCnqmK51s-xxYBbejEkK9-i8mgXNmDywrKuuqc3bPLrwg2BUcJGFUw"
          text="I understand. It's common to feel overwhelmed with studies. Would you like to explore some strategies to manage stress or perhaps take a quick screening to better understand your feelings?"
          isBot={true}
          actions={
            <div className="flex gap-2 pt-2">
              <button className="flex min-w-[84px] items-center justify-center overflow-hidden rounded-full h-10 px-4 btn-primary text-sm font-bold tracking-wide transition-transform hover:scale-105">
                <span>Take Screening</span>
              </button>
              <button className="flex min-w-[84px] items-center justify-center overflow-hidden rounded-full h-10 px-4 btn-secondary text-sm font-bold tracking-wide transition-transform hover:scale-105">
                <span>Explore Strategies</span>
              </button>
            </div>
          }
        />
      </div>
      <ChatInput />
    </div>
  </div>
);

export default ChatSection;