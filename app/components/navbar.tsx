"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";
import React from "react";

export default function Menu() {
  // buat variabel path
  const path_name = usePathname();

  // buat variabel background
  let bg_color;

  if (path_name == "/") {
    bg_color = "bg-yellow-200";
  } else {
    bg_color = "bg-white";
  }

  return (
    // buat menu
    <nav className="mt-5 mx-10 flex flex-col sm:flex-row justify-start text-center">
      <Link
        href="/"
        className={`${bg_color} hover:bg-red-700 text-red-700 hover:text-white px-10 py-2.5 rounded-full cursor-pointer border-red-700 border sm:w-40 w-full`}
      >
        Home
      </Link>

      <Link
        href="/profil"
        className={`${path_name == "/profil" ? "bg-yellow-200" : "bg-white"} hover:bg-red-700 text-red-700 hover:text-white px-10 py-2.5 rounded-full cursor-pointer border-red-700 border sm:mx-2.5 sm:my-0 mx-0 my-2.5 sm:w-40 w-full`}
      >
        Profil
      </Link>

      <Link
        href="/produk"
        className={`${path_name.startsWith("/produk") ? "bg-yellow-200" : "bg-white"} hover:bg-red-700 text-red-700 hover:text-white px-10 py-2.5 rounded-full cursor-pointer border-red-700 border sm:w-40 w-full`}
      >
        Produk
      </Link>
    </nav>
  );
}
