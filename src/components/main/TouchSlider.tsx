import React, { useState, useRef } from "react";
import "./test.css";

const TouchSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const sliderRef = useRef(null);

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setStartX(touch.clientX);
  };

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    setCurrentX(touch.clientX);
  };

  const handleTouchEnd = () => {
    const deltaX = startX - currentX;
    if (Math.abs(deltaX) > 50) {
      // 슬라이드 기준 설정 (50px 이상 움직였을 때)
      if (deltaX > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    // 초기화
    setStartX(0);
    setCurrentX(0);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, 4)); // 최대 슬라이드 수 설정
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div
      ref={sliderRef}
      className="slider"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        display: "flex",
        transition: "transform 0.3s ease",
        transform: `translateX(-${currentSlide * 100}%)`,
      }}
    >
      <div className="slide">Slide 1</div>
      <div className="slide">Slide 2</div>
      <div className="slide">Slide 3</div>
      <div className="slide">Slide 4</div>
      <div className="slide">Slide 5</div>
    </div>
  );
};

export default TouchSlider;
