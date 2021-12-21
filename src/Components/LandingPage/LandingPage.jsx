import React from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import Features from './Features/Features';
import FooterTop from './FooterTop/FooterTop';
import FooterBot from './FooterBot/FooterBot';
import WhyUs from './WhyUs/WhyUs'
import UpNext from './UpNext/UpNext'
import Founder from './Founder/Founder'
function LandingPage() {
    return (
        <>
           <Header />
           <Main />
           <Features />
           <WhyUs />
           <Founder />
           <UpNext />
           <FooterTop />
           <FooterBot />
        </>
    )
}

export default LandingPage;
