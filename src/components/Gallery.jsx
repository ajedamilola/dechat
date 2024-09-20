import React from "react";
import { BsBrightnessHigh } from "react-icons/bs";
import { RxReload } from "react-icons/rx";

const Gallery = () => {
  return (
    <div className="rounded-lg bg-white px-[15px] py-[20px] font-montserrat">
      <div className="flex w-full items-center justify-between">
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
    </div>
  );
};

export default Gallery;
