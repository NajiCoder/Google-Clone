import ImageSearchRsults from "@/components/ImageSearchRsults";
import Link from "next/link";
import React from "react";

export default async function ImageSearch({ searchParams }) {
  const startIndex = searchParams.start || "1";
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.SEARCH_API}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&searchType=image&start=${startIndex}`
  );

  if (!res.ok) {
    throw new Error(
      "Something went wrong while fetching data from Google Search API"
    );
  }

  const data = await res.json();

  const results = data.items;

  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">
          No results found for {searchParams.searchTerm}
        </h1>
        <p className="text-lg">
          Try searching someting else or go back to the homepage {"    "}
          <Link href={"/"} className="text-blue-500 ">
            Home
          </Link>
        </p>
      </div>
    );
  }

  return <>{results && <ImageSearchRsults results={data} />}</>;
}
