import React from "react";
import { sidebar } from "../constants";

const Sidebar = () => {
  return (
    <div className="searched fixed hidden h-[calc(100vh-90px)] overflow-y-scroll rounded-md bg-white p-[20px] font-roboto text-gray-600 md:block md:w-[260px] lg:w-[220px]">
      <div className="flex flex-col gap-7">
        <div className="flex flex-row items-center gap-3">
          <img
            src="/src/assets/svg/sidebar-vector/menu.svg"
            alt="menu-icon"
            className="size-8"
          />

          <h4 className="">All Apps</h4>
        </div>

        <hr />

        {/* sidebar items */}
        {sidebar.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            <img src={item.icon} alt="menu-icon" className="size-6" />

            <h4>{item.name}</h4>
          </div>
        ))}

        <hr />

        <div className="flex flex-row items-center gap-3">
          <img
            src="/src/assets/svg/sidebar-vector/next.svg"
            alt="menu-icon"
            className="size-6"
          />

          <h4 className="">Logout</h4>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
