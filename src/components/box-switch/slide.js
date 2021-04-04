import React, { useState } from "react";
import "./slide.css";
function Slide() {
  const [slide, setSlide] = useState(10);
  
  const handleChange = (event) => {
    setSlide(event.target.value);
    console.log(slide);
  };

  return (
    <div className="box-switch-slide">
      <div className="box-switch-slide-icon">
          <span className="switch-slide-title"> Light : {slide} Lux</span>
          <input
            type="range"
            min="0"
            max="100"
            value={slide}
            onChange={handleChange}
            step="1"
          />
      </div>
    </div>
  );
}

export default Slide;
