import React from "react";
import { Link } from "react-router-dom";
import videosrc from "/assets/video/732448327.585782.mp4"

export default function Hero() {
    return (
        <div>
            <header>
                <div className="hero min-h-screen relative">
                    <video
                        className="absolute inset-0 w-full h-full object-cover"
                        src={videosrc} // ใช้เส้นทางจาก public directory
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center relative z-10">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl text-pink-500 font-bold">My love for you grows stronger every day.</h1>
                            <p className="mb-5 text-lg text-gray-700">
                                Every moment with you feels like a dream, and I'm so grateful to have you in my life. You are my heart's greatest treasure.
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
