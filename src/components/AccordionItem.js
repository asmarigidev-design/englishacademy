import React, { useState } from "react";

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className={`accordion ${isOpen ? "is-open" : ""}`}>
      <div className="accordion-head" onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <span className="icon">
          <i className={`icon fa ${isOpen ? "fa-chevron-down" : "fa-chevron-right"}`}></i>
        </span>
      </div>
      <div className="accordion-body" style={{ height: isOpen ? "auto" : "0px", overflow: "hidden" }}>
        <div className="content">{children}</div>
      </div>
    </article>
  );
};

export default AccordionItem;
