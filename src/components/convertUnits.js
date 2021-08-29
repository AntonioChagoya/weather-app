import React from "react";

function ConverUnits() {
  return (
    <div className="units--container">
      <span className="units units--celcius active">
        <button>°C</button>
      </span>
      <span className="units units--fahrenheit">
        <button>°F</button>
      </span>
    </div>
  );
}

export default ConverUnits;
