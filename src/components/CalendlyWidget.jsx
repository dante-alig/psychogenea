import React from "react";

const CalendlyWidget = () => {
  const handleClick = () => {
    window.Calendly.initPopupWidget({
      url: "https://calendly.com/samuelceleste/30min",
    });
    return false;
  };

  return (
    <a href="#" onClick={handleClick}>
      Planifier du temps avec moi
    </a>
  );
};

export default CalendlyWidget;
