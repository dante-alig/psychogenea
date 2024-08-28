import React, { useEffect } from "react";

const CalendlyWidget = () => {
  useEffect(() => {
    window.Calendly.initInlineWidget({
      url: "https://calendly.com/samuelceleste/30min", // Remplacez par votre lien Calendly
      parentElement: document.getElementById("calendly-widget"),
      prefill: {},
      utm: {},
    });
  }, []);

  return (
    <div
      id="calendly-widget"
      style={{ minWidth: "320px", height: "630px" }}
    ></div>
  );
};

export default CalendlyWidget;
