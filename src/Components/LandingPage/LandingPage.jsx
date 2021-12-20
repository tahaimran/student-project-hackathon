import React from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import Features from './Features/Features';
import FooterTop from './FooterTop/FooterTop';
import FooterBot from './FooterBot/FooterBot';
import WhyUs from './WhyUs/WhyUs'
import UpNext from './UpNext/UpNext'
function LandingPage() {
    return (
        <>
           <Header />
           <Main />
           <Features />
           <WhyUs />
           <UpNext />
           <FooterTop />
           <FooterBot />
        </>
    )
}

export default LandingPage;
