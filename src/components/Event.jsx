import React from "react";
import { BsBrightnessHigh } from "react-icons/bs";
import { RxReload } from "react-icons/rx";
import { LuForward } from "react-icons/lu";
import { birthdayCardImg } from "@/assets";

const Event = () => {
  return (
    <div className="w-full rounded-lg bg-white">
      <div
        className="h-[168px] w-full rounded-t-lg"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${birthdayCardImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex items-center justify-between p-[12px] text-white">
          <h1 className="font-bold">Event</h1>

          <div className="flex items-center gap-2">
            <div className="flex size-6 items-center justify-center rounded-full bg-white">
              <RxReload size={12} className="text-black/70" />
            </div>

            <div className="flex size-6 items-center justify-center rounded-full bg-white">
              <BsBrightnessHigh size={12} className="text-black/70" />
            </div>
          </div>
        </div>
      </div>

      <div className="p-[12px]">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-semibold text-black/70">
              Christmas {new Date().getFullYear()}
            </h1>
            <p className="font-roboto text-xs text-gray-600">
              December 25, {new Date().getFullYear()}
            </p>
          </div>

          <div className="flex size-6 items-center justify-center rounded-sm bg-bgColor">
            <LuForward className="text-black/70" size={12} />
          </div>
        </div>

        <p className="mt-2 font-roboto text-xs text-gray-500">
          Join us for a festive celebration with family and friends. Enjoy
          delicious food, music, and holiday cheer as we commemorate the spirit
          of Christmas.
        </p>

        <button className="mt-3 rounded bg-bgColor px-3 py-2 text-[12px] font-semibold text-primary">
          Going / Not Going
        </button>
      </div>
    </div>
  );
};

export default Event;
