import Link from "next/link";
import clientPromise from "../../lib/mongodb";
import MapLateNight from "@/app/components/MapLateNight";

async function getCountryData(countryName) {
  const client = await clientPromise;
  const db = client.db(process.env.MONGO_DB_NAME);
  const allDistricts = await db.collection(countryName).find({}).toArray();
  return allDistricts;
}

export default async function CountryPage({ params }) {
  console.log("Params:", params);
  const dataAboutThisChosenCountry = await getCountryData(params.country);
  console.log("asd", dataAboutThisChosenCountry);

  // read params here
  // /country/${process.ENV.${param}}
  return (
    <div>
      <h2>the country chosen: {params.country}</h2>
      <p>
        Fetched data,, add more to the db:{" "}
        {dataAboutThisChosenCountry[0].info.name}
      </p>
      <MapLateNight countryName={params.country} />
      <Link href={"/test"}>Go back</Link>
    </div>
  );
}
