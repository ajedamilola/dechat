import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Stories from "../components/Stories";

const NewsFeed = () => {
  return (
    <div className="font-montserrat">
      <div className="flex h-screen flex-col">
        <div className="fixed top-0 w-full">
          <Navbar />
        </div>

        <div className="mt-16 flex flex-1 gap-4 overflow-hidden p-3 lg:p-5">
          <div className="hidden w-[220px] border-r md:block">
            <Sidebar />
          </div>

          <div className="no-scrollbar max-h-screen flex-1 overflow-y-auto">
            <Stories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsFeed;
