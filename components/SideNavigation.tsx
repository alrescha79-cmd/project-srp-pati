'use client';

import Link from "next/link";
import { RocketIcon, ReaderIcon, HomeIcon } from '@radix-ui/react-icons'
import { usePathname } from "next/navigation";

export default function SideNavigation() {
  const path = usePathname();

  return (
    <aside className="w-60 border-r border-gray-300 h-screen p-5 fixed left-0 bottom-0 top-0 bg-white">
      <div>
        <Link href={"/admin"}>
          <h1 className="font-bold text-3xl uppercase space-x-3 px-4">SRP</h1>
          <h1 className="font-normal text-sm text-gray-400 px-4">ADMIN</h1>
        </Link>
      </div>
      <div className="mt-5">
        <ul>
            <li className="mb-2">
                <Link href={"/admin"} className={`${path === "/admin" ? 'bg-gray-100' : ''} hover:bg-gray-100 px-3 py-2 rounded text-gray-600 hover:text-gray-800 flex items-center gap-2`}>
                    <HomeIcon />
                    Home
                </Link>
            </li>
            <li className="mb-2">
                <Link href={"/admin/pelatihan"} className={`${path === "/admin/pelatihan" ? 'bg-gray-100' : ''} hover:bg-gray-100 px-3 py-2 rounded text-gray-600 hover:text-gray-800 flex items-center gap-2`}>
                    <RocketIcon />
                    Pembelajaran
                </Link>
            </li>
            <li className="mb-2">
                <Link href={"/admin/kegiatan"} className={`${path === "/admin/kegiatan" ? 'bg-gray-100' : ''} hover:bg-gray-100 px-3 py-2 rounded text-gray-600 hover:text-gray-800 flex items-center gap-2`}>
                    <ReaderIcon />
                    Kegiatan
                </Link>
            </li>
        </ul>
      </div>
    </aside>
  );
}
