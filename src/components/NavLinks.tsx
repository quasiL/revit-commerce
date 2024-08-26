"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import {
  ShoppingBagIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import useMediaQuery from "@/lib/hooks/useMediaQuery";

const links = [
  { name: "Home", href: "/" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog" },
  { name: "Courses", href: "/courses" },
  { name: "Downloads", href: "/downloads" },
];

export default function NavLinks() {
  const pathname = usePathname();
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const underline = "underline underline-offset-8";
  const flexBetween = "flex items-center justify-between";

  return (
    <>
      {isAboveMediumScreens ? (
        <div className="flex gap-8 font-semibold">
          <div className={`${flexBetween} gap-8`}>
            {links.map((link) => {
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={clsx(
                    `text-white hover:text-gray-100 hover:${underline}`,
                    {
                      underline: pathname === link.href,
                    }
                  )}
                >
                  <p>{link.name}</p>
                </Link>
              );
            })}
          </div>
          <Link
            className={`${flexBetween} gap-1 text-white hover:text-gray-100`}
            href="/cart"
          >
            <ShoppingBagIcon className="h-7 w-7" />
            <p>(0)</p>
          </Link>
        </div>
      ) : (
        <div>
          {!isMenuToggled && (
            <button
              className="rounded-full bg-[#bbb6b7] p-2"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <Bars3Icon className="h-6 w-6 text-white" />
            </button>
          )}
        </div>
      )}

      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-zinc-600 drop-shadow-xl">
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-black" />
            </button>
          </div>

          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            {links.map((link) => {
              return (
                <Link
                  key={link.name}
                  href="/cart"
                  className={clsx(
                    `text-white hover:text-gray-100 hover:${underline}`,
                    {
                      underline: pathname === link.href,
                    }
                  )}
                >
                  <p onClick={() => setIsMenuToggled(!isMenuToggled)}>
                    {link.name}
                  </p>
                </Link>
              );
            })}
            <Link
              key="Cart"
              href="/cart"
              className={clsx(
                `text-white hover:text-gray-100 hover:${underline}`,
                {
                  underline: pathname === "/cart",
                }
              )}
            >
              <p onClick={() => setIsMenuToggled(!isMenuToggled)}>Cart (0)</p>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
