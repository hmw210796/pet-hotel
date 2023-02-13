import { MongoClient } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const data = req.body;
    const { name, image, animalClass, animalBreed } = data;

    const client = await MongoClient.connect(`${process.env.MONGODB_URI}`);
    const db = client.db();

    const meetupsCollection = db.collection("Pet Boarding");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted" });
  }
};

export default handler;
