import React from "react";
import img1 from '../assets/images/meeting-01.jpg';
import img2 from '../assets/images/meeting-02.jpg';
import img3 from '../assets/images/meeting-03.jpg';
import img4 from '../assets/images/meeting-04.jpg';

const UpcomingMeetings = () => {
  return (
    <section className="upcoming-meetings" id="meetings">
      <div className="container">
        <div className="row">
          {/* عنوان اصلی بخش جلسات آینده */}
          {/* Section title for upcoming meetings */}
          <div className="col-lg-12">
            <div className="section-heading">
              <h2>جلسات آینده</h2>
            </div>
          </div>

          {/* ستون دسته‌بندی جلسات در سمت راست */}
          {/* Sidebar for meeting categories */}
          <div className="col-lg-4">
            <div className="categories">
              <h4>دسته‌بندی جلسات</h4>
              <ul>
                <li><a href="/">روش‌های نوین آموزش</a></li>
                <li><a href="/">تکنیک‌های تدریس آنلاین</a></li>
                <li><a href="/">ارتقای سطح آموزشی</a></li>
                <li><a href="/">مدیریت کلاس‌های مجازی</a></li>
                <li><a href="/">نوآوری در تدریس</a></li>
              </ul>
              {/* دکمه مشاهده همه جلسات */}
              {/* Button to view all upcoming meetings */}
              <div className="main-button-red">
                <a href="meetings.html">همه جلسات آینده</a>
              </div>
            </div>
          </div>

          {/* ستون نمایش جلسات آینده در سمت چپ */}
          {/* Column displaying upcoming meeting items */}
          <div className="col-lg-8">
            <div className="row">
              {/* آیتم جلسه اول */}
              {/* Meeting item 1 */}
              <div className="col-lg-6">
                <div className="meeting-item">
                  <div className="thumb">
                    <div className="price"><span>۲۲.۰۰ </span></div>
                    <a href="meeting-details.html">
                      <img src={img1} alt="جلسه اساتید جدید" />
                    </a>
                  </div>
                  <div className="down-content">
                    <div className="date"><h6>۱۰ شهریور</h6></div>
                    <a href="meeting-details.html"><h4>جلسه اساتید جدید</h4></a>
                    <p>بررسی روش‌های تدریس مدرن برای افزایش سطح یادگیری دانشجویان.</p>
                  </div>
                </div>
              </div>

              {/* آیتم جلسه دوم */}
              {/* Meeting item 2 */}
              <div className="col-lg-6">
                <div className="meeting-item">
                  <div className="thumb">
                    <div className="price"><span>۳۶.۰۰ </span></div>
                    <a href="meeting-details.html">
                      <img src={img2} alt="تکنیک‌های آموزش آنلاین" />
                    </a>
                  </div>
                  <div className="down-content">
                    <div className="date"><h6>۲۴ شهریور</h6></div>
                    <a href="meeting-details.html"><h4>تکنیک‌های آموزش آنلاین</h4></a>
                    <p>نحوه برگزاری کلاس‌های آنلاین مؤثر و تعامل بهتر با دانشجویان.</p>
                  </div>
                </div>
              </div>

              {/* آیتم جلسه سوم */}
              {/* Meeting item 3 */}
              <div className="col-lg-6">
                <div className="meeting-item">
                  <div className="thumb">
                    <div className="price"><span>۱۴.۰۰ </span></div>
                    <a href="meeting-details.html">
                      <img src={img3} alt="کنفرانس آموزش عالی" />
                    </a>
                  </div>
                  <div className="down-content">
                    <div className="date"><h6>۲۶ شهریور</h6></div>
                    <a href="meeting-details.html"><h4>کنفرانس آموزش عالی</h4></a>
                    <p>مباحث مرتبط با ارتقای سطح آموزش دانشگاهی و توسعه مهارت‌های تخصصی.</p>
                  </div>
                </div>
              </div>

              {/* آیتم جلسه چهارم */}
              {/* Meeting item 4 */}
              <div className="col-lg-6">
                <div className="meeting-item">
                  <div className="thumb">
                    <div className="price"><span>۴۸.۰۰ </span></div>
                    <a href="meeting-details.html">
                      <img src={img4} alt="جلسه آموزشی دانشجویان" />
                    </a>
                  </div>
                  <div className="down-content">
                    <div className="date"><h6>۳۰ شهریور</h6></div>
                    <a href="meeting-details.html"><h4>جلسه آموزشی دانشجویان</h4></a>
                    <p>راهنمایی و آموزش مهارت‌های لازم برای موفقیت در مسیر تحصیلی و حرفه‌ای.</p>
                  </div>
                </div>
              </div>
              {/* پایان لیست جلسات */}
              {/* End of meeting items list */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingMeetings;
