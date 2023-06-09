import Head from "next/head";

// export async function getStaticProps(context) {
//   // const res = await axios.get(...);

//   return {
//     // will be passed to the page component as props
//     props: {
//       Item: "test title",
//     },
//   };
// }

export default function Home({ Item }) {
  return (
    <>
      <Head>
        <title>{Item}</title>
      </Head>
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
              Testing difference between different approaches to rendering pages
              - SSR, ISR, CSR, RSC
            </li>
            <li>API Routes</li>
          </ul>
        </section>
      </main>
    </>
  );
}
