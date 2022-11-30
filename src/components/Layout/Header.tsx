import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import type { MouseEventHandler } from "react";
import { FaSearch } from "react-icons/fa";

interface PageListItem {
  id: string;
  href: string;
  children: React.ReactNode;
}

const Header: React.FC = () => {
  const handleSearchClick: MouseEventHandler<HTMLOrSVGElement> = (e) => {
    alert("Method not implemented.");
  };

  const handleUserQuickMenuHover: MouseEventHandler<HTMLImageElement> = (e) => {
    alert("Method not implemented.");
  };

  const PAGES_LIST: PageListItem[] = [
    { id: "1", children: "Home", href: "/" },
    { id: "2", children: "Profile", href: "/404" },
    { id: "3", children: "Anime List", href: "/404" },
    { id: "4", children: "Manga List", href: "/404" },
    { id: "5", children: "Browse", href: "/404" },
    { id: "6", children: "Forum", href: "/404" },
  ];

  return (
    <>
      <Head>
        <title>AniList Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="hidden w-full items-center justify-between bg-[#152232] px-48 py-2 lg:flex xl:px-96">
        <Image
          className="cursor-pointer"
          src="/icon.svg"
          alt="AniList Logo"
          width={48}
          height={48}
        />

        <div className="flex gap-8 font-overpass text-sm font-semibold">
          {PAGES_LIST.map((page) => (
            <Link
              key={page.id}
              href={page.href}
              className="text-[#a0b1c5] hover:text-[#d3d5f3]"
            >
              {page.children}
            </Link>
          ))}
        </div>

        <div className="flex flex-row items-center gap-6">
          <FaSearch
            className="h-4 w-4 cursor-pointer text-[#a0b1c5] hover:text-[#d3d5f3]"
            onClick={handleSearchClick}
          />

          <Image
            className="cursor-pointer rounded-md"
            // src={DATA.AVATAR_URL}
            src="https://i.pravatar.cc/34"
            alt="User Avatar"
            width={34}
            height={34}
            // Until it's implemented, I'll just use onClick because it's less annoying to test.
            // onMouseEnter={handleUserQuickMenuHover}
            onClick={handleUserQuickMenuHover}
          />
        </div>
      </header>
    </>
  );
};

export default Header;
