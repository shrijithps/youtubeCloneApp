import React, { useEffect, useState } from "react";
import { trendingVideos } from "../services/youtube";
import VideoCard from "./VideoCard";
import YoutubePlayer from "./YoutubePlayer";

export default function HomePage() {

    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        const fetchTrending = async() => {
            const data = await trendingVideos();
            console.log(data);
            setVideos(data);
        }
        fetchTrending();

    }, []);

    return (
            <div className="flex flex-col gap-4">
                {selectedVideo && (
                    <YoutubePlayer
                        id={selectedVideo.id}
                        title={selectedVideo.title}
                    />
                )}

                <div className="flex flex-row flex-wrap">
                    { videos.map((video) => (
                      <div key={video?.id} onClick={() => setSelectedVideo(video)}>
                        <VideoCard
                            video={{
                                id: video?.id,
                                title: video?.channelTitle,
                                thumbnail: video?.thumbnail,
                                channelTitle: video?.channelTitle,
                                channelAvatar: 'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/179324860/original/e78e0691dd182d7bff57084fa8491a5bd4648ae1/design-your-avatar-for-twitch-or-youtube-channel.png',
                                views: video?.views,
                                publishedAt: video?.publishedAt,
                                }}
                        />
                      </div>
                ))}
                </div>
            </div>
    );
}