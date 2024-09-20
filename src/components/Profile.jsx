import React from "react";

const Profile = () => {
  return (
    <div className="flex w-full items-center justify-center rounded-lg bg-white py-[15px]">
      <div className="flex flex-col items-center justify-center gap-3 pt-4">
        <div className="relative rounded-full bg-gradient-to-r from-primary via-white to-white p-1">
          <img
            src="/src/assets/story/8.jpg"
            alt="avatar"
            className="object-to size-[110px] rounded-full bg-white object-cover p-1"
          />

          {/* check sign */}
          <div className="absolute right-2.5 top-3 flex size-6 items-center justify-center rounded-full bg-white">
            <img
              src="/src/assets/svg/sidebar-vector/check.webp"
              alt="check"
              className="size-4"
            />
          </div>
        </div>

        <div className="text-center">
          <h1 className="text-center font-semibold text-gray-700">
            Kelin Jesen ❤
          </h1>

          <p className="text-center font-roboto text-[13px] text-gray-600">
            jesenkelin75@gmail.com
          </p>

          <p className="py-5 font-roboto text-[13px] text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
            repellat!
          </p>

          <div className="flex items-center justify-evenly pt-2">
            <div className="flex flex-col items-center">
              <h1 className="text-lg font-bold leading-[1] text-gray-700">
                893
              </h1>

              <p className="font-roboto text-[13px] text-gray-600">Followers</p>
            </div>

            <div className="h-5 w-[1.3px] bg-gray-500"></div>

            <div className="flex flex-col items-center">
              <h1 className="text-lg font-bold leading-[1] text-gray-700">
                893
              </h1>

              <p className="font- font-roboto text-[13px] text-gray-600">
                Following
              </p>
            </div>

            <div className="h-5 w-[1.3px] bg-gray-500"></div>

            <div className="flex flex-col items-center">
              <h1 className="text-lg font-bold leading-[1] text-gray-700">
                30892
              </h1>

              <p className="font-roboto text-[13px] text-gray-600">Likes</p>
            </div>
          </div>

          <button className="mt-6 rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
