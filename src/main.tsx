import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from "react-dom/client";
import './index.css'
import HomePage from './pages/HomePage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AppLayout from './components/AppLayout'; 
import ProductPage from './pages/ProductPage'
import SearchPage from './pages/SearchPage';

const router = createBrowserRouter([
  {
    // path: "/",
    // 根路由使用 AppLayout 作为公共布局
    Component: AppLayout, 
    // 定义子路由
    children: [
        {
            // index: true 表示这是父路径 (path: "/") 的默认子路由
            index: true, 
            Component: HomePage, // / 路径下渲染 HomePage
        },
        // 示例：添加一个 /about 页面作为子路由
        {
            path: "about", // 完整路径是 /about
            element: <div>这是一个关于页面，位于 AppLayout 内部。</div>,
        },
        {
          path: "product/:productId", // 完整路径是 /about
          Component: ProductPage,
      },
        {
        path: "search", 
        Component: SearchPage, // 或者 element: <div>...</div>
      },
      {
        // 只有路径，没有 Component 或 element
        path: "user", // 完整路径是 /user
        children: [
          {
            index: true,
            // 当访问 /user 时显示的默认内容
            element: <div>用户中心首页</div>, 
          },
          {
            path: "profile", // 完整路径是 /user/profile
            element: <div>用户个人资料页</div>, 
          },
    ]
  },
],
  }
]);

// 2. 使用 ReactDOM.createRoot 渲染应用
const rootElement = document.getElementById("root"); 
// 确保您的 index.html 中有一个 id="root" 的 div

if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        {/* 3. 使用 RouterProvider 包装应用并传入 router 配置 */}
        <RouterProvider router={router} />
      </React.StrictMode>
    );
} else {
    console.error("未找到 id 为 'root' 的 DOM 元素。");
}
