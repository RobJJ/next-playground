// posts.js

import clientPromise from "./mongodb";

export default async function getDistricts(req, res) {
  const client = await clientPromise;
  const db = client.db("district-data");
  const allDistricts = await db.collection("districts").find({}).toArray();
  return allDistricts;
}
