import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { BsCameraVideo } from "react-icons/bs";
import { RxDotsHorizontal } from "react-icons/rx";
import { colors } from "../constants";
import { MdClose } from "react-icons/md";

const Posts = () => {
  const [hideComponent, setHideComponent] = useState(false);
  const [bgColors, setBgColors] = useState({
    firstColor: "",
    lastColor: "",
  });

  return (
    <div className="w-full">
      <div className="w-full rounded-lg bg-white px-4 py-4 text-gray-500">
        {hideComponent ? (
          <>
            <div
              style={{
                background: `linear-gradient(to bottom, ${bgColors.firstColor}, ${bgColors.lastColor})`,
              }}
              className="relative flex h-[230px] w-full items-center justify-center rounded-md border-gray-400"
            >
              <div className="">
                <input
                  type="text"
                  className="border-none bg-transparent font-roboto text-xl tracking-tight text-gray-800 outline-none placeholder:text-gray-600"
                  placeholder="Write Something Here..."
                />
              </div>

              {/* Close button */}
              <div
                className="absolute -right-3 -top-2"
                onClick={() => setHideComponent(false)}
              >
                <MdClose size={23} className="cursor-pointer text-primary" />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center justify-between">
              <div className="flex w-full items-center gap-4">
                <h1 className="text-xl font-semibold">Create Post</h1>

                <div className="flex items-center gap-0.5">
                  <p className="font-roboto text-[12px] font-medium">Public </p>
                  <BiChevronDown size={19} />
                </div>

                <div className="flex items-center gap-1">
                  <BsCameraVideo size={19} />
                  <p className="font-roboto text-[12px] font-medium">Go live</p>
                </div>
              </div>

              <div>
                <RxDotsHorizontal size={13} />
              </div>
            </div>

            {/* Input */}
            <div className="my-2 flex w-full items-center justify-between rounded-md bg-[#EDF7FB] pr-3">
              <input
                type="text"
                className="flex-1 border-none bg-transparent px-3 py-3 font-roboto text-[13px] outline-none placeholder:text-gray-500"
                placeholder="Write Something Here."
              />
              <img
                src="/src/assets/svg/emoji/sign.webp"
                alt="sign"
                className="w-4"
              />
            </div>
          </>
        )}

        {/* Color Palette */}
        <div className="flex items-center gap-2 pt-4">
          {colors.map((item, index) => (
            <div
              key={index}
              className="size-[20px] cursor-pointer rounded-full"
              style={{
                background: `linear-gradient(to bottom, ${item.first}, ${item.last})`,
              }}
              onClick={() => {
                setBgColors({ firstColor: item.first, lastColor: item.last });
                setHideComponent(true);
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Posts;
