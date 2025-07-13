import React from 'react';
import {Link} from 'react-router-dom';

export default function VideoCard({video}) {
    const{
        id,
        title,
        thumbnail,
        channelTitle,
        channelAvatar,
        views,
        publishedAt,
    } = video

    return (
        <Link to={`/watch/${id}`} className="w-1/3 sm:w-80 cursor-pointer">
            <div className="flex flex-col rounded-xl overflow-hidden hover:shadow-md sm:w-1/4 mx-2">
                <img
                    src={thumbnail}
                    alt={title}
                    className=" h-44 object-cover w-full"
                />

            <div className="flex flex-row p-3">
                <div className="flex p-3 gap-3">
                    <img
                        src={channelAvatar}
                        alt={channelTitle}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                 </div>

                 <div className="flex flex-col">
                     <h1 className="fomt-semibold">{title}</h1>
                     <p className="text-gray-600 dark:text-gray-400 text-xs">{channelTitle}</p>
                     <p className="text-gray-500 text-xs dark:text-gray-500">{views} * {publishedAt}</p>
                 </div>
            </div>

            </div>
        </Link>
    )
}