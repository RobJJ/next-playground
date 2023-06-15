import clientPromise from "../lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("district-data");

    const collection = db.collection("districts");
    const documents = await collection.find({
      DISTRICT_ID: "UZB.1.10_1",
    });
    // const documents = await collection.find({ id: "UZB.1.10_1" }).toArray();
    return res.status(200).json(documents);

    // const movies = await db
    //   .collection("movies")
    //   .find({})
    //   .sort({ metacritic: -1 })
    //   .limit(10)
    //   .toArray();

    // res.json(movies);
  } catch (error) {
    return res
      .status(500)
      .send({ message: "An error occurred.", error: error.toString() });

    // console.error(e);
  }
}
