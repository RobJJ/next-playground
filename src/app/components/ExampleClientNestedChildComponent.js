"use client";

import { useState } from "react";

// This pattern works:
// You can pass a Server Component as a child or prop of a
// Client Component.

// Pages in Next.js are Server Components by default
export default function ExampleClientComponent({ children }) {
  const [color, setColor] = useState("blue");
  return (
    <div className="w-full bg-purple-200 flex gap-5 justify-center">
      <div>The color you picked is: {color}</div>
      {children}
    </div>
  );
}
