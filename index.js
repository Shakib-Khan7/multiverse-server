const express = require('express');
const cors = require('cors');



require('dotenv').config()

const app = express();
const port = process.env.PORT || 5000;

//middleware

app.use(cors());
app.use(express.json());


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