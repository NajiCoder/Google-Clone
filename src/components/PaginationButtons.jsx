"use client";

import React from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Link from "next/link";

export default function PaginationButtons() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  // get the search term from the url
  const searchTerm = searchParams.get("searchTerm");
  // get the start index from the url  or set it to 1 if it is not there
  const startIndex = +searchParams.get("start") || 1;

  return (
    <div className="text-blue-700 flex px-10 pb-4 justify-between sm:justify-start sm:space-x-44 sm:px-0">
      {startIndex >= 10 && (
        // go back 10 pages if the start index is greater than 10
        <Link
          href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex - 10}`}
        >
          <div className="flex flex-col cursor-pointer items-center hover:underline">
            <BsChevronLeft />
            <span>Previous</span>
          </div>
        </Link>
      )}
      {startIndex <= 90 && (
        // go back 10 pages if the start index is greater than 10
        <Link
          href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex + 10}`}
        >
          <div className="flex flex-col cursor-pointer items-center hover:underline">
            <BsChevronRight />
            <span>Next</span>
          </div>
        </Link>
      )}
    </div>
  );
}
