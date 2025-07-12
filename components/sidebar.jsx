'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
    const pathname = usePathname();

    const links = [
        { label: 'روزنامه امروز', href: '/' },
        { label: 'آرشیو روزنامه', href: '/archive' },
        { label: 'یادداشت‌ها', href: '/notes' },
        { label: 'جستجو', href: '/search' },
        { label: 'ارتباط با ما', href: '/contact' },
    ];

    return (
        <div className="hidden lg:flex flex-col items-end bg-white p-6 w-[15%] space-y-6 shadow-md">
            <Image src="/logo.png" alt="لوگو" width={200} height={80} />
            <div className='w-full flex justify-center'>
                <div className="text-right w-[70%] space-y-5 text-base text-gray-600">
                    {links.map((link) => {
                        const isActive = pathname === link.href;

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`block transition-colors duration-200 ${
                                    isActive
                                        ? 'text-[#d8a652] font-extrabold text-lg'
                                        : 'hover:text-[#d8a652]'
                                }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
