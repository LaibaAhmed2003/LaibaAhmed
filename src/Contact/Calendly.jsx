import React from "react";
import { InlineWidget } from "react-calendly";

const CalendlySection = () => {
  return (
    <div className="calendly-section" style={{ marginBottom: "80px" }}>
      <InlineWidget
        url="https://calendly.com/laiba-sabahat9/15-min?month=2024-07"
        className="calendly-widget"
        styles={{ height: "800px", width: "330px" }}
      />
    </div>
  );
};

export default CalendlySection;
