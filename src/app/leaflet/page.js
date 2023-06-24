import MapComp from "../components/MapComp";

export default function LeafletMap() {
  if (typeof window === "undefined") return;
  return (
    <div className="w-full h-full bg-pink-200 p-2">
      <MapComp />
    </div>
  );
}
