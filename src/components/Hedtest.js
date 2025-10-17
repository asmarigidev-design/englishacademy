import React, { useEffect } from "react";
import $ from "jquery";

const Header = () => {
  useEffect(() => {
    // Sticky header functionality
    $(window).scroll(() => {
      const scroll = $(window).scrollTop();
      const box = $(".header-text").height();
      const header = $("header").height();

      if (scroll >= box - header) {
        $("header").addClass("background-header");
      } else {
        $("header").removeClass("background-header");
      }
    });

    // Menu Dropdown Toggle
    if ($(".menu-trigger").length) {
      $(".menu-trigger").on("click", function () {
        $(this).toggleClass("active");
        $(".header-area .nav").slideToggle(200);
      });
    }
  }, []);

  return (
    <>
      {/* Sub Header */}
      <div class="sub-header">
    
  </div>
  <header class="header-area header-sticky">
      <div class="container">
          <div class="row">
              <div class="col-12">
                  <nav class="main-nav">
                {/* Logo */}
                <a href="index.html" className="logo">Edu Meeting</a>
                {/* Menu */}
                <ul className="nav">
                  <li className="scroll-to-section"><a href="#top" className="active">Home</a></li>
                  <li><a href="meetings.html">Meetings</a></li>
                  <li className="scroll-to-section"><a href="#apply">Apply Now</a></li>
                  <li className="has-sub">
                    <a href="javascript:void(0)">Pages</a>
                    <ul className="sub-menu">
                      <li><a href="meetings.html">Upcoming Meetings</a></li>
                      <li><a href="meeting-details.html">Meeting Details</a></li>
                    </ul>
                  </li>
                  <li className="scroll-to-section"><a href="#courses">Courses</a></li>
                  <li className="scroll-to-section"><a href="#contact">Contact Us</a></li>
                </ul>
                <a className="menu-trigger">
                  <span>Menu</span>
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
//این درسته تا چند دقه ای