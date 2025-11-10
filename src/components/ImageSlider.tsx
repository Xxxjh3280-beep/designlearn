// src/components/ImageSlider.tsx

import React from 'react';

// 导入 Swiper 组件和样式
import { Swiper, SwiperSlide } from 'swiper/react';

// 核心样式 (必须导入)
import 'swiper/css'; 
// 分页器（小圆点）样式
import 'swiper/css/pagination'; 

// 导入 Swiper 模块
// 我们需要 Pagination（分页器）和 Autoplay（自动播放）功能
import { Pagination, Autoplay } from 'swiper/modules'; 


// --- 接口定义 ---
interface AdImage {
    id: number;
    src: string; // 图片路径
    alt: string; // 图片描述
}

interface ImageSliderProps {
    images: AdImage[];
}


/**
 * 广告轮播图组件
 * 使用 Swiper 实现自动左右滑动和分页器
 */
const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {

    // 只有一张图片时，不使用轮播功能，直接渲染图片
    if (!images || images.length === 0) {
        return <div className="text-gray-500 text-center py-4">无广告图片</div>;
    }

    if (images.length === 1) {
        return (
            <div className="relative w-full h-full">
                <img 
                    src={images[0].src} 
                    alt={images[0].alt} 
                    className='w-full h-full object-contain rounded-lg shadow-md' 
                />
            </div>
        );
    }


    return (
        <div className="w-full h-full">
            <Swiper
                // 启用所需的模块
                modules={[Pagination, Autoplay]}
                
                // --- 基本配置 ---
                spaceBetween={15}         // Slide 之间的距离 (px)
                slidesPerView={1}         // 每页显示的 Slide 数量
                loop={true}               // 开启循环模式（首尾相接）

                // --- 自动播放配置 ---
                autoplay={{
                    delay: 3500,          // 自动切换的时间间隔（毫秒）
                    disableOnInteraction: false, // 用户滑动后不停止自动播放
                }}

                // --- 分页器配置（底部的小圆点）---
                pagination={{ 
                    clickable: true,      // 小圆点可以点击切换
                    // 使小圆点颜色更清晰，适应您的背景色
                    bulletClass: 'swiper-pagination-bullet bg-white !opacity-50 !w-2 !h-2', 
                    bulletActiveClass: '!opacity-100 !bg-white !w-2 !h-2',
                }}

                // 容器自定义类名，添加相对定位和内边距，确保分页器可见
                className="mySwiper w-full h-full relative pb-8" 
            >
                {images.map((image) => (
                    <SwiperSlide key={image.id}>
                        {/* 图片标签 */}
                        <img 
                            src={image.src} 
                            alt={image.alt} 
                            // 关键样式：确保图片填充满 Slide 且保持比例，解决适配问题
                            className='w-full h-full object-contain rounded-lg shadow-md' 
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ImageSlider;