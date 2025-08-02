function YoutubePlayer({ id, title }) {
    if (!id) return null;
    
    const embedUrl = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;

    return (
        <div className="w-full aspect-video mb-4 rounded-lg overflow-hidden">
            <iframe
                width="100%"
                height="100%"
                src={embedUrl}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
            />
        </div>
    )
}

export default YoutubePlayer;