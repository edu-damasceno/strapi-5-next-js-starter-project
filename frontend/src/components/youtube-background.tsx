"use client";

import { useEffect, useRef, useState } from "react";

interface YouTubeBackgroundProps {
  videoId: string;
}

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export function YouTubeBackground({ videoId }: YouTubeBackgroundProps) {
  const playerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!videoId) {
      setError("No video ID provided");
      return;
    }

    const loadYouTubeAPI = () => {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    };

    const initPlayer = () => {
      try {
        new window.YT.Player(playerRef.current, {
          videoId: videoId,
          playerVars: {
            autoplay: 1,
            controls: 0,
            disablekb: 1,
            fs: 0,
            iv_load_policy: 3,
            loop: 1,
            modestbranding: 1,
            playsinline: 1,
            rel: 0,
            showinfo: 0,
            mute: 1,
          },
          events: {
            onReady: (event: any) => {
              event.target.mute();
              event.target.playVideo();
            },
            onStateChange: (event: any) => {
              if (event.data === window.YT.PlayerState.ENDED) {
                event.target.playVideo();
              }
            },
            onError: (event: any) => {
              setError(`YouTube player error: ${event.data}`);
            },
          },
        });
      } catch (err) {
        setError(`Error initializing YouTube player: ${err}`);
      }
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      loadYouTubeAPI();
      window.onYouTubeIframeAPIReady = initPlayer;
    }

    return () => {
      window.onYouTubeIframeAPIReady = () => {};
    };
  }, [videoId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-10">
      <div
        ref={playerRef}
        className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100%] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 md:min-h-[100vh] z-10"
      />
    </div>
  );
}
