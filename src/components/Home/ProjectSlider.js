import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const ProjectSlider = () => {
    return (
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 justify-items-center my-7 static'>
            <div className='max-w-sm lg:max-w-md'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 4500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <div>
                        <div>
                            <SwiperSlide>
                                <img src="https://i.ibb.co/qym0YM5/Screenshot-129.png" className='rounded-xl static' alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://i.ibb.co/qym0YM5/Screenshot-129.png" className='rounded-xl static' alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://i.ibb.co/qym0YM5/Screenshot-129.png" className='rounded-xl static' alt="" />
                            </SwiperSlide>
                        </div>
                    </div>
                </Swiper>
            </div>
            <div className='max-w-sm lg:max-w-md'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <div className='w-64'>
                        <div>
                            <SwiperSlide>
                                <img src="https://i.ibb.co/HX7rhjW/Screenshot-128.png" className='rounded-xl static' alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://i.ibb.co/HX7rhjW/Screenshot-128.png" className='rounded-xl static' alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://i.ibb.co/HX7rhjW/Screenshot-128.png" className='rounded-xl static' alt="" />
                            </SwiperSlide>
                        </div>
                    </div>
                </Swiper>
            </div>
            <div className='max-w-sm lg:max-w-md lg:col-span-2'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <div className=''>
                        <div className='w-64 '>
                            <SwiperSlide>
                                <img src="https://i.ibb.co/KVBVX5c/Screenshot-130.png" className='rounded-xl static' alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://i.ibb.co/KVBVX5c/Screenshot-130.png" className='rounded-xl static' alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://i.ibb.co/KVBVX5c/Screenshot-130.png" className='rounded-xl static' alt="" />
                            </SwiperSlide>
                        </div>
                    </div>
                </Swiper>
            </div>
        </div>
    );
};

export default ProjectSlider;