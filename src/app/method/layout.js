import YearButton from "../components/YearButton";

export default function MethodLayout({ children }) {
  return (
    <div className="w-full h-full flex flex-col gap-2">
      <form className="w-full bg-orange-200 p-2 flex justify-center gap-5">
        <span className="bg-white px-2 py-1">
          <YearButton />
        </span>
        <span className="bg-white px-2 py-1">Score_one</span>
        <span className="bg-white px-2 py-1">Score_two</span>
        <button className="bg-white px-2 py-1">Search</button>
      </form>
      <div className="w-full h-full">{children}</div>
    </div>
  );
}
