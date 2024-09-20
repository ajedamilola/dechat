import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Stories from "../components/Stories";
import Profile from "../components/Profile";
import CreatePost from "../components/CreatePost";
import Posts from "../components/Posts";
import FriendSuggestion from "@/components/FriendSuggestion";

const NewsFeed = () => {
  return (
    <div className="font-montserrat">
      <div className="flex h-full flex-col">
        <div className="fixed top-0 z-50 w-full">
          <Navbar />
        </div>

        <div className="mt-16 flex flex-1 gap-4 overflow-hidden p-3 md:pr-3 lg:p-5 lg:px-2">
          <div className="z-[99] hidden md:block md:w-[260px] lg:w-[220px]">
            <Sidebar />
          </div>

          <div className="no-scrollbar max-h-screen flex-1 overflow-y-auto">
            <Stories />

            <div className="flex w-full flex-col-reverse gap-5 pt-0 md:pt-4 lg:flex-row">
              <div className="flex w-full flex-col gap-4 lg:w-[280px]">
                <Profile />
                <FriendSuggestion />
              </div>

              <div className="flex flex-1 flex-col gap-2">
                <CreatePost />
                <Posts />
              </div>

              <div className="w-full lg:w-[280px]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsFeed;
