import { galleryPhotos } from "@/constants";
import { cn } from "@/lib/utils";
import React from "react";
import { BsBrightnessHigh } from "react-icons/bs";
import { RxReload } from "react-icons/rx";

const Gallery = () => {
  return (
    <div className="rounded-lg bg-white font-montserrat">
      <div className="flex w-full items-center justify-between px-[15px] py-[20px]">
        <h1 className="text-[17px] font-semibold text-black/75">Gallery</h1>

        <div className="flex items-center space-x-3">
          <p className="font-roboto text-xs font-medium text-textColor">
            169 Photos
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

      <div className="grid grid-cols-3 gap-1.5 p-[6px] pt-0">
        {galleryPhotos.map((item, index) => (
          <img
            src={item.picture}
            key={index}
            alt="photos"
            className={cn("", {
              "col-span-1 row-span-1 size-[154.6px] object-cover lg:size-[85.3px]":
                index <= 2,
              "col-span-1 size-[154.6px] object-cover lg:size-[85px]":
                index == 3,
              "col-span-2 row-span-2 size-[315px] w-full object-cover lg:size-[175px]":
                index === 4,
              "size-[154.6px] object-cover lg:size-[85px]": index === 5,
            })}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
