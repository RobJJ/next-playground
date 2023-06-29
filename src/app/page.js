// "use client";
import getDistricts from "./lib/districts";
import { getTodosApiData } from "./lib/todos";

export const metadata = {
  title: "Home Page",
};

export default async function Home() {
  // const testData = await getTodosApiData();
  // const districtData = await getDistricts();
  // console.log(districtData[0]);

  return (
    <main className="w-full h-full flex flex-col gap-2">
      <h2 className="w-full text-4xl flex justify-center underline mt-4 ">
        Testing the new framework
      </h2>
      <section className="w-full h-full flex flex-col gap-3  p-10">
        <h3 className=" text-2xl text-center">
          Some things I want to work on...
        </h3>
        <ul className="  w-full text-center p-2">
          <li>Routing and nested routes with shared layouts</li>
          <li>Fetching data and handling the display of data</li>
          <li>Handling different errors and setting up fallback pages</li>
          <li>
            Testing difference between different approaches to rendering pages -
            SSR, ISR, CSR, RSC
          </li>
          <li>API Routes</li>
          <li>my key just created is :: {process.env.customKey}</li>
          {/* <li>My fetched api :: {JSON.stringify(testData)}</li>*/}
        </ul>
      </section>
    </main>
  );
}
