import React from "react";

export default function MethodPage({ params, searchParams }) {
  console.log("searchParams?", searchParams);
  return <div>MethodPage :{searchParams.year}</div>;
}
