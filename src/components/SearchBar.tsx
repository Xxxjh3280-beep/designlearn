import { useState } from 'react'
import "tailwindcss";
import logo from '../assets/1.Logo.png';
import searchlogo from '../assets/searchlogo.png';
// 显式定义组件的 Props 类型，虽然这里没有 props，但为了保持规范性

// ✅ 可读性强，方便注释和修改
const SearchBar: React.FC = () => {
    return (
// 根容器
<div className='flex w-[90%] mx-auto items-center'>
{/* logo  */}
    <h1 className='w-13 h-13 bg-amber-50 rounded-2xl border-2 border-white shrink-0 overflow-hidden'>
    <img 
                src={logo}
                alt="logo" 
                className="w-full h-full object-contain" 
            />
    </h1>
    
    
{/* searchbar */}
    <div className=" bg-white w-[85%] h-12 bg-opacity-50 p-1 transform translate-x-[5%] rounded-2xl shadow-lg flex items-center text-gray-700  ;">
        <h1 className='w-6 h-6 ml-2'>
        <img 
                src={searchlogo}
                alt="search logo" 
                className="w-full h-full object-contain" 
            />
        </h1>
      <input type="text" placeholder="2025最新figma教程" className='pl-2 border-none focus:outline-none grow'/>
      <button className="h-[90%]  text-white bg-black  flex items-center px-4 py-1 whitespace-nowrap rounded-full self-right  shrink-0  active:bg-gray-600">
                    搜一下
                </button>
    </div>
  </div>

    );
  };


export default SearchBar;