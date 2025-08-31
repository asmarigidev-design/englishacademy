import React, { useEffect } from "react";
import $ from "jquery";

// کامپوننت نمایش آمار دانشگاه
// University statistics component
const OurFacts = () => {
  useEffect(() => {
    // تابع بررسی دید بودن المان در صفحه
    // Function to check if element is visible in viewport
    function visible(partial) {
      const $t = $(partial),
        $w = $(window),
        viewTop = $w.scrollTop(),
        viewBottom = viewTop + $w.height(),
        _top = $t.offset().top,
        _bottom = _top + $t.height(),
        compareTop = partial === true ? _bottom : _top,
        compareBottom = partial === true ? _top : _bottom;

      return (
        compareBottom <= viewBottom &&
        compareTop >= viewTop &&
        $t.is(":visible")
      );
    }

    // هندلر اسکرول برای انیمیشن شمارنده
    // Scroll handler for counter animation
    $(window).scroll(function () {
      if (visible($(".count-digit"))) {
        if ($(".count-digit").hasClass("counter-loaded")) return;
        $(".count-digit").addClass("counter-loaded");

        $(".count-digit").each(function () {
          const $this = $(this);
          $({ Counter: 0 }).animate(
            { Counter: $this.text() },
            {
              duration: 3000,
              easing: "swing",
              step: function () {
                $this.text(Math.ceil(this.Counter));
              },
            }
          );
        });
      }
    });

    // پاکسازی هندلر هنگام حذف کامپوننت
    // Cleanup scroll handler on component unmount
    return () => {
      $(window).off("scroll");
    };
  }, []);

  return (
    <section className="our-facts" id="our">
      <div className="container">
        <div className="row">
          {/* ستون آمار عددی دانشگاه */}
          {/* Column for university numeric facts */}
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-12">
                <h2>چند نکته در مورد دانشگاه ما</h2>
              </div>

              {/* ستون اول آمار */}
              {/* First column of stats */}
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-12">
                    <div className="count-area-content percentage">
                      <div className="count-digit">94</div>
                      <div className="count-title">دانشجویان موفق</div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="count-area-content">
                      <div className="count-digit">126</div>
                      <div className="count-title">مدرسان فعال</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ستون دوم آمار */}
              {/* Second column of stats */}
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-12">
                    <div className="count-area-content new-students">
                      <div className="count-digit">2345</div>
                      <div className="count-title">دانشجویان جدید</div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="count-area-content">
                      <div className="count-digit">32</div>
                      <div className="count-title">افتخارات کسب شده</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ستون ویدیو معرفی */}
          {/* Column for intro video */}
          <div className="col-lg-6 align-self-center">
            <div className="video mt-desktop-extra">
              <a href="/" target="_blank" rel="noreferrer">
                <img src="assets/images/play-icon.png" alt="مشاهده ویدیو" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurFacts;
