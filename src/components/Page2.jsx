import React from 'react';

function Page2() {
    // อาร์เรย์ที่เก็บที่อยู่ของรูปภาพทั้งหมด
    const imageArray = [
        "/assets/images/LINE_ALBUM_121067_241013_1.jpg",
        "/assets/images/LINE_ALBUM_121067_241013_2.jpg",
        "/assets/images/LINE_ALBUM_121067_241013_3.jpg",
        "/assets/images/LINE_ALBUM_121067_241013_4.jpg",
        "/assets/images/LINE_ALBUM_121067_241013_5.jpg",
        "/assets/images/LINE_ALBUM_121067_241013_6.jpg",
        "/assets/images/LINE_ALBUM_121067_241013_7.jpg",
        "/assets/images/LINE_ALBUM_121067_241013_8.jpg"
    ];

    return (
        <>
            <div className='mx-auto flex justify-center items-center'>
                <div className="carousel carousel-center bg-neutral rounded-box max-w-md space-x-4 p-4">
                    {/* ใช้ map เพื่อนำรูปภาพจากอาร์เรย์มาแสดง */}
                    {imageArray.map((imageSrc, index) => (
                        <div key={index} className="carousel-item">
                            <img
                                src={imageSrc}
                                alt={`Carousel item ${index + 1}`}
                                className="rounded-box max-w-sm object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Page2;
