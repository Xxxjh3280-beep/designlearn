// 声明所有 .css 文件为模块，允许 TypeScript 导入
declare module '*.css' {
    const content: { [className: string]: string };
    export default content;
  }
  
  // 如果你只希望声明 Swiper CSS，可以更具体地声明
  declare module 'swiper/css';
  declare module 'swiper/css/pagination';