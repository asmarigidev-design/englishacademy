import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../assets/images/service-icon-01.png';
import img2 from '../assets/images/service-icon-02.png';
import img3 from '../assets/images/service-icon-03.png';

const Services = () => {
  // تنظیمات اسلایدر برای نمایش خدمات
  // Slider settings for services section
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1000, settings: { slidesToShow: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 2 } },
      { breakpoint: 0, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <section className="services py-5" id="future sessions">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* اسلایدر خدمات آموزشی */}
            {/* Educational services slider */}
            <Slider {...settings}>
              {/* آیتم‌های نمایش داده شده در اسلایدر */}
              {/* Items displayed in the slider */}
              {[
                {
                  img: img1,
                  title: "بهترین آموزش",
                  desc: "ارائه دوره‌های تخصصی و کاربردی برای افزایش مهارت‌های شما. این دوره‌ها شامل تمرین‌های عملی، منابع چندرسانه‌ای، و پشتیبانی آموزشی هستند که به شما کمک می‌کنند تا در زمینه‌های مختلف زبان انگلیسی مانند مکالمه، نگارش و درک مطلب پیشرفت کنید."                },
                {
                  img: img2,
                  title: "جلسات آنلاین",
                  desc: " همکاری با برترین اساتید برای ارائه آموزش‌های با کیفیت. مدرسین ما دارای تجربه بین‌المللی و تخصص در آموزش زبان هستند و با روش‌های نوین تدریس، محیطی انگیزشی و حرفه‌ای برای یادگیری فراهم می‌کنند. تعامل با هم‌کلاسی‌ها روند آموزش را مؤثرترمی‌سازد."               },
                {
                  img: img3,
                  title: "بهترین اساتید",
                  desc: " همکاری با برترین اساتید برای ارائه آموزش‌های با کیفیت. مدرسین ما دارای تجربه بین‌المللی هستند و با روش‌های نوین تدریس، محیطی  حرفه‌ای برای یادگیری فراهم می‌کنند. با بهره‌گیری از فضای تعاملی می‌توانند مهارت‌های خود را در محیطی مؤثر توسعه دهند."                },
              ].map((service, index) => (
                <div key={index} className="item px-3">
                  {/* آیکون یا تصویر مربوط به خدمت */}
                  {/* Icon or image for the service */}
                  <div className="icon mb-3">
                    <img src={service.img} alt={service.title} />
                  </div>

                  {/* محتوای توضیحی زیر آیکون */}
                  {/* Descriptive content below the icon */}
                  <div className="down-content">
                    <h4>{service.title}</h4>
                    <p>{service.desc}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
