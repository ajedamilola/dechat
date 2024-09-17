/* eslint-disable react/prop-types */

import React from 'react';
import { Card, Avatar } from 'flowbite-react';

const PostCard = ({ author, content, image, timestamp }) => {
    return (
        <Card className="max-w-sm mx-auto my-4">
            <div className="flex items-center space-x-4 mb-4">
                <Avatar img={author.avatar} rounded />
                <div>
                    <p className="text-lg font-semibold">{author.name}</p>
                    <p className="text-sm text-gray-500">{timestamp}</p>
                </div>
            </div>
            {content && <p className="mb-4">{content}</p>}
            {image && (
                <img
                    src={image}
                    alt="Post content"
                    className="w-full h-auto rounded-lg mb-4"
                />
            )}
            <div className="flex justify-between items-center">
                <button className="text-blue-600 hover:underline">Like</button>
                <button className="text-blue-600 hover:underline">Comment</button>
                <button className="text-blue-600 hover:underline">Share</button>
            </div>
        </Card>
    );
};

export default PostCard;
