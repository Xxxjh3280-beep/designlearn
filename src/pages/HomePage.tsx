// src/pages/HomePage.tsx

import React from 'react';
// 导入您的组件
import SearchBar from '../components/SearchBar'; 
import QuickAccess from '../components/QuickAccess';
import background from '../assets/background.png';


const HomePage = () => {
    return (
        // 外层容器：确保页面高度和背景色
        <div className="w-screen min-h-screen flex flex-col bg-gray-50"> 
            
            {/* 1. 顶部背景容器 (background-top) */}
            <div 
                // 确保渐变色 w-full h-[36vh] relative 都在
                className="w-full h-[30vh] relative bg-gradient-to-b from-orange-300 to-red-500 overflow-hidden z-0" 
            >
                {/* 插入背景图片 */}
                <img 
                    className="h-full w-full opacity-75 m-0 p-0 object-cover" 
                    // 确保您的图片资源名是正确的
                    src={background}
                    alt="backgroundImage"
                />

                {/* 2. 搜索栏容器 (绝对定位，叠加在背景上) */}
                {/* SearchBar 组件应该被放置在 Background 容器内部，才能相对于它定位 */}
                <div className="absolute inset-x-0 top-[30%] flex justify-center">
                    {/* 导入 SearchBar 组件。它内部已经包含了 ml-[5%] 等定位逻辑 */}
                    <SearchBar /> 
                </div>

            </div>
            <div className='relative grow bg-neutral-200  pt-3 -mt-30 shadow-lg rounded-t-xl '>
            {/* 3. 快速入口模块及页面主体内容 */}
            <div className="max-w-6xl mx-auto px-4 relative z-10">
                 {/* -mt-12 让 QuickAccess 模块稍微向上与背景重叠，增强视觉效果 */}
                 <QuickAccess />
            </div>

            </div>

        </div>
    );
};

export default HomePage;