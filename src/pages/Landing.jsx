import React from 'react';
import Header from '../../views/landing/Header.jsx';
import Hero from '../../views/landing/Hero.jsx';
import QuickAccess from '../../views/landing/Quickaccess.jsx';
import Features from '../../views/landing/Features.jsx';
import CTA from '../../views/landing/CTA.jsx';
import Footer from '../../views/landing/Footer.jsx';


function LandingPage() {
    return (
        <>
            <div
                className="relative flex size-full min-h-screen flex-col group/design-root overflow-x-hidden"
                style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif', backgroundColor: '#EFFAF7' }}
            >
                <div className="layout-container flex h-full grow flex-col">
                    <Header />
                    <main className="flex flex-1 flex-col">
                        <div className="px-40 flex flex-1 justify-center py-10">
                            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                                <Hero />
                                <QuickAccess />
                                <Features />
                                <CTA />
                            </div>
                        </div>
                    </main>
                    <Footer />
                </div>
            </div>
        </>
  )
}

export default LandingPage;
