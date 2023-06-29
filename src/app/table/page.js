export default function TablePage() {
  return (
    <div className="w-full h-full bg-blue-200 flex justify-center">
      <main className="w-1/2 h-full bg-blue-300 flex flex-col gap-1">
        {/* header */}
        <div className="w-full flex justify-between bg-orange-200 px-2 py-1 items-center">
          <span className="text-lg bg-white">
            Districts in <b>Thanh Hoa</b>
          </span>
          <span className="text-sm text-blue-600 bg-white">Comapre Data</span>
        </div>
        {/* body */}
        <div className="w-full h-full bg-orange-200 p-1">
          <section className="w-full bg-white font-bold flex text-center border-t-2 border-l-2 border-r-2 border-black">
            <span className="bg-red-100 w-1/12 border-r-2 border-black">
              No
            </span>
            <span className="bg-red-200 w-5/12">District</span>
            <span className="bg-red-300 w-3/12 border-l-2 border-black">
              Environment
            </span>
            <span className="bg-red-300 w-3/12 border-l-2 border-black">
              Economic
            </span>
          </section>
          <section>bottom</section>
        </div>
      </main>
    </div>
  );
}
