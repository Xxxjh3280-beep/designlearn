import React from 'react';
import productpage from '../assets/详情页.png'
import { useParams } from 'react-router-dom';

const  ProductPage= () => {
    const params = useParams();
    const productId = params.productId; // productId 的值就是 URL 中的那一部分
    return(
<div className='w-screen min-h-screen flex flex-col bg-gray-50'>
    <img 
    src={productpage} 
    alt="productpage" 
    className='w-full h-full flex items-center' />
</div>

    )
}

export default ProductPage