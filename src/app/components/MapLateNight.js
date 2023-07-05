// this would prob be a click comp.. so we could set the clicks as links,, but more likely we would use the router.. we would also need to get params
// if server, we have to use the link

import Link from "next/link";

export default function MapLateNight({ countryName }) {
  return (
    <div className="w-full bg-pink-100 h-full">
      <h2>
        I am the map component... and on me you can click a provine that will
        push router to have dynamic province included
      </h2>
      <div>
        <Link href={`/country/${countryName}/poopu`}>Province 1</Link>
        <Link href={`/country/${countryName}/peepee`}>Province 2</Link>
      </div>
    </div>
  );
}
