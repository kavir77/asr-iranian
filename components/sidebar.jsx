import Image from 'next/image';

export default function Sidebar() {
    return (
        <div className="hidden lg:flex flex-col items-end bg-white p-6 w-[15%] space-y-6 shadow-md">
            <Image src="/logo.png" alt="لوگو" width={200} height={80} />
            <div className='w-full flex justify-center'>
                <div className="text-right w-[70%] space-y-5 text-base text-gray-600">
                    <div className="font-extrabold text-lg text-[#d8a652]">روزنامه امروز</div>
                    <div>آرشیو روزنامه</div>
                    <div>یادداشت‌ها</div>
                    <div>جستجو</div>
                    <div>ارتباط با ما</div>
                </div>
            </div>
        </div>

    );
}
