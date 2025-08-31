import React from "react";
// فایل‌های CSS قالب
// Template CSS files
import './assets/css/fontawesome.css';
import './assets/css/templatemo-edu-meeting.css';
import './assets/css/lightbox.css';
// کامپوننت‌های صفحه اصلی
// Main page components
import SubHeader from './components/SubHeader';      // زیرهدر سایت
import Header from './components/Header';            // هدر اصلی سایت
import MainBanner from "./components/MainBanner";    // بنر اصلی صفحه
import Services from './components/Services';        // بخش خدمات
import UpcomingMeetings from './components/UpcomingMeetings';  // جلسات آینده
import ApplyNow from './components/ApplyNow';        // فرم ثبت‌نام
import OurFacts from './components/OurFacts';        // آمار و اطلاعات
import ContactUs from './components/ContactUs';      // فرم تماس با ما


const App = () => {  
  return (  
    <div className="container">  
      <SubHeader />
      <Header />
      <MainBanner />
      <Services />
      <UpcomingMeetings />
      <ApplyNow />
      <OurFacts />
      <ContactUs />
    </div>  
  );  
};  

export default App;
