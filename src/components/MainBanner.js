import React, { useEffect } from "react";
import $ from "jquery";
import "magnific-popup/dist/magnific-popup.css";
import "magnific-popup";
import vid from '../assets/course-video.mp4';

const MainBanner = () => {
  useEffect(() => {
    // راه‌اندازی پاپ‌آپ ویدیو با استفاده از پلاگین magnificPopup
    // Initialize video popup using magnificPopup plugin
    function videoPopup() {
      const play = $(".play");

      $(play).magnificPopup({
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: true,
        iframe: {
          patterns: {
            youtube: {
              src: "%id%", // آدرس ویدیو یوتیوب
            },
          },
        },
      });
    }

    videoPopup();
  }, []);

  return (
    <section className="section main-banner" id="top" data-section="section1">
      {/* ویدیو پس‌زمینه بنر اصلی */}
      {/* Background video for main banner */}
      <video autoPlay muted loop id="bg-video">
        <source src={vid} type="video/mp4" />
      </video>

      {/* لایه‌ی متن روی ویدیو */}
      {/* Text overlay on video */}
      <div className="video-overlay header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="caption">
                {/* عنوان خوش‌آمدگویی */}
                {/* Welcome message */}
                <h6>سلام دانشجویان عزیز</h6>
                <h2>به دنیای آموزش خوش آمدید</h2>

                {/* توضیحات درباره یادگیری زبان انگلیسی */}
                {/* Description about learning English */}
                <p>
                  یادگیری زبان انگلیسی یک مسیر جذاب است که می‌تواند درهای جدیدی به روی شما باز کند. 
                  روش‌های مختلفی برای یادگیری وجود دارد، از تماشای فیلم‌های انگلیسی گرفته تا تمرین مکالمه روزانه. 
                  با استفاده از ابزارهای آموزشی و روش‌های نوین، یادگیری زبان می‌تواند ساده و لذت‌بخش شود.
                </p>

                {/* دکمه دعوت به اقدام */}
                {/* Call-to-action button */}
                <div className="main-button-red">
                  <div className="scroll-to-section">
                    <a href="#contact">همین حالا به ما بپیوندید!</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainBanner;
