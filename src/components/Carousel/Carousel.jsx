import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Carousel({ items = [], renderItem }) {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={16}
      breakpoints={{
        320: { slidesPerView: 1.2 },
        480: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 5 },
      }}
    >
      {items.map((item) => (
        <SwiperSlide key={item.id}>{renderItem(item)}</SwiperSlide>
      ))}
    </Swiper>
  );
}


