import React, { useEffect } from "react";
import $ from "jquery";

const Header = () => {
  useEffect(() => {
    // عملکرد سربرگ چسبنده
    //Sticky note function
    const handleScroll = () => {
      const scroll = $(window).scrollTop();
      const box = $(".header-text").height();
      const header = $("header").height();

      if (scroll >= box - header) {
        $("header").addClass("background-header");
      } else {
        $("header").removeClass("background-header");
      }
    };

    $(window).on("scroll", handleScroll);

    // نمایش و مخفی کردن منوی اصلی در موبایل
    // Show and hide the main menu on mobile
    const toggleMenu = () => {
      $(".menu-trigger").toggleClass("active");
      $(".header-area .nav").slideToggle(200);
    };

    if ($(".menu-trigger").length) {
      $(".menu-trigger").on("click", toggleMenu);
    }

    // نمایش و مخفی کردن زیرمنوی "صفحات" در موبایل
    // Show and hide the "Pages" submenu on mobile
    $(".has-sub > a").on("click", function (e) {
      e.preventDefault(); 
      // جلوگیری از رفتار پیش‌فرض لینک
      // Prevent default link behavior
      $(this).next(".sub-menu").slideToggle(200);
    });

    // پاکسازی رویدادها هنگام حذف کامپوننت
  // Clear events when component is removed
    return () => {
      $(window).off("scroll", handleScroll);
      $(".menu-trigger").off("click", toggleMenu);
      $(".has-sub > a").off("click");
    };
  }, []);

  return (
    <>
      {/* زیر سربرگ */}
      {/* Subheader */}
      <div className="sub-header">
        {/* این بخش می‌تواند برای اطلاع‌رسانی یا تبلیغات آموزشی استفاده شود */}
        {/* This section can be used for informational or educational advertising */}
      </div>

      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                {/* لوگو */}
                {/* Logo */}
                <a href="index.html" className="logo">آموزش زبان انگلیسی</a>

                {/* منو */}
                {/* Menu */}
                <ul className="nav">
                  <li className="scroll-to-section"><a href="#top" className="active">صفحه اصلی</a></li>
                    <li className="scroll-to-section"><a href="/">جلسات آموزشی</a></li>
                  <li className="scroll-to-section"><a href="#apply">ثبت‌نام</a></li>
                  <li className="has-sub scroll-to-section">
                    <a href="">صفحات</a>
                    <ul className="sub-menu">
                      <li className="scroll-to-section"><a href="/">جلسات آینده</a></li>
                      <li className="scroll-to-section"><a href="#meetings">جزئیات جلسات</a></li>
                    </ul>
                  </li>
                  <li className="scroll-to-section"><a href="#our">دوره‌های آموزشی</a></li>
                  <li className="scroll-to-section"><a href="#contact">تماس با ما</a></li>
                </ul>

                {/* دکمه منو */}
                {/* Menu button */}
                <a className="menu-trigger">
                  <span>منو</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
