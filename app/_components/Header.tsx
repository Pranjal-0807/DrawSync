"use client";

import React from "react";
import Link from "next/link";
import { NavBarOptions } from "../_constant/Constant";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";

function Header() {
  return (
    <header className="bg-gray-800 shadow-lg sticky top-0 z-50">
      <div className="mx-auto max-w-screen-xl h-20 flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Navigation */}
        <nav className="flex items-center gap-8 text-sm font-semibold text-white">
          {NavBarOptions.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-sky-400 transition"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right: Auth Buttons */}
        <div className="flex items-center gap-3">
          <LoginLink postLoginRedirectURL="/dashboard">
            <div className="px-5 py-2 text-sm font-medium text-white hover:text-sky-300 transition">
              Login
            </div>
          </LoginLink>

          <RegisterLink>
            <div className="px-5 py-2 text-sm font-medium bg-white text-black hover:bg-gray-200 rounded-md transition">
              Register
            </div>
          </RegisterLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
