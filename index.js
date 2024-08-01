const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');



require('dotenv').config()

const app = express();
const port = process.env.PORT || 5000;

//middleware

app.use(cors());
app.use(express.json());


//multiverse
//Ir0AzhVZXcVWyFwF




const uri = "mongodb+srv://multiverse:Ir0AzhVZXcVWyFwF@cluster0.pqiaide.mongodb.net/?appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
     client.connect();

    const toysCollection = client.db("multiverse").collection("toys");
    



    app.get('/toys',async(req,res)=>{
        const cursor = toysCollection.find()
        const result = await cursor.toArray()
        res.send(result)

    })












    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
  //  await client.close();
  }
}
run().catch(console.dir);




















app.get('/', (req, res) => {
    res.send('multiverse is not running')
})
app.get('/dd', (req, res) => {
    res.send('multiverse is walking')
})

app.listen(port, () => {
    console.log(`multiverse is running on ${port}`);
}
)