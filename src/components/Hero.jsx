// components/Hero.js
import React from "react";
import { Link } from "react-router-dom";
import videoSrc from '../assets/img/video/vdo_1.mp4'; // นำเข้าไฟล์วิดีโอจากตำแหน่งที่ถูกต้อง'

export default function Hero() {
    return (
        <div>
            <header>
                <div className="hero min-h-screen relative">
                    <video
                        className="absolute inset-0 w-full h-full object-cover"
                        src={videoSrc} // ใช้ไฟล์วิดีโอที่อิมพอร์ตมา
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center relative z-10">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl text-pink-500 font-bold">Hello there</h1>
                            <p className="mb-5">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.
                            </p>
                            <Link to="Page1">
                                <button className="btn btn-primary">
                                    Get Started
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}
