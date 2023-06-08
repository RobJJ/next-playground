import Link from "next/link";

const AboutLayout = ({ children }) => {
  return (
    <div className="w-full h-full bg-white rounded-md p-5 flex flex-col gap-2">
      <div className="bg-slate-400 flex justify-center gap-5 font-bold p-1">
        <Link href={"about/one"}>About One</Link>
        <Link href={"about/two"}>About Two</Link>
      </div>
      <div className="h-full w-full bg-slate-300">{children}</div>
    </div>
  );
};

export default AboutLayout;
