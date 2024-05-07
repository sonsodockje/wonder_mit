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
    <div className="max-w-lg bg-purple p-5 ">
      <div className="">
        <Swiper>
          {data.map((data) => (
            <SwiperSlide>
              <PromoCard data={data} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

function PromoCard({ data }: any) {
  return <p>{data.name}</p>;
}

// https://swiperjs.com/react
