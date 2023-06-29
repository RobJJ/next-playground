import TableRow from "../components/TableRowCard";
import { smallDistrictArray } from "../testData/dataUzbSingleDistrict";
import { dataUzb } from "../testData/dataUzb";

export default function TablePage() {
  return (
    <div className="w-full h-full bg-blue-200 flex justify-center">
      <main className="w-1/2 h-full bg-blue-300 flex flex-col gap-1">
        {/* header */}
        <section className="w-full flex justify-between bg-orange-200 px-2 py-1 items-center">
          <span className="text-lg bg-white">
            Districts in <b>Thanh Hoa</b>
          </span>
          <span className="text-sm text-blue-600 bg-white">Comapre Data</span>
        </section>
        {/* body */}
        <section className="w-full bg-white font-bold flex text-center">
          <span className="bg-red-100 w-1/12 border-2 border-black">No</span>
          <span className="bg-red-200 border-r-2 border-y-2 border-black w-5/12">
            District
          </span>
          <span className="bg-red-300 w-3/12 border-y-2 border-black">
            Environment
          </span>
          <span className="bg-red-300 w-3/12 border-2 border-black">
            Economic
          </span>
        </section>
        <section className="w-full h-full flex flex-col overflow-auto scrollbar-none">
          {dataUzb.map((district, idx) => (
            <TableRow
              key={idx + 1}
              number={idx + 1}
              regionName={district.DISTRICT}
              econ={Math.round(district.ECON_SCORE)}
              envr={Math.round(district.ENVR_SCORE)}
            />
          ))}
        </section>
      </main>
    </div>
  );
}

// the section below should iterate over an array... this array should be fetched in the component based on the params in the url
// it will always be based off a year selected
// the section then iterates over the array of provinces or districts and displays them below
// each card should take a key, and list number, a district or province name, env score, eco score
// remember - we need to keep this a server component so it can render on server ,, quick!
