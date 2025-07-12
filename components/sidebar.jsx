'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
    const pathname = usePathname();

    const links = [
        { label: 'روزنامه امروز', href: '/', icon: '/icons/vuesax-broken-chart.svg' },
        { label: 'آرشیو روزنامه', href: '/archive', icon: '/icons/vuesax-twotone-note.svg' },
        { label: 'یادداشت‌ها', href: '/notes', icon: '/icons/vuesax-twotone-quote-up-circle.svg' },
        { label: 'جستجو', href: '/search', icon: '/icons/vuesax-twotone-search-status.svg' },
        { label: 'ارتباط با ما', href: '/contact', icon: '/icons/vuesax-twotone-video-square.svg' },
    ];

    return (
        <div className="hidden lg:flex flex-col items-end bg-white p-6 w-[15%] space-y-6 shadow-md">
            <Image src="/logo.png" alt="لوگو" width={200} height={80} />
            <div className="w-full flex justify-center">
                <div className="text-right w-[70%] space-y-5 text-base text-gray-600">
                    {links.map((link) => {
                        const isActive = pathname === link.href;

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`flex items-center justify-end gap-1 transition-colors duration-200 min-w-0 ${
                                    isActive
                                        ? 'text-[#d8a652] font-extrabold text-lg'
                                        : 'hover:text-[#d8a652]'
                                }`}
                            >
                                <span className="whitespace-nowrap">{link.label}</span>
                                <Image src={link.icon} alt={link.label} width={20} height={20} />
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
