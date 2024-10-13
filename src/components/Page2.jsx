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
        "/assets/images/LINE_ALBUM_121067_241013_8.jpg",
        "/assets/images/LINE_ALBUM_121067_241013_9.jpg",
        "/assets/images/LINE_ALBUM_121067_241013_10.jpg",
        "/assets/images/LINE_ALBUM_121067_241013_11.jpg",
        "/assets/images/LINE_ALBUM_121067_241013_12.jpg",
        "/assets/images/LINE_ALBUM_121067_241013_13.jpg",
        "/assets/images/LINE_ALBUM_121067_241013_14.jpg",
        "/assets/images/LINE_ALBUM_121067_241013_15.jpg",
        "/assets/images/LINE_ALBUM_121067_241013_16.jpg",
        "/assets/images/LINE_ALBUM_121067_241013_17.jpg",
        "/assets/images/LINE_ALBUM_121067_241013_18.jpg",
        "/assets/images/LINE_ALBUM_121067_241013_19.jpg",
        "/assets/images/LINE_ALBUM_121067_241013_20.jpg",
        "/assets/images/LINE_ALBUM_121067_241013_21.jpg",
        "/assets/images/LINE_ALBUM_121067_241013_22.jpg",
        "/assets/images/LINE_ALBUM_121067_241013_23.jpg",
        "/assets/images/LINE_ALBUM_121067_241013_24.jpg",
        "/assets/images/LINE_ALBUM_121067_241013_25.jpg",
        "/assets/images/LINE_ALBUM_121067_241013_26.jpg",
        "/assets/images/LINE_ALBUM_121067_241013_27.jpg",
        "/assets/images/LINE_ALBUM_121067_241013_28.jpg",
        "/assets/images/LINE_ALBUM_121067_241013_29.jpg",
        "/assets/images/LINE_ALBUM_121067_241013_30.jpg",
        "/assets/images/LINE_ALBUM_121067_241013_31.jpg",
        "/assets/images/LINE_ALBUM_121067_241013_32.jpg",
        "/assets/images/LINE_ALBUM_121067_241013_33.jpg",
        "/assets/images/LINE_ALBUM_121067_241013_34.jpg",
        "/assets/images/LINE_ALBUM_121067_241013_35.jpg",
        "/assets/images/LINE_ALBUM_121067_241013_36.jpg",
        "/assets/images/LINE_ALBUM_121067_241013_37.jpg",
    ];

    return (
        <>
            <div className='mx-auto flex justify-center items-center w-full'>
                <div className="carousel carousel-center bg-neutral w-full rounded-box space-x-4 p-4">
                    {/* ใช้ map เพื่อนำรูปภาพจากอาร์เรย์มาแสดง */}
                    {imageArray.map((imageSrc, index) => (
                        <div key={index} className="carousel-item w-full md:w-1/3">
                            <img
                                src={imageSrc}
                                alt={`Carousel item ${index + 1}`}
                                className="rounded-box h-[450px] md:h-80 w-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Page2;
