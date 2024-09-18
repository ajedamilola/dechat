import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Stories from "../components/Stories";
import Profile from "../components/Profile";

const NewsFeed = () => {
  return (
    <div className="font-montserrat">
      <div className="flex h-full flex-col">
        <div className="fixed top-0 z-50 w-full">
          <Navbar />
        </div>

        <div className="mt-16 flex flex-1 gap-4 overflow-hidden p-3 lg:p-5">
          <div className="hidden w-[220px] border-r md:block">
            <Sidebar />
          </div>

          <div className="no-scrollbar max-h-screen flex-1 overflow-y-auto">
            <Stories />

            <div className="flex w-full flex-row gap-5 pt-4">
              <div className="w-[300px]">
                <Profile />
              </div>

              <div className="flex-1">
                <Posts />
              </div>

              <div className="w-[300px]">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsFeed;
