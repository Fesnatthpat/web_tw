import React, { useEffect, useRef } from "react";
import song from '../assets/img/song/Birds Of A Feather.mp3';
import heroImage from '../assets/img/S__16285729.jpg'; // import รูปภาพตรงนี้

export default function Page1() {
    const audioRef = useRef(null);

    useEffect(() => {
        // เริ่มเล่นเพลงเมื่อ component โหลดเสร็จ แต่ browser บางตัวอาจไม่อนุญาต autoplay
        if (audioRef.current) {
            audioRef.current.play().catch(() => {
                console.log('Auto-play prevented, please click play button');
            });
        }
    }, []);

    const handlePlayPause = () => {
        if (audioRef.current.paused) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    };

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row mt-20">
                    {/* ใช้รูปภาพที่นำเข้ามา */}
                    <img
                        src={heroImage} // ใช้ตัวแปรที่ import รูปภาพเข้ามา
                        className="md:max-w-sm rounded-lg shadow-2xl "
                        alt="Hero" />
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                    <p className="text-white mt-4">Enjoy the music while browsing</p>
                    {/* ใส่ Audio Element */}
                    <audio ref={audioRef} src={song} loop />
                    <button onClick={handlePlayPause} className="btn btn-secondary mt-4">
                        {audioRef.current?.paused ? 'Play' : 'Pause'}
                    </button>
                </div>
            </div>
        </div >
    );
}
