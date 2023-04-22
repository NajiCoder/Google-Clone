"use client";

import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { AiOutlineSearch, AiOutlineCamera } from "react-icons/ai";

export default function SearchHeaderOptions() {
  const pathname = usePathname();

  const router = useRouter();

  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");

  function slectTab(tab) {
    router.push(
      `/search/${
        tab === "Images" ? "imagesearch" : "web"
      }?searchTerm=${searchTerm}`
    ); // if tab is Images, then go to /search/images, else go to /search/web and pass the searchTerm as a query parameter to the url
  }
  return (
    <div className="flex justify-center items-center space-x-2 select-none border-b w-full lg:justify-start lg:pl-52 text-gray-700 text-sm">
      <div
        onClick={() => slectTab("All")}
        className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${
          pathname === "/search/web" && "!text-blue-600 !border-blue-600"
        }`}
      >
        <AiOutlineSearch />
        <span>All</span>
      </div>
      <div
        onClick={() => slectTab("Images")}
        className={`flex items-center  space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${
          pathname === "/search/imagesearch" &&
          "!text-blue-600 !border-blue-600"
        }`}
      >
        <AiOutlineCamera />
        <span>Images</span>
      </div>
    </div>
  );
}
