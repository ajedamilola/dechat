import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const NewsFeed = () => {
  return (
    <div className="relative font-montserrat">
      <div className="fixed top-0 w-full">
        <Navbar />
      </div>

      <div className="mt-16 flex h-screen w-full flex-col gap-5 p-4 md:flex-row">
        <Sidebar />

        <div className="flex-1"></div>
      </div>
    </div>
  );
};

export default NewsFeed;
