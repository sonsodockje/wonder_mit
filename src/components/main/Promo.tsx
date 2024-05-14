import { Swiper, SwiperSlide } from "swiper/react";
import {  Autoplay } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/autoplay';


export default function Promo() {
  const data = [
    {
      name: "test",
      img: "https://images.unsplash.com/photo-1643431452454-1612071b0671?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "test2",
      img:"https://images.unsplash.com/photo-1541082515984-c0afd8f37f73?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "test3",
      img:"https://images.unsplash.com/photo-1525533366436-e69c6bfe2073?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D"
    },
  ];

  return (
    <div className="overflow-hidden rounded-lg h-auto">
      <Swiper
       modules={[Autoplay]}
       autoplay={{delay:3000}}
      >
        {data.map((data) => (
          <SwiperSlide>
            <PromoCard data={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

function PromoCard({ data }: any) {
  return (
    <div className=" h-[300px] relative">
      <img src={data.img} alt="" className="w-full "/>
      <div className="absolute p-5 top-0 z-999 bg-color-pink3">
        <p>{data.name}</p>
      </div>
    </div>
  );
}

// https://swiperjs.com/react
