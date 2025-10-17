import React from "react";

// کامپوننت فرم تماس با ما
// Contact form component
const ContactUs = () => {
  return (
    <section className="contact-us" id="contact">
      <div className="container">
        <div className="row">
          {/* ستون فرم تماس */}
          {/* Column for contact form */}
          <div className="col-lg-9 align-self-center">
            <div className="row">
              <div className="col-lg-12">
                <form id="contact" action="" method="post">
                  <div className="row">
                    {/* عنوان فرم */}
                    {/* Form heading */}
                    <div className="col-lg-12">
                      <h2>ارتباط با ما</h2>
                    </div>

                    {/* فیلد نام */}
                    {/* Name field */}
                    <div className="col-lg-4">
                      <fieldset>
                        <input
                          name="name"
                          type="text"
                          id="name"
                          placeholder="نام شما...*"
                          required
                        />
                      </fieldset>
                    </div>

                    {/* فیلد ایمیل */}
                    {/* Email field */}
                    <div className="col-lg-4">
                      <fieldset>
                        <input
                          name="email"
                          type="text"
                          id="email"
                          pattern="[^ @]*@[^ @]*"
                          placeholder="ایمیل شما..."
                          required
                        />
                      </fieldset>
                    </div>

                    {/* فیلد موضوع پیام */}
                    {/* Subject field */}
                    <div className="col-lg-4">
                      <fieldset>
                        <input
                          name="subject"
                          type="text"
                          id="subject"
                          placeholder="موضوع پیام...*"
                          required
                        />
                      </fieldset>
                    </div>

                    {/* فیلد متن پیام */}
                    {/* Message textarea */}
                    <div className="col-lg-12">
                      <fieldset>
                        <textarea
                          name="message"
                          className="form-control"
                          id="message"
                          placeholder="متن پیام شما..."
                          required
                        ></textarea>
                      </fieldset>
                    </div>

                    {/* دکمه ارسال فرم */}
                    {/* Submit button */}
                    <div className="col-lg-12">
                      <fieldset>
                        <button type="submit" id="form-submit" className="button">
                          ارسال پیام
                        </button>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* ستون اطلاعات تماس */}
          {/* Column for contact information */}
          <div className="col-lg-3">
            <div className="right-info">
              <ul>
                <li>
                  <h6>شماره تماس</h6>
                  <span>۰۱۰-۰۲۰-۰۳۴۰</span>
                </li>
                <li>
                  <h6>آدرس ایمیل</h6>
                  <span>info@dfgh.com</span>
                </li>
                <li>
                  <h6>نشانی</h6>
                  <span>تهران، ایران</span>
                </li>
                <li>
                  <h6>آدرس وب‌سایت</h6>
                  <span>www.ertg.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
