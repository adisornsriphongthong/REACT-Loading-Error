import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors());


app.get('/', (req, res) => {
    res.json(
        [
            {
                Data: 'This is the data.'
            }
        ]
    )
})

const port = 3000;
app.listen(port, (err) => {
    if(err) throw err;
    console.log('The server is running on port ' + port);
})