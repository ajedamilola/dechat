import { RxDotsHorizontal } from "react-icons/rx";
import { allPosts, emojiType, emojis, people } from "../constants";
import moment from "moment";
import { cn } from "../lib/utils";
import { MdBookmark, MdClose, MdOutlineBookmarkBorder } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import { GoComment, GoShare } from "react-icons/go";
import { BsEmojiSmile } from "react-icons/bs";
import { motion } from "framer-motion";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap.css";
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";
import { BiChevronDown } from "react-icons/bi";
import { SlGlobe } from "react-icons/sl";

const Posts = () => {
  const [activePostId, setActivePostId] = useState(null);

  return (
    <>
      <div className="mt-2 flex flex-col gap-4">
        {allPosts.map((post) => (
          <div key={post.id} className="rounded bg-white">
            <SinglePost
              post={post}
              isActive={activePostId === post.id}
              setActivePostId={setActivePostId}
            />
          </div>
        ))}
      </div>
    </>
  );
};

const SinglePost = ({ post, isActive, setActivePostId }) => {
  const [toggle, setToggle] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [sharedPost, setSharedPost] = useState({});

  const emojiDropdownRef = useRef(null);

  // Animation variants for the emoji dropdown
  const dropdownVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.2, 1, 0.3, 1],
      },
    },
  };

  // Animation variants for each emoji
  const emojiVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.2,
      },
    }),
    hover: {
      scale: 1.2, // Scale up
      y: -5, // Move up slightly
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  };

  // Closing emoji when losses focus
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        emojiDropdownRef.current &&
        !emojiDropdownRef.current.contains(event.target)
      ) {
        setActivePostId(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [emojiDropdownRef, setActivePostId]);

  // Handle Reaction
  const handleReaction = (id) => {
    setActivePostId((prev) => (prev === id ? null : id));
  };

  // Handle Share
  const handleShare = (id) => {
    const postToShare = allPosts.find((prev) => prev.id === id);

    if (postToShare) {
      setSharedPost(postToShare);
      setOpenModal(true);
    } else {
      console.error("Post not found");
    }
  };

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
      <div>
        {post?.postImages?.length > 0 && post?.postImages?.length === 1 && (
          <div className="pt-3">
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

        {post?.postImages?.length > 0 && post?.postImages?.length === 3 && (
          <div className="grid grid-cols-2 gap-3 p-2 pt-3">
            {post?.postImages?.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="post-img"
                className={cn("", {
                  "col-span-1 row-span-1 h-[155.078px] w-full object-cover":
                    index === 0 || index === 1,
                  "col-span-2 row-span-2 h-[283px] w-full object-cover":
                    index === 2,
                })}
              />
            ))}
          </div>
        )}

        {post?.postImages?.length > 0 && post?.postImages?.length === 2 && (
          <div className="grid grid-cols-2 gap-3 p-2 pt-3">
            {post?.postImages?.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="post-img"
                className="h-[229.5px] w-full object-cover"
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

        <div className="flex space-x-2 py-1">
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
                className="size-[27px] rounded-full border-2 border-white object-cover"
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
          onClick={() => handleReaction(post.id)}
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
        <div
          onClick={() => handleShare(post.id)}
          className="flex cursor-pointer items-center gap-1"
        >
          <GoShare />
          <p className="text-sm font-medium">Share</p>
        </div>

        {/* Show Emoji Reactions */}
        {isActive && (
          <motion.div
            ref={emojiDropdownRef}
            initial="hidden"
            animate="visible"
            variants={dropdownVariants}
            className="absolute -top-[35px] left-14 flex items-center gap-4 rounded bg-white px-[15px] py-[12px] shadow"
          >
            {emojis.map((emoji, index) => (
              <Tooltip
                key={index}
                placement="top"
                overlay={emoji.name}
                showArrow={false}
                overlayInnerStyle={{
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "45px",
                  height: "20px",
                  minHeight: "20px",
                }}
              >
                <motion.img
                  src={emoji.img}
                  alt="emojis"
                  className="size-[25px] cursor-pointer"
                  variants={emojiVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  custom={index}
                />
              </Tooltip>
            ))}
          </motion.div>
        )}
      </div>

      {/* Share Modal */}
      <Dialog open={openModal} onOpenChange={setOpenModal}>
        <DialogContent className="flex flex-col p-0">
          <div className="flex items-center justify-between border-b p-[12px] font-roboto text-titleColor">
            <div className="flex flex-1 items-center gap-2">
              <h3 className="text-[13.3px] font-bold">Share As Post</h3>

              <BiChevronDown size={18} />
            </div>

            <MdClose onClick={() => setOpenModal(false)} size={25} />
          </div>

          {/* Middle Content */}
          <div className="flex-1 border-b px-3 pb-3">
            <div className="flex items-center gap-3">
              <img
                src={sharedPost.profilePicture}
                alt="shared-profile-picture"
                className="size-[50px] rounded-full object-cover"
              />

              <div className="flex flex-col gap-1 text-gray-600">
                <h3 className="font-montserrat text-[13.5px] font-bold">
                  {sharedPost.name}
                </h3>

                <div className="flex items-center gap-1 rounded border border-gray-300 px-2 py-1.5">
                  <SlGlobe />

                  <p className="font-roboto text-sm font-medium">Public</p>

                  <BiChevronDown size={18} />
                </div>
              </div>
            </div>

            <div className="mt-5">
              <input
                type="text"
                className="w-full rounded border border-gray-300 bg-transparent px-3 py-1 font-roboto outline-none placeholder:text-gray-600"
                placeholder="Write a comment..."
              />
            </div>

            {/* Shared Post Images */}
            <div>
              {sharedPost?.postImages?.length > 0 &&
                sharedPost?.postImages?.length === 1 && (
                  <div className="pt-3">
                    {sharedPost?.postImages?.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt="post-img"
                        className="block h-[233px] w-full object-cover"
                      />
                    ))}
                  </div>
                )}

              {sharedPost?.postImages?.length > 0 &&
                sharedPost?.postImages?.length === 3 && (
                  <div className="grid grid-cols-2 gap-3 pt-3">
                    {sharedPost?.postImages?.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt="post-img"
                        className={cn("", {
                          "col-span-1 row-span-1 h-[116.5px] w-full object-cover":
                            index === 0 || index === 1,
                          "col-span-2 row-span-2 h-[116.5px] w-full object-cover":
                            index === 2,
                        })}
                      />
                    ))}
                  </div>
                )}

              {sharedPost?.postImages?.length > 0 &&
                sharedPost?.postImages?.length === 2 && (
                  <div className="grid w-[466px] grid-cols-2 gap-3 pt-3">
                    {sharedPost?.postImages?.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt="post-img"
                        className="h-[233px] w-full object-cover"
                      />
                    ))}
                  </div>
                )}
            </div>

            {/* Shared Post Content */}
            <div className="pt-3 font-montserrat">
              <h1 className="flex-1 font-montserrat text-[15px] font-bold text-titleColor">
                {post?.postTitle}
              </h1>

              <div className="flex space-x-2 py-1">
                {sharedPost?.postHashtags?.map((item, index) => (
                  <p
                    key={index}
                    className={cn(
                      "flex items-center text-[13.6px] font-medium text-titleColor",
                      {
                        "font-semibold text-[#4a9cd2]": index === 0,
                        "font-roboto font-medium text-textColor": index >= 1,
                      },
                    )}
                  >
                    {item}
                  </p>
                ))}
              </div>

              {sharedPost?.postImages?.length === 0 && (
                <p className="font-roboto text-[15px] text-textColor">
                  {post?.postDescription}
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-end px-3 pb-3">
            <button className="w-fit rounded-md bg-primary px-3 py-2 font-montserrat text-sm font-semibold text-white">
              Shared Post
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Posts;
