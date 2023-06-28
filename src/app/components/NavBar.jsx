import Link from "next/link";

const NavBar = () => {
  return (
    <div className="w-full text-white flex gap-5 justify-center p-2 bg-slate-400">
      <Link href={"/"}>Home</Link>
      <Link href={"/users"}>Users</Link>
      <Link href={"/test"}>Test</Link>
      <Link href={"/display"}>Display</Link>
      <Link href={"/leaflet"}>Leaflet Map</Link>
      <Link href={"/dashboard"}>Dashboard</Link>
      <Link href={"/highcharts"}>Highcharts</Link>
    </div>
  );
};

export default NavBar;
