import "tailwindcss";
import React from 'react';
import card1 from '../assets/card1.png'
import card2 from '../assets/card2.png'
import designIcon from '../assets/6.交互设计.png';
import uiIcon from '../assets/7.UI设计.png';
import expIcon from '../assets/8.体验设计.png';
import pmIcon from '../assets/9.产品经理.png';
import otherIcon from '../assets/10.其他拓展.png';
const QuickAccess: React.FC = () => {

    interface CardProps {
        title: string;
        subtitle: string;
        colorClass: string;
        icon: string; 
    }
    // --- 图标链接组件的接口定义 ---
    interface IconLinkProps {
    label: string;
    iconPath: string; // 💥 接收图标图片路径
}

    const Card: React.FC<CardProps> = ({ title, subtitle, colorClass,icon}) => (
        <div 
            className={`w-1/2 h-22 p-4 rounded-2xl shadow-lg 
                        bg-gradient-to-br ${colorClass}
                        flex flex-col justify-between relative overflow-hidden`}
        >
            <div>
                <h3 className="text-lg font-bold text-black">{title}</h3>
                <p className="text-sm opacity-90 text-gray-500">{subtitle}</p>
            </div>
            <img 
            src={icon} // 接收到正确的图片路径变量
            alt="Card Icon" 
            className="absolute bottom-[-15px] right-[-15px] w-28 h-28 object-contain opacity-40" 
        />
        </div>
    );

// --- 图标链接组件 (IconLink) ---
const IconLink: React.FC<IconLinkProps> = ({ label, iconPath }) => (
    <div className="flex flex-col items-center cursor-pointer">
        {/* 1. 图标容器：圆形容器，尺寸 w-12 h-12，白色背景，并添加轻微阴影 */}
        <div className="w-12 h-12 bg-white rounded-full mb-1 flex items-center justify-center shadow-md">
            {/* 2. 插入图片：尺寸 w-8 h-8，直接使用传入的路径 */}
            <img 
                src={iconPath} 
                alt={label} 
                className="w-15 h-15 object-contain" 
            />
        </div>
        {/* 3. 底部文字 */}
        <span className="pt-2 text-xs text-gray-700 whitespace-nowrap">{label}</span>
    </div>
);


// --- QuickAccess 主组件 ---

    return (
        <div className="py-4"> 
            
            {/* 1. 顶部卡片区域 (基础课程 & 知识库) */}
            <div className="flex space-x-4 mb-8 ">
                {/* 1.1 基础课程卡片 (左侧) */}
                {/* 注意：为了在手机端也显示良好，使用 w-1/2 保证它们并排 */}
                <Card 
                    title="基础课程" 
                    subtitle="入门第一步" 
                    colorClass="from-blue-300 to-white"
                    icon={card1}
                    // icon={videoIcon} 
                />
                
                {/* 1.2 知识库卡片 (右侧) */}
                <Card 
                    title="知识库" 
                    subtitle="体系化阅读" 
                    colorClass="from-cyan-300 to-white"
                    icon={card2}
                    // icon={bookIcon} 
                />
            </div>

            {/* 2. 底部圆形图标区域 (Grid 布局) */}
            {/* 使用 Grid 布局和 space-x/y 保证间距 */}
            <div className="grid grid-cols-5 gap-y-4 gap-x-2 justify-items-center">
                
                <IconLink label="交互设计" iconPath={designIcon} />
                <IconLink label="UI设计" iconPath={uiIcon} />
                <IconLink label="体验设计" iconPath={expIcon} />
                <IconLink label="产品经理" iconPath={pmIcon} />
                <IconLink label="其他拓展" iconPath={otherIcon} />
            </div>

        </div>
    );
};

export default QuickAccess;