"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import Image from "next/image";

export default function HomeSearch() {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);

  async function randomSearch() {
    setRandomSearchLoading(true);
    const res = await fetch("https://random-word-api.herokuapp.com/word");
    const data = await res.json();
    if (!res) return;
    router.push(`/search/web?searchTerm=${data[0]}`);
    setRandomSearchLoading(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!input.trim()) return; // if input is empty, do nothing
    router.push(`/search/web?searchTerm=${input}`);
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        action=""
        className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl:"
      >
        <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
        <input
          type="text"
          className="flex-grow focus:outline-none"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <BsFillMicFill className="text-lg" />
      </form>

      <div className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 justify-center sm:flex-row mt-8 ">
        <button onClick={handleSubmit} className="btn">
          Google search
        </button>
        <button
          disabled={randomSearchLoading}
          onClick={randomSearch}
          className="btn flex items-center justify-center disabled:opacity-80"
        >
          {randomSearchLoading ? (
            <Image
              width="20"
              height="30"
              src="/randomSearchLoading.svg"
              alt="spinner"
              className="h-6 text-center"
            />
          ) : (
            "I'm feeling lucky"
          )}
        </button>
      </div>
    </>
  );
}
