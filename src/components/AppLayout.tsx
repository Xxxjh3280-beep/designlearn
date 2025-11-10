import React from 'react';
import { Outlet } from 'react-router-dom'; // 导入 Outlet

// 这个组件作为整个应用的最外层布局容器
const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Outlet /> 

    </div>
  );
};

export default AppLayout;