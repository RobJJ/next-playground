import React from "react";

export default function InfoPage({ params, searchParams }) {
  return (
    <div className="w-full h-full flex flex-col gap-2">
      <span>Params: {params}</span>
      <span>SearchParams: {searchParams}</span>
    </div>
  );
}
