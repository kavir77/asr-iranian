'use client';

import Sidebar from '@/components/sidebar';
import BottomNav from '@/components/BottomNav';

export default function Contact() {
    return (
        <>
            {/* 🖥 دسکتاپ */}
            <div className="hidden lg:flex min-h-screen bg-[#f2f2f2]">
                <div className="w-full lg:w-[85%] flex flex-col items-center justify-center px-6 py-4">
                    <h1 className="text-3xl font-bold text-gray-600">در حال ساخت...</h1>
                </div>
                <Sidebar />
            </div>

            {/* 📱 موبایل */}
            <div className="lg:hidden min-h-screen bg-[#f2f2f2] pb-20 flex items-center justify-center">
                <h1 className="text-2xl font-bold text-gray-600">در حال ساخت...</h1>

                {/* ناوبری پایین موبایل */}
                <div className='w-full bottom-0 left-0 fixed flex justify-center bg-white h-16 drop-shadow-xl drop-shadow-gray-600'>
                    <button className="flex flex-col items-center text-xl w-1/3 h-full">
                        <span className="text-xl my-auto">یادداشت‌ها</span>
                    </button>
                    <button className="flex flex-col items-center text-xl w-1/3 h-full">

                        <span className="text-xl my-auto">امروز</span>
                    </button>
                    <button className="flex flex-col items-center text-xl w-1/3 h-full">

                        <span className="text-xl my-auto">آرشیو</span>
                    </button>
                </div>
            </div>
        </>
    );
}
