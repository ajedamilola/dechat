import { RxDotsHorizontal } from "react-icons/rx";
import { emojiType, emojis, people } from "../constants";
import moment from "moment";
import { cn } from "../lib/utils";
import { MdBookmark, MdOutlineBookmarkBorder } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import { GoComment, GoShare } from "react-icons/go";
import { BsEmojiSmile } from "react-icons/bs";

export const SinglePost = ({ post, isActive, setActivePostId }) => {
  const [toggle, setToggle] = useState(false);
  const [closeReaction, setCloseReaction] = useState(false);

  const dropdownRef = useRef(null);

  // Handle Reaction
  const handleReaction = (id) => {
    setActivePostId((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setToggle(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="">
      {/* Post header */}
      <div className="flex items-center justify-between p-3 pb-0">
        <div className="flex items-center gap-3">
          <img
            src={post.profilePicture}
            alt="profile"
            className="size-14 rounded-full object-cover"
          />

          <div>
            <h2 className="text-[13.6px] font-semibold text-titleColor">
              {post.name}
            </h2>
            <p className="font-roboto text-[11.6px] font-medium text-textColor">
              {moment(post.timePosted).fromNow()}
            </p>
          </div>
        </div>

        <RxDotsHorizontal size={14} />
      </div>

      {/* Post Images */}
      <div className="pt-3">
        {post?.postImages?.length > 0 && post?.postImages?.length === 1 && (
          <div className="">
            {post?.postImages?.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="post-img"
                className="block max-h-[451.5px] w-full object-cover"
              />
            ))}
          </div>
        )}
      </div>

      {/* Post Content */}
      <div className="p-2.5 pb-2">
        <div className="flex items-center justify-between">
          <h1 className="flex-1 text-[17px] font-bold text-titleColor">
            {post?.postTitle}
          </h1>

          <div
            onClick={() => setToggle((prev) => !prev)}
            className="flex size-[30px] cursor-pointer items-center justify-center rounded bg-bgColor"
          >
            {toggle ? (
              <MdBookmark size={14} className="text-gray-500" />
            ) : (
              <MdOutlineBookmarkBorder size={14} className="text-gray-400" />
            )}
          </div>
        </div>

        <div className="flex space-x-2 py-1.5">
          {post?.postHashtags?.map((item, index) => (
            <p
              key={index}
              className={cn(
                "flex items-center text-[13.6px] font-medium text-titleColor",
                {
                  "font-semibold text-[#4a9cd2]": index === 0,
                },
              )}
            >
              {item}
            </p>
          ))}
        </div>

        <p className="font-roboto text-[15px] text-textColor">
          {post?.postDescription}
        </p>

        {/* Reactions */}
        <div className="flex items-center gap-2">
          <div className="relative flex items-center py-2">
            {people.map((item, index) => (
              <img
                src={item}
                key={index}
                alt="react-img"
                className={cn(
                  "size-[27px] rounded-full border-2 border-white object-cover",
                  {
                    "absolute left-3.5 z-10": index === 1,
                    "absolute left-[26px] z-10": index === 2,
                  },
                )}
              />
            ))}
          </div>
          <p className="pl-6 font-roboto text-[12px] font-medium text-titleColor">
            +{post?.numberOfPostReactions} people react to this post
          </p>
        </div>
      </div>

      <hr />

      {/* Reactions and Comments */}
      <div className="flex items-center justify-between px-3 py-3">
        <div className="flex flex-1 items-center gap-3">
          <div className="flex space-x-2">
            {post.postReactions.map((reaction, index) => {
              const emoji = emojiType.find(
                (emoji) => Object.keys(emoji)[0] === reaction,
              );
              return (
                emoji && (
                  <img
                    key={index}
                    src={emoji[reaction]}
                    alt={reaction}
                    className="h-[24px] w-[24px]"
                  />
                )
              );
            })}
          </div>

          <p className="font-roboto text-[12px] font-medium text-titleColor">
            +{Number(post?.numberOfPostReactions) - 43}
          </p>
        </div>

        {/* Amount of Comment and Shares */}
        <div className="flex items-center gap-3 text-gray-500">
          <div className="flex items-center gap-0.5">
            <GoComment size={18} />

            <p className="font-roboto text-[13px] font-bold">
              {Number(post?.numberOfPostReactions) - 76}
            </p>
          </div>

          <div className="flex items-center gap-0.5">
            <GoShare size={18} />

            <p className="font-roboto text-[13px] font-bold">
              {post?.numberOfShares}
            </p>
          </div>
        </div>
      </div>

      {/* React, Comment, Share */}
      <div className="relative mb-3 flex w-full items-center justify-around border-y border-gray-100 bg-[#edf7fb40] py-3 text-gray-600">
        {/* React */}
        <div
          onClick={() => handleReaction(post.id)} // Use a function to handle click
          className="flex cursor-pointer items-center gap-1"
        >
          <BsEmojiSmile />

          <p className="text-sm font-medium">React</p>
        </div>

        {/* Comment */}
        <div className="flex cursor-pointer items-center gap-1">
          <GoComment />

          <p className="text-sm font-medium">Comment</p>
        </div>

        {/* Share */}
        <div className="flex cursor-pointer items-center gap-1">
          <GoShare />

          <p className="text-sm font-medium">Share</p>
        </div>

        {/* Show Emoji Reactions */}
        {isActive && ( // Check if this post's reactions should be shown
          <div className="absolute -top-[35px] left-14 flex items-center gap-4 rounded bg-white px-[15px] py-[12px] shadow">
            {emojis.map((emoji, index) => (
              <img
                key={index}
                src={emoji}
                alt="emojis"
                className="size-[25px]"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
