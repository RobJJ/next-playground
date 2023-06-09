export default function Home() {
  return (
    <main className="w-full h-full flex flex-col gap-2">
      <head>
        <title>Home Page</title>
      </head>
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
        </ul>
      </section>
    </main>
  );
}
