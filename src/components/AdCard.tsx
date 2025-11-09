import "tailwindcss";
import React from 'react';
import starIcon from '../assets/11.五角星.png'; 
import userIcon1 from '../assets/13.头像1.png';
import userIcon2 from '../assets/14.头像2.png';
import userIcon3 from '../assets/15.头像3.png';
import adcard from '../assets/12.课程封面.png'

interface AdCardProps {
    title: string;
    courseName: string;
    price: string;
    userCount: number;
    tags: string[];
    adImagePath: string; // 接收课程封面的路径
}

const AdCard: React.FC<AdCardProps> = ({ 
    title, 
    courseName, 
    price, 
    userCount, 
    tags, 
    adImagePath 
}) => {
    return (
        <div className="mt-6">
        {/* 粉白背景渐变 */}
        <div className="w-full h-40 bg-red-200 rounded-3xl flex justify-center items-center relative">
            {/* 1. 广告区域标题 ("新课预订") 和装饰
            <h2 className="text-base font-bold absolute text-gray-800 mb-6 relative">
                {title}
                
                {/* 💥 顶部红色/星形标签 (使用 starIcon 图片) */}
                {/* <div 
                    className="absolute top-[-25px] left-0 
                               rounded-br-lg rounded-tl-lg 
                               text-black text-lg font-semibold px-3 py-1 
                               shadow-md transform rotate-[-3deg] whitespace-nowrap "
                >
                    {/* 💥 使用 starIcon 图片 */}
                    {/* <img 
                        src={starIcon} 
                        alt="Star Icon" 
                        className="w-8 h-8 -top-2.5 -left-2.5 inline-block mr-1 align-text-bottom object-contain" 
                    />
                    新课预约
                </div>
            </h2>  */} 
            
            {/* 2. 广告卡片主体 */}
            <div className="w-[90%] bg-white rounded-xl shadow-xl  flex border relative text-align:center">
                
                {/* 右上角 HOT 标签 */}
                <div 
                    className="absolute -top-2.5 right-[-10px] z-10 /* 稍微突出边缘 */
                               w-8 h-8 rounded-full 
                               bg-red-600 border border-white shadow-md 
                               flex items-center justify-center"
                >
                    <span className="text-white text-xs font-bold leading-none">HOT</span>
                </div>

                {/* 2.1 左侧图片区域 (w-2/5) */}
                <div className="w-2/5 flex-shrink-0">
                    <img 
                        src={adImagePath} // 接收到的课程封面图片路径
                        alt={courseName} 
                        className="w-full h-full object-cover" 
                    />
                </div>

                {/* 2.2 右侧详情区域 (p-3) */}
                <div className="p-3 flex-grow flex flex-col justify-between">
                    <div className="space-y-1">
                        {/* 主标题 */}
                        <h3 className="text-sm font-bold text-gray-800 line-clamp-2">{courseName}</h3>
                        
                        {/* 标签 */}
                        <div className="flex flex-wrap gap-1">
                            {tags.map((tag, index) => (
                                <span key={index} className="text-[10px] text-gray-500 border border-gray-300 px-1 rounded-full whitespace-nowrap">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* 价格和统计信息 */}
                    <div className="flex justify-between items-end mt-2">
                        {/* 价格 */}
                        <p className="text-red-500 font-bold">
                            <span className="text-xs">¥</span>
                            <span className="text-lg">{price}</span>
                        </p>
                        
                        {/* 学习人数 (头像叠加效果) */}
                        <div className="flex items-center text-gray-500 text-xs">
                            {/* 💥 三个用户头像，使用 -space-x-1 实现叠加 */}
                            <div className="flex -space-x-1 overflow-hidden mr-1">
                                <img className="inline-block h-4 w-4 rounded-full ring-1 ring-white object-cover" src={userIcon1} alt="User 1"/>
                                <img className="inline-block h-4 w-4 rounded-full ring-1 ring-white object-cover" src={userIcon2} alt="User 2"/>
                                <img className="inline-block h-4 w-4 rounded-full ring-1 ring-white object-cover" src={userIcon3} alt="User 3"/>
                            </div>
                            {userCount}人在学
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AdCard;