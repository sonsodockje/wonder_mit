import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Promo() {
  const data = [
    {
      name: "test",
    },
    {
      name: "test2",
    },
  ];

  return (
    <div className="overflow-hidden rounded-lg h-auto">
      <Swiper>
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
    <div className="bg-color-pink1 p-5 h-[300px]">
      <p>{data.name}</p>
    </div>
  );
}

// https://swiperjs.com/react
