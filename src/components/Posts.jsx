import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { BsCameraVideo } from "react-icons/bs";
import { RxDotsHorizontal } from "react-icons/rx";
import { colors, reactions } from "../constants";
import { MdClose } from "react-icons/md";

const Posts = () => {
  const [hideComponent, setHideComponent] = useState(false);
  const [reactionDetails, setReactionDetails] = useState({
    placeholder: "",
    icon: "",
  });
  const [react, setReact] = useState(false);
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
                  className="border-none bg-transparent text-center font-roboto text-xl tracking-tight text-gray-800 outline-none placeholder:text-gray-600"
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
                className="flex-1 border-none bg-transparent px-3 py-3 font-roboto text-[13px] outline-none placeholder:text-black/60"
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
        <div className="flex items-center gap-2 py-4">
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

        {/* reaction inputs */}
        {react && (
          <div className="flex items-center justify-between rounded border px-2 font-roboto text-[12px]">
            <reactionDetails.icon size={20} />

            <input
              type="text"
              className="flex-1 border-none py-2 pl-2 outline-none placeholder:text-gray-600"
              placeholder={reactionDetails.placeholder}
            />

            <MdClose
              onClick={() => setReact(false)}
              className="cursor-pointer"
            />
          </div>
        )}

        {/* reactions */}
        <div className="pt-3 font-roboto">
          <div className="flex flex-wrap gap-x-2 gap-y-2">
            {reactions.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  setReact(true);
                  setReactionDetails({
                    placeholder: item.placeholder,
                    icon: item.icon,
                  });
                }}
                className="flex cursor-pointer items-center gap-1 rounded border px-2 py-1.5"
              >
                <item.icon size={20} />

                <p className="text-[14px] font-medium">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
