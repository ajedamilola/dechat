import { friendsSuggest, games } from "@/constants";
import { BsBrightnessHigh } from "react-icons/bs";
import { RxReload } from "react-icons/rx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import { FaRegUser } from "react-icons/fa6";

const Games = () => {
  return (
    <div className="rounded-lg bg-white px-[15px] py-[20px] font-montserrat">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-[17px] font-semibold text-black/75">Your Games</h1>

        <div className="flex items-center space-x-3">
          <p className="font-roboto text-xs font-medium text-textColor">
            27 Games
          </p>

          <div className="flex items-center gap-2">
            <div className="flex size-6 items-center justify-center rounded-full bg-bgColor">
              <RxReload size={12} className="text-primary" />
            </div>

            <div className="flex size-6 items-center justify-center rounded-full bg-bgColor">
              <BsBrightnessHigh size={12} className="text-primary" />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-2 mt-5">
        <Swiper
          slidesPerView={"auto"}
          grabCursor={true}
          className="z-10"
          spaceBetween={15}
          modules={[Autoplay]}
          autoplay={{ delay: 2500 }}
        >
          {games.map((item, index) => (
            <SwiperSlide
              key={index}
              className="relative block items-end justify-end"
              style={{
                width: "115px",
                height: "132px",
                background: `linear-gradient(0deg, rgba(0,0,0, 7), rgba(0, 0,0,0.2), rgba(0, 0, 0, 0)), url(${item.picture})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                borderRadius: "12px",
              }}
            >
              <div className="absolute bottom-2 left-1/2 w-full -translate-x-1/2 text-[11px] text-white">
                <div className="flex flex-col items-center justify-center">
                  <h4 className="text-center font-semibold">{item.name}</h4>
                </div>

                <div className="flex items-center justify-center gap-1">
                  <FaRegUser size={9} />

                  <p className="text-center">{item.followers}K</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Games;
