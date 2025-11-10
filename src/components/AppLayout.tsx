import React from 'react';
import { Outlet } from 'react-router-dom'; // 导入 Outlet

// 这个组件作为整个应用的最外层布局容器
const appThemeColor = 'orange-500';
const appName = "设计学习App";

const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
        {/* 底部导航栏 */}
        <main>
                {/* ✨ 重点：通过 context 属性传递数据 */}
                <Outlet 
                    context={{ 
                        themeColor: appThemeColor, 
                        appName: appName 
                    }} 
                />
            </main>
    </div>
  );
};

export default AppLayout;