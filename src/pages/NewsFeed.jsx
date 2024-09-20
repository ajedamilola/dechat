import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Stories from "@/components/Stories";
import Profile from "@/components/Profile";

import FriendSuggestion from "@/components/FriendSuggestion";
import LikedPages from "@/components/LikedPages";
import Games from "@/components/Games";
import Gallery from "@/components/Gallery";
import CreatePost from "@/components/CreatePost";
import Posts from "@/components/Posts";

const NewsFeed = () => {
  return (
    <div className="font-montserrat">
      <div className="flex h-full flex-col">
        <div className="fixed top-0 z-50 w-full">
          <Navbar />
        </div>

        <div className="mt-16 flex flex-1 gap-4 overflow-hidden p-0 md:pr-3 lg:p-5 lg:px-2">
          <div className="z-[99] hidden md:block md:w-[260px] lg:w-[220px] xl:w-[220px] 2xl:w-[300px]">
            <Sidebar />
          </div>

          <div className="no-scrollbar+ max-h-screen flex-1 overflow-y-scroll">
            <Stories />

            <div className="flex w-full flex-col-reverse gap-4 pt-0 md:pt-4 lg:flex-row">
              <div className="flex w-full flex-col gap-4 lg:w-[280px] xl:w-[260px] 2xl:w-[380px]">
                <Profile />
                <FriendSuggestion />
                <div className="sticky top-0">
                  <LikedPages />
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-4 lg:flex-row">
                <div className="flex flex-1 flex-col gap-2">
                  <CreatePost />
                  <Posts />
                </div>

                <div className="flex w-full flex-col gap-3 lg:w-[280px] xl:w-[260px] 2xl:w-[380px]">
                  <Games />
                  <Gallery />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsFeed;
