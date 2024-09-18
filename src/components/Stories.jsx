import { FaPlus } from "react-icons/fa6";
import { stories } from "../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules"; // Ensure proper import
import "swiper/css/autoplay";

const Stories = () => {
  return (
    <div className="">
      <Swiper
        slidesPerView={"auto"}
        grabCursor={true}
        className="z-10"
        spaceBetween={12}
      >
        <SwiperSlide className="relative h-[148px] w-[129px] rounded-xl border border-gray-400 p-2 md:h-[234px] md:w-[200px]">
          <div className="story-1 h-full w-full rounded-xl blur-[2px]"></div>

          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-3">
            <div className="flex size-14 items-center justify-center rounded-full bg-[#4a9cd2c0]/[0.5]">
              <FaPlus color="#fff" size={15} />
            </div>

            <p className="text-[12px] font-medium text-white">Add Stories</p>
          </div>
        </SwiperSlide>

        {stories.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{
              background:
                item.color && Array.isArray(item.color)
                  ? `linear-gradient(${item.color.join(", ")}, rgba(0, 0, 0, 0)), url(${item.picture})`
                  : `url(${item.picture})`,
              backgroundSize: "cover",
              backgroundPosition: "50%",
              backgroundRepeat: "no-repeat",
              display: "block",
            }}
            className="relative flex h-[148px] w-[129px] items-end justify-end rounded-xl pl-4 md:h-[234px] md:w-[190px]"
          >
            <div className="absolute bottom-3 left-4 flex flex-col">
              <h4 className="text-sm font-semibold text-white">{item.name}</h4>

              <p className="text-[11px] font-medium text-white">Active Now</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Stories;
