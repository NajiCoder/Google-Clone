"use client";

import React, { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

export default function SearchBox() {
  const serchParams = useSearchParams();

  const router = useRouter();

  const searchTerm = serchParams.get("searchTerm");

  const [term, setTerm] = useState(searchTerm || "");

  function handleSubmit(e) {
    e.preventDefault();
    if (!term.trim()) return; // if input is empty, do nothing
    router.push(`/search/web?searchTerm=${term}`);
  }

  return (
    <>
      <form
        action=""
        className="flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="w-full focus:outline-none"
          onChange={(e) => setTerm(e.target.value)}
          value={term}
        />
        <RxCross2
          className="text-2xl cursor-pointer text-gray-500 sm:mr-2"
          onClick={() => setTerm("")}
        />
        <BsFillMicFill className="hidden sm:inline-flex text-4xl text-blue-500 pl-4 border-l-2 border-gray-300 mr-3" />
        <AiOutlineSearch
          className="text-2xl hidden sm:inline-flex text-blue-500 mr-3 cursor-pointer"
          onClick={handleSubmit}
        />
      </form>
    </>
  );
}
