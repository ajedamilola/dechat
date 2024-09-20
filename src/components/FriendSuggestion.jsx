import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import { friendsSuggest } from "@/constants";

const FriendSuggestion = () => {
  return (
    <div className="w-full rounded-lg bg-white p-[15px] font-montserrat">
      <h1 className="text-[17px] font-semibold text-titleColor">
        Friend Suggestion
      </h1>

      <div className="mb-2 mt-5">
        <Swiper
          slidesPerView={"auto"}
          grabCursor={true}
          className="z-10"
          spaceBetween={15}
          modules={[Autoplay]}
          autoplay={{ delay: 2500 }}
        >
          {friendsSuggest.map((item, index) => (
            <SwiperSlide
              key={index}
              className="relative block items-end justify-end"
              style={{
                width: "115px",
                height: "132px",
                background: `linear-gradient(0deg, rgba(0,0,0, 1), rgba(0, 212, 255, 0), rgba(0, 0, 0, 0)), url(${item.picture})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "12px",
              }}
            >
              <div className="absolute bottom-2 left-1/2 w-full -translate-x-1/2 text-[11px] text-white">
                <div className="flex flex-col items-center justify-center">
                  <h4 className="text-center font-semibold">{item.name}</h4>
                </div>

                <div className="flex items-center justify-center">
                  <div className="relative mr-[2px] inline-flex size-[6px] rounded-full bg-green-500"></div>
                  <p className="text-center">Active</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FriendSuggestion;
