import Link from "next/link";

const NavBar = () => {
  return (
    <div className="text-white flex gap-5 justify-center p-2 bg-slate-400">
      <Link href={"/about"}>About</Link>
      <Link href={"/contact"}>Contact</Link>
    </div>
  );
};

export default NavBar;
