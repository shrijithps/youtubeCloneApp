import VideoCard from "./VideoCard";

export default function HomePage() {
    return (
        <div>
            <VideoCard
                video={{
                    id: 'abc123',
                    title: 'React Tutorial',
                    thumbnail: 'https://images.pexels.com/photos/461940/pexels-photo-461940.jpeg',
                    channelTitle: 'Code with Sam',
                    channelAvatar: 'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/179324860/original/e78e0691dd182d7bff57084fa8491a5bd4648ae1/design-your-avatar-for-twitch-or-youtube-channel.png',
                    views: '1.2M views',
                    publishedAt: '3 days ago',
                }}
            />
        </div>
    );
}