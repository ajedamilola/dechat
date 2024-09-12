/* eslint-disable react/prop-types */
import { Card, ButtonGroup, Button, Avatar } from "flowbite-react"
import { MdThumbUp, MdThumbDown } from "react-icons/md"

function PostCard({ cardType = "image" }) {
    return (
        <div className="mb-2">
            <div className="pb-2 min-h-[500px] p-[0px] bg-gray-900 rounded-lg">
                <div className="p-3 flex text-white">
                    <Avatar />
                    <div className="">
                        <h2 className="text-2xl">Aje Damilola</h2>
                    </div>
                    <div className="flex-1"></div>
                    <div className="">25th June 2024</div>
                </div>
                <div className="h-[300px]">
                    {cardType == "image" ?
                        <img className="object-cover w-full h-full" src="https://images.pexels.com/photos/28209723/pexels-photo-28209723/free-photo-of-women-overlooking-city-at-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                        :
                        <div></div>
                    }
                    <div className="p-4">

                        <h1 className="text-white text-3xl font-bold pt-3">Welcome to My App</h1>
                        <p className="text-white opacity-80 pb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus est enim quam tempora libero ad cum mollitia et delectus eveniet atque, vero rem consequatur illum fugiat possimus officia. Molestias, error.</p>
                        <ButtonGroup>
                            <Button><MdThumbUp /></Button>
                            <Button><MdThumbDown /></Button>
                        </ButtonGroup>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostCard