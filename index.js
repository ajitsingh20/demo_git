const { json } = require("express");
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.json());
app.use(cors())

app.get("/data", (req, res) => {

    const data = [{
        id: 1,
        name: "Ajit"
    },
{
    id:2,
    name: "pratik"
}
]

    res.status(200).send(JSON.stringify(data))


})

app.listen(PORT, () => console.log("App is running on port ", PORT))