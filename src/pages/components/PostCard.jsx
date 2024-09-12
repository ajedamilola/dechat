/* eslint-disable react/prop-types */
import { Card, ButtonGroup, Button, Avatar } from "flowbite-react";
import { MdThumbUp, MdThumbDown } from "react-icons/md";

function PostCard({ cardType = "image" }) {
  return (
    <div className="mb-2">
      <div className="min-h-[500px] rounded-lg bg-gray-900 p-[0px] pb-2">
        <div className="flex p-3 text-white">
          <Avatar />
          <div className="">
            <h2 className="text-2xl">Aje Damilola</h2>
          </div>
          <div className="flex-1"></div>
          <div className="">25th June 2024</div>
        </div>
        <div className="h-[300px]">
          {cardType == "image" ? (
            <img
              className="h-full w-full object-cover"
              src="https://images.pexels.com/photos/28209723/pexels-photo-28209723/free-photo-of-women-overlooking-city-at-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          ) : (
            <div></div>
          )}
          <div className="p-4">
            <h1 className="pt-3 text-3xl font-bold text-white">
              Welcome to My App
            </h1>
            <p className="pb-3 text-white opacity-80">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
              est enim quam tempora libero ad cum mollitia et delectus eveniet
              atque, vero rem consequatur illum fugiat possimus officia.
              Molestias, error.
            </p>
            <ButtonGroup>
              <Button>
                <MdThumbUp />
              </Button>
              <Button>
                <MdThumbDown />
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
