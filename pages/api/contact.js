
// Client den gönderilen form bilgilerini yakalayıp database e kaydediceğiz

import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }
    // store it in a database

    const newMessage = {
      email,
      message,
      name,
    };

    let client;

 
    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.x2uy4.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`

    // store it in a database
   try{
     client = await MongoClient.connect(
      connectionString
    );
   } catch(error){
     res
      .status(500)
      .json({ message: "Could not connect to database"});
    return  // hata varsa bundan sonraki kodları dönmemesi için sadece return kullanıyoruz
   }
   
    const db = client.db()
    try {
      const result = await db.collection("messages").insertOne(newMessage)
      newMessage.id = result.insertedId  // "insertedId" i mongo db otomatikmen veriyor bizde bunu newMessage nin "id" si olarak atıyoruz
    }
    catch(error){
     client.close()
        res
      .status(500)
      .json({ message: "storing message failled"});
    }

    client.close()

    res
      .status(201)
      .json({ message: "Successfully stored message", message: newMessage });
  }
}

export default handler;
