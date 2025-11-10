// src/pages/HomePage.tsx

import React from 'react';
// 导入您的组件
import SearchBar from '../components/SearchBar'; 
import QuickAccess from '../components/QuickAccess';
import background from '../assets/background.png';
import adcard from '../assets/新课模块.png'
import ImageSlider from '../components/ImageSlider';

// 定义广告图片数据结构
interface AdImage {
    id: number;
    src: string; 
    alt: string; 
}

const adImages = [
    { id: 1, src: adcard, alt: "新课预约广告 1" },
    { id: 2, src: adcard, alt: "新课预约广告 2" },
    { id: 3, src: adcard, alt: "新课预约广告 3" },
];

const HomePage = () => {
    return (
// 外层容器：确保页面高度和背景色
    <div className="w-screen min-h-screen flex flex-col bg-gray-50"> 
            
    {/* 1. 顶部背景容器 (background-top) */}
        <div 
            className="w-full max-h-[20vh] relative bg-gradient-to-b from-orange-300 to-red-500 overflow-hidden z-0" 
            >
            {/* 插入背景图片 */}
            <img 
                className="h-full w-full opacity-75 m-0 p-0 object-cover" 
                src={background}
                alt="backgroundImage"
            />
        <div className="absolute inset-0 bg-linear-to-b 
                        from-transparent 
                via-transparent via-80% 
                to-neutral-200"></div>
        {/* 搜索栏 */}
            <div className="absolute inset-x-0 top-[30%] flex justify-center">
                    <SearchBar /> 
                </div>

            </div>
    {/* 灰色主内容卡片容器 */}
    <div className='relative grow min-h-[70%]: bg-linear-to-b from-neutral-200/80 to-neutral-200  pt-2  shadow-lg rounded-t-xl -mt-12'>
        {/* 3. 快速入口模块及页面主体内容 */}
        <div className="max-w-6xl mx-auto px-4 relative z-10">
            <QuickAccess />
        </div>
    {/* 广告模块 */}
    <div className="w-full mx-auto relative -mt-3 
                h-48 sm:h-64 lg:h-72 
                max-w-full md:max-w-4xl lg:max-w-6xl 
                px-3 md:px-0">
        <ImageSlider images={adImages} />

        </div>
    </div>


            </div>
    );
};

export default HomePage;