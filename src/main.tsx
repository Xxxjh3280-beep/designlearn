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

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
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
