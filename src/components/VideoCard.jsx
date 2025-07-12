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
        <Link to={`/watch/${id}`}>
            <div className="">
                <img
                    src={thumbnail}
                    alt={title}
                    className=""
                />

            <div className="">
                <img
                    src={channelAvatar}
                    alt={channelTitle}
                    className=""
                />
             </div>

             <div className="">
                 <h2>{title}</h2>
                 <p>{channelTitle}</p>
                 <p>{views} * {publishedAt}</p>
             </div>


            </div>
        </Link>
    )
}