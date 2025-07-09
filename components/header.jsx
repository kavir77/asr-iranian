'use client';

import EditionSelector from './EditionSelector';
import Image from 'next/image';

export default function Header({ pdfUrl, editions, selectedId, onSelect }) {
    return (
        <>
            {/* 🖥 نمایش در دسکتاپ */}
            <div className="hidden lg:flex text-center justify-center w-full">
                <div className="flex justify-between w-[95%] max-w-5xl items-center bg-gray-300 px-6 rounded-2xl py-2">
                    <a
                        href={pdfUrl}
                        download
                        className="bg-[#f3f3f3] text-sm text-black px-4 py-3 rounded shadow hover:bg-gray-300"
                    >
                        📥 دانلود نسخه الکترونیکی
                    </a>
                    <EditionSelector
                        editions={editions}
                        selectedId={selectedId}
                        onSelect={onSelect}
                    />
                    <button className="bg-black text-white text-sm px-5 py-3 rounded-xs hover:bg-gray-900">
                        🔍 انتخاب تاریخ
                    </button>
                </div>
            </div>

            {/* Mobile mode */}

            <div className="lg:hidden w-full space-y-4 text-center flex flex-col justify-center pb-4">
                <div className="flex flex-col items-center space-y-4 py-4 justify-center bg-white drop-shadow-xl drop-shadow-gray-300">
                    <Image src="/logo.png" alt="لوگو" width={180} height={80} />
                </div>
                <div className='w-[90%] ml-[5%] rounded-xl bg-gray-300 drop-shadow-xl drop-shadow-gray-300' >
                    <EditionSelector
                        editions={editions}
                        selectedId={selectedId}
                        onSelect={onSelect}
                    />
                </div>

            </div>
        </>
    );
}
