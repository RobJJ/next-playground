import TestButton from "../components/TestButton";
// import TestComp from "../components/TestComp";

const currentAvailableCountries = [
  { name: "uzbekistan", id: 1 },
  { name: "kosovo", id: 2 },
  { name: "vietnam", id: 3 },
];

export default async function TestSystem() {
  // get supportedCountriesList here
  return (
    <div className="flex flex-col gap-2 justify-center items-center w-full h-full bg-blue-500">
      <TestButton currentAvailableCountries={currentAvailableCountries} />
    </div>
  );
}
