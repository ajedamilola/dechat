import { pagesLiked } from "@/constants";
import { BsBrightnessHigh } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";
import { RxReload } from "react-icons/rx";

const LikedPages = () => {
  return (
    <div className="rounded-lg bg-white px-[15px] py-[20px] font-montserrat">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-[17px] font-semibold text-black/75">Liked Pages</h1>

        <div className="flex items-center space-x-3">
          <p className="font-roboto text-xs font-medium text-textColor">
            18 Pages
          </p>

          <div className="flex items-center gap-2">
            <div className="flex size-6 items-center justify-center rounded-full bg-bgColor">
              <RxReload size={12} />
            </div>

            <div className="flex size-6 items-center justify-center rounded-full bg-bgColor">
              <BsBrightnessHigh size={12} />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-col">
        {pagesLiked.map((item, index) => (
          <div
            key={index}
            className="my-auto flex items-center gap-3 border-t py-4"
          >
            <img
              src={item.logo}
              alt={`${item.name}-logo`}
              className="rounded-full"
            />

            <div className="w-full font-roboto">
              <h2 className="font-medium text-black/75">{item.name}</h2>

              <div className="flex items-center justify-between">
                <p className="text-[12px] text-textColor">{item.desc}</p>

                <div className="flex items-center gap-1 text-textColor">
                  <FaRegUser size={13} />

                  <p className="text-xs">{item.followers}K</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LikedPages;
