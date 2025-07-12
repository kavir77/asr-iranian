'use client';

import { useState } from 'react';
import editions from '@/data/editions.json';
import Header from '@/components/header';
import NewspaperView from '@/components/NewspaperView';
import Sidebar from '@/components/sidebar';
import BottomNav from '@/components/BottomNav';


export default function HomePage({ pdfUrl }) {
    const [selectedId, setSelectedId] = useState('1');
    const edition = editions.find((e) => e.id === selectedId);

    return (
        <>
            {/* 🖥 دسکتاپ */}
            <div className="hidden lg:flex min-h-screen bg-[#f2f2f2]">
                {/* بخش اصلی */}
                <div className="w-full lg:w-[85%] flex flex-col items-center px-6 py-4 space-y-4">
                    <Header
                        pdfUrl={edition?.pdfUrl}
                        editions={editions}
                        selectedId={selectedId}
                        onSelect={setSelectedId}
                    />
                    <NewspaperView imageUrl={edition?.imageUrl} number={edition?.number} />
                </div>

                {/* سایدبار */}
                <Sidebar />
            </div>

            {/* 📱 موبایل */}
            <div className="lg:hidden min-h-screen bg-[#f2f2f2] pb-16">
                {/* 👇👇 اینجا طراحی موبایل خودتو انجام بده 👇👇 */}
                <Header
                    pdfUrl={edition?.pdfUrl}
                    editions={editions}
                    selectedId={selectedId}
                    onSelect={setSelectedId}
                />
                <div className='w-[90%] ml-[5%] rounded-xl bg-white drop-shadow-xl drop-shadow-gray-300'>
                    <NewspaperView imageUrl={edition?.imageUrl} number={edition?.number} />
                </div>
                {/* بخش طراحی موبایل اختصاصی */}
                {/* بخش طراحی موبایل اختصاصی */}
                <div className="px-4 space-y-4 mt-6 text-center pb-8">  {/* mb برای جلوگیری از هم‌پوشانی */}
                    <button className="bg-black text-white text-xl px-5 py-3 rounded hover:bg-gray-900 w-[70%] duration-500">
                        🔍 انتخاب تاریخ
                    </button>

                    <a href={edition?.pdfUrl} download>
                        <button className="bg-[#f3f3f3] text-black text-xl px-5 py-3 rounded w-[70%] hover:bg-gray-300 drop-shadow-xl drop-shadow-gray-300 duration-500">
                            📥 دانلود نسخه الکترونیکی
                        </button>
                    </a>
                </div>
                <div className="w-full bottom-0 left-0 fixed flex justify-center bg-white h-16 drop-shadow-xl drop-shadow-gray-600">
                    <button className="flex flex-col items-center text-xs w-1/3 h-full justify-center">
                        <img src="/icons/vuesax-twotone-quote-up-circle.svg" alt="یادداشت‌ها" className="w-6 h-6 mb-1" />
                        <span className="text-sm">یادداشت‌ها</span>
                    </button>

                    <button className="flex flex-col items-center text-xs w-1/3 h-full justify-center">
                        <img src="/icons/vuesax-broken-chart.svg" alt="امروز" className="w-6 h-6 mb-1" />
                        <span className="text-sm">امروز</span>
                    </button>

                    <button className="flex flex-col items-center text-xs w-1/3 h-full justify-center">
                        <img src="/icons/vuesax-twotone-note.svg" alt="آرشیو" className="w-6 h-6 mb-1" />
                        <span className="text-sm">آرشیو</span>
                    </button>
                </div>

            </div>
        </>
    );
}
