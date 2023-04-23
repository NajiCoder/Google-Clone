import React from "react";

export default async function WebSerch({ searchParams }) {
  const res = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.SEARCH_API}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`
  );

  const data = await res.json();

  const results = data.items;

  return (
    <>
      {results &&
        results.map((result, index) => <h1 key={index}>{result.title}</h1>)}
    </>
  );
}
