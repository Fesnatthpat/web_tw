import React, { useEffect, useRef, useState } from "react";
import song from '../assets/img/song/Birds Of A Feather.mp3';
import heroImage from '../assets/img/S__16285729.jpg'; // import รูปภาพตรงนี้

export default function Page1() {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false); // state เพื่อเก็บสถานะเพลง

    useEffect(() => {
        // เริ่มเล่นเพลงเมื่อ component โหลดเสร็จ แต่ browser บางตัวอาจไม่อนุญาต autoplay
        if (audioRef.current) {
            audioRef.current.play().then(() => {
                setIsPlaying(true); // อัปเดต state เมื่อเพลงเล่น
            }).catch(() => {
                console.log('Auto-play prevented, please click play button');
            });
        }
    }, []);

    const handlePlayPause = () => {
        if (audioRef.current.paused) {
            audioRef.current.play();
            setIsPlaying(true); // อัปเดต state เป็นกำลังเล่น
        } else {
            audioRef.current.pause();
            setIsPlaying(false); // อัปเดต state เป็นหยุดเล่น
        }
    };

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row mt-20">
                    {/* ใช้รูปภาพที่นำเข้ามา */}
                    <img
                        src={heroImage} // ใช้ตัวแปรที่ import รูปภาพเข้ามา
                        className="md:max-w-sm rounded-lg shadow-2xl"
                        alt="Hero" />
                    <div>
                        {/* ข้อความบอกรักใหม่ */}
                        <h1 className="text-5xl font-bold text-purple-700">You are my sunshine, my everything.</h1>
                        <p className="py-6 text-xl text-gray-600">
                            From the moment I met you, my world became brighter and more beautiful. You complete me in ways I never thought possible.
                        </p>
                    </div>

                    <p className="text-white mt-4">Enjoy the music while browsing</p>
                    {/* ใส่ Audio Element */}
                    <audio ref={audioRef} src={song} loop />
                    {/* ปุ่มแสดงข้อความตามสถานะการเล่นเพลง */}
                    <button onClick={handlePlayPause} className="btn btn-secondary mt-4">
                        {isPlaying ? 'Pause' : 'Play'}
                    </button>
                </div>
            </div>
        </div>
    );
}
