"use client";

import Link from "next/link";
import NavLinks from "./NavLinks";

export default function NavBar() {
  const flexBetween = "flex items-center justify-between";

  return (
    <nav className={`${flexBetween} px-4 py-6 w-2/3 mx-auto`}>
      <Link className="font-semibold text-3xl text-white" href="/">
        <p>Revit Web App</p>
      </Link>
      <NavLinks />
    </nav>
  );
}
