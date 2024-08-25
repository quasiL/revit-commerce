"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";

const links = [
  { name: "Home", href: "/" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog" },
  { name: "Courses", href: "/courses" },
  { name: "Downloads", href: "/downloads" },
];

export default function NavLinks() {
  const pathname = usePathname();
  const underline = "underline underline-offset-8";
  const flexBetween = "flex items-center justify-between";

  return (
    <>
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
    </>
  );
}
