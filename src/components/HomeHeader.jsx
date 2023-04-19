import Link from "next/link";
import React from "react";
import { TbGridDots } from "react-icons/tb";

export default function HomeHeader() {
  return (
    <header>
      <div className="flex justify-end p-5 text-sm space-x-4 items-center">
        <Link className="hover:underline" href="https://mail.google.com">
          Gmail
        </Link>
        <Link className="hover:underline " href="https://image.google.com">
          Images
        </Link>
        <TbGridDots className="bg-transparent hover:bg-gray-300 rounded-full text-4xl p-2" />

        <button className="bg-blue-500 text-yellow-50 px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-shadow">
          Sign In
        </button>
      </div>
    </header>
  );
}
