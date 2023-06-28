import Link from "next/link";

export default function HighchartsLayout({ children }) {
  return (
    <div className="w-full h-full flex flex-col gap-2 p-2">
      <section className="w-full flex gap-2 justify-center bg-blue-200 font-bold text-lg">
        <Link className="bg-red-100 p-1" href={"/highcharts/linechart"}>
          Line chart
        </Link>
        <Link className="bg-red-100 p-1" href={"/highcharts/barchart"}>
          Bar chart
        </Link>
      </section>
      <section className="w-full h-full bg-blue-200">{children}</section>
    </div>
  );
}
