"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { cn } from "@/lib/utils";

export default function SliderComponent() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    dotsClass: "flex",
    beforeChange: (prev: any, next: any) => {
      setCurrentSlide(next);
    },
    appendDots: (dots: any) => (
      <div
        style={{
          position: "absolute",
          bottom: 20,
          left: "10%",
          display: "flex",
          gap: 4,
        }}
      >
        {dots.map((item: any, index: number) => {
          return <div key={index}>{item.props.children}</div>;
        })}
      </div>
    ),
    customPaging: (index: number) => {
      return (
        <div
          className={cn(
            "w-4 h-4 rounded-full hidden lg:flex items-center justify-center cursor-pointer",
            index === currentSlide && "bg-black/10"
          )}
        >
          <p
            className={cn(
              "w-[6px] h-[6px] rounded-full bg-black/20",
              index === currentSlide && "bg-black"
            )}
          ></p>
        </div>
      );
    },
  };

  return (
    <div>
      <Slider {...settings}>
        
        <div
          className="bg-[url('/banner1.png')] h-[360px] bg-cover bg-center rounded-3xl
      "
        >
          <div className="flex flex-col items-center justify-center h-full text-center">
            <h1 className="text-xl lg:text-3xl font-semibold">
              Chào mừng bạn đến với website Check Cost
            </h1>
            <p className="text-sm lg:text-md">
              Hỗ trợ giúp bạn thuận tiện trong việc chơi game DBG
            </p>
            <img src="/logogame.png" alt="logo" className="mt-4 w-[240px]" />
          </div>
        </div>
        <div
          className="bg-[url('/banner2.png')] h-[360px] bg-cover bg-center rounded-3xl
      "
        >
          <div className="flex flex-col items-center justify-center h-full text-center">
            <h1 className="text-xl lg:text-3xl font-semibold">
              Chào mừng bạn đến với website Check Cost
            </h1>
            <p className="text-sm lg:text-md">
              Hỗ trợ giúp bạn thuận tiện trong việc chơi game DBG
            </p>
            <img src="/logogame.png" alt="logo" className="mt-4 w-[240px]" />
          </div>
        </div>
      </Slider>
    </div>
  );
}
