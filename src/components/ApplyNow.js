import React, { useState } from "react";

// کامپوننت اصلی ثبت‌نام
// Main registration component
const ApplyNow = () => {
  return (
    <section className="apply-now" id="apply">
      <div className="container">
        <div className="row">
          {/* ستون توضیحات ثبت‌نام */}
          {/* Column for registration descriptions */}
          <div className="col-lg-6 align-self-center">
            <div className="row">
              <div className="col-lg-12">
                <div className="item">
                  <h3>ثبت‌نام در دوره‌های آموزش زبان انگلیسی</h3>
                  <p>
                    دوره‌های آموزشی ما به شما کمک می‌کنند تا مهارت‌های زبان انگلیسی خود را به سطح بالاتری برسانید.
                    با تمرین‌های تعاملی و کلاس‌های تخصصی، می‌توانید مکالمه، خواندن و نوشتن خود را تقویت کنید.
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

              <div className="col-lg-12">
                <div className="item">
                  <h3>ثبت‌نام در دوره‌های تخصصی زبان</h3>
                  <p>
                    ما دوره‌های متنوعی برای سطوح مختلف ارائه می‌دهیم. اگر به دنبال تقویت مکالمه یا آمادگی برای آزمون‌های زبان هستید،
                    این دوره‌ها برای شما مناسب خواهند بود.
                  </p>
                  {/* دکمه دعوت به اقدام دوم */}
                  {/* Second call-to-action button */}
                  <div className="main-button-yellow">
                    <div className="scroll-to-section">
                      <a href="#contact">همین حالا به ما بپیوندید!</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ستون آکاردئون سوالات و اطلاعات تکمیلی */}
          {/* Column for accordion with additional info */}
          <div className="col-lg-6">
            <Accordion />
          </div>
        </div>
      </div>
    </section>
  );
};

// آیتم تکی آکاردئون
// Single accordion item
const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className={`accordion ${isOpen ? "is-open" : ""}`}>
      {/* سرآیند آکاردئون با آیکون باز/بسته */}
      {/* Accordion header with toggle icon */}
      <div className="accordion-head" onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <span className="icon">
          <i className={`icon fa ${isOpen ? "fa-chevron-down" : "fa-chevron-right"}`}></i>
        </span>
      </div>

      {/* محتوای آکاردئون با نمایش مشروط */}
      {/* Accordion body with conditional display */}
      <div className="accordion-body" style={{ height: isOpen ? "auto" : "0px", overflow: "hidden" }}>
        <div className="content">{children}</div>
      </div>
    </article>
  );
};

// لیست کامل آکاردئون‌ها
// Full accordion list
const Accordion = () => {
  return (
    <div className="accordions is-first-expanded">
      <AccordionItem title="چرا یادگیری زبان انگلیسی مهم است؟">
        <p>
          زبان انگلیسی در دنیای امروز یکی از مهارت‌های حیاتی محسوب می‌شود. تسلط بر این زبان می‌تواند فرصت‌های 
          شغلی و تحصیلی بیشتری را برای شما فراهم کند.
        </p>
      </AccordionItem>

      <AccordionItem title="روش‌های موثر یادگیری زبان">
        <p>
          یادگیری زبان نیاز به تمرین مستمر دارد. مشاهده فیلم‌های انگلیسی، مطالعه کتاب‌ها و مقالات، 
          و شرکت در کلاس‌های مکالمه می‌تواند سرعت یادگیری شما را افزایش دهد.
        </p>
      </AccordionItem>

      <AccordionItem title="لطفاً دوستان خود را مطلع کنید">
        <p>
          تمرین گروهی یکی از بهترین روش‌های یادگیری زبان انگلیسی است. اگر با دوستان خود تمرین کنید، 
          مهارت مکالمه شما بهتر خواهد شد.
        </p>
      </AccordionItem>

      <AccordionItem title="اشتراک‌گذاری تجربیات">
        <p>
          اشتراک‌گذاری تجربیات یادگیری با دیگر زبان‌آموزان می‌تواند به شما کمک کند تا از روش‌های مختلف بهره ببرید.
          تعامل با هم‌کلاسی‌ها و اساتید باعث پیشرفت سریع‌تر شما خواهد شد.
        </p>
      </AccordionItem>
    </div>
  );
};

export default ApplyNow;
