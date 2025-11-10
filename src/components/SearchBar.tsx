import { useState } from 'react'
import "tailwindcss";
import logo from '../assets/1.Logo.png';
import searchlogo from '../assets/searchlogo.png';
import { useNavigate } from 'react-router-dom';


const SearchBar: React.FC = () => {
  // 1. 初始化 useNavigate Hook
  const navigate = useNavigate();
    
  // 2. 声明状态来存储输入框的值
  const [searchTerm, setSearchTerm] = useState('2025最新figma教程');

  // 3. 定义跳转逻辑函数
  const handleSearch = () => {
      const trimmedTerm = searchTerm.trim();
      if (trimmedTerm !== '') {
          // 使用 navigate 函数进行编程化跳转
          // 跳转到 /search 路径，并带上查询参数 q
          // encodeURIComponent 确保中文或特殊字符在 URL 中正确编码
          navigate(`/search?q=${encodeURIComponent(trimmedTerm)}`);
      }
  };
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
    {/* 输入框：绑定状态值和事件 */}
      <input type="text" placeholder="2025最新figma教程" className='pl-2 border-none focus:outline-none grow'
      value={searchTerm} // ✨ 绑定状态值
      onChange={(e) => setSearchTerm(e.target.value)} // ✨ 更新状态
      onKeyDown={(e) => { // 允许按回车键搜索
          if (e.key === 'Enter') {
              handleSearch();
          }
      }}
      />

      

      <button 
      onClick={handleSearch}
      className="h-[90%]  text-white bg-black  flex items-center px-4 py-1 whitespace-nowrap rounded-full self-right  shrink-0  active:bg-gray-600">
                    搜一下
                </button>
    </div>
  </div>

    );
  };


export default SearchBar;