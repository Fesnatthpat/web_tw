import React, { useEffect, useRef, useState } from "react";
import Page2 from "./Page2";

export default function Page1() {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    // ใช้เส้นทางเสียงที่ถูกต้อง
    const Songsrc = "../assets/song/Billie Eilish  BIRDS OF A FEATHER Official Music Video.mp3"; // ไม่ต้องมี /public/

    useEffect(() => {
        const playAudio = async () => {
            if (audioRef.current) {
                try {
                    await audioRef.current.play();
                    setIsPlaying(true);
                } catch (error) {
                    console.log('Auto-play prevented, please click play button');
                }
            }
        };

        playAudio();
    }, []);

    const handlePlayPause = () => {
        if (audioRef.current.paused) {
            audioRef.current.play();
            setIsPlaying(true);
        } else {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    };

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src="/assets/images/LINE_ALBUM_121067_241013_2.jpg"
                        className="md:max-w-sm rounded-lg shadow-2xl mt-20 shadow-blue-500/50"
                        alt="Hero" />
                    <div>
                        <h1 className="text-5xl font-bold text-purple-700">You are my sunshine, my everything.</h1>
                        <p className="py-6 text-xl text-gray-600">
                            From the moment I met you, my world became brighter and more beautiful. You complete me in ways I never thought possible.
                        </p>
                    </div>

                </div>
            </div>
                <Page2 />
            <div className="mx-20 flex flex-col items-center">
                <p className="text-white mt-4">Enjoy the music while browsing</p>
                <audio ref={audioRef} src={Songsrc} loop />
                <button onClick={handlePlayPause} className="btn btn-secondary mt-4">
                    {isPlaying ? 'Pause' : 'Play'}
                </button>
            </div>
        </div>
    );
}
