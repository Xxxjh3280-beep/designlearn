import React from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchPage: React.FC = () => {
    const [searchParams] = useSearchParams(); 
    
    // 2. 使用 searchParams.get('q') 方法获取名为 'q' 的参数值
    // 'q' 是我们在 SearchBar 中定义的查询参数的 key
    const searchTerm = searchParams.get('q'); 

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">搜索结果</h1>
            
            {/* 3. 根据是否获取到关键词来动态显示内容 */}
            {searchTerm ? (
                <>
                    <p className="text-xl text-blue-600 mb-6">
                        您搜索的关键词是：
                        <span className="font-semibold ml-2 text-black">"{searchTerm}"</span>
                    </p>
                    <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
                        <p className="text-gray-600">正在搜索与 **"{searchTerm}"** 相关的课程和内容...</p>
                        <p className="mt-2 text-sm text-gray-500">（此数据通过 **useSearchParams** 从 URL 中获取）</p>
                    </div>
                </>
            ) : (
                <p className="text-lg text-gray-500">请在 URL 中输入搜索关键词，例如：/search?q=教程</p>
            )}
        </div>
    );
};
export default SearchPage;