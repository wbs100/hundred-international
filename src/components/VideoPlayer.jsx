import { useState, useRef, useEffect } from 'react';

const VideoPlayer = ({ 
    video, 
    isPlaying, 
    onPlayClick, 
    isInView = true,
    showControls = true,
    showPlayButton = true,
    showLogo = true,
    logoText = "100",
    className = "",
    aspectRatio = "aspect-video",
    thumbnailTime = 1
}) => {
    const [thumbnail, setThumbnail] = useState(null);
    const videoRef = useRef(null);

    // Generate thumbnail from video
    const generateThumbnail = (videoElement) => {
        return new Promise((resolve) => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            const captureFrame = () => {
                try {
                    canvas.width = videoElement.videoWidth || 640;
                    canvas.height = videoElement.videoHeight || 360;

                    if (videoElement.videoWidth > 0 && videoElement.videoHeight > 0) {
                        ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
                        const thumbnailUrl = canvas.toDataURL('image/jpeg', 0.8);
                        setThumbnail(thumbnailUrl);
                        resolve(thumbnailUrl);
                    }
                } catch (error) {
                    console.error('Error generating thumbnail:', error);
                }
            };

            // Set the video to a specific time for thumbnail
            videoElement.currentTime = thumbnailTime;

            const handleSeeked = () => {
                captureFrame();
                videoElement.removeEventListener('seeked', handleSeeked);
            };

            if (videoElement.readyState >= 3) {
                captureFrame();
            } else {
                videoElement.addEventListener('seeked', handleSeeked);
                videoElement.addEventListener('loadeddata', () => {
                    videoElement.currentTime = thumbnailTime;
                }, { once: true });
            }
        });
    };

    // Handle video metadata loaded
    const handleVideoLoaded = (videoElement) => {
        setTimeout(() => {
            generateThumbnail(videoElement);
        }, 100);
    };

    // Handle video play/pause based on props
    useEffect(() => {
        if (videoRef.current) {
            if (isPlaying && isInView) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
        }
    }, [isPlaying, isInView]);

    return (
        <div className={`relative ${aspectRatio} bg-black rounded-xl overflow-hidden ${className}`}>
            {/* Thumbnail overlay when not playing */}
            {!isPlaying && thumbnail && (
                <img
                    src={thumbnail}
                    alt={video.title || 'Video thumbnail'}
                    className="absolute inset-0 w-full h-full object-cover z-20"
                />
            )}

            {/* Video Player */}
            <video
                ref={videoRef}
                className={`w-full h-full object-cover ${
                    isPlaying ? 'relative z-30' : 'opacity-0 absolute z-10'
                }`}
                controls={isPlaying && showControls}
                muted
                loop
                preload="metadata"
                playsInline
                onClick={() => onPlayClick && onPlayClick(video.id)}
                onLoadedMetadata={(e) => {
                    handleVideoLoaded(e.target);
                }}
            >
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Video overlay elements */}
            <div className="absolute inset-0 pointer-events-none z-40">
                {/* Play button overlay (only show when not playing) */}
                {!isPlaying && showPlayButton && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
                        <button
                            className="bg-orange-500/80 backdrop-blur-md rounded-full p-4 hover:bg-orange-500 transition-all duration-300 hover:scale-110 shadow-lg"
                            onClick={() => onPlayClick && onPlayClick(video.id)}
                        >
                            <svg
                                className="w-12 h-12 text-white ml-1"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </button>
                    </div>
                )}

                {/* Logo overlay */}
                {showLogo && (
                    <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md rounded-lg p-2 border border-orange-500/50">
                        <span className="text-orange-500 text-xl font-bold">{logoText}</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default VideoPlayer;