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
    <div className="p-5 border-[0.5px]">
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
  return <p>{data.name}</p>;
}

// https://swiperjs.com/react
