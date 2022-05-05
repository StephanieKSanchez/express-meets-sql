import express from 'express';
import cors from 'cors';
import { getPets, createPet } from './src/pets.js';

const app = express()
app.use(cors())
app.use(express.json()) // tells what data type to expect. so in this case, expect json

app.get("/pets", async (req, res) => {
    try {
        const pets = await getPets()
    res.status(200).send(pets)
} catch (error) {
    res.status(500).send(error)
}
})

app.post("/pets", async (req, res) => {
    try {
        const newPet = req.body
        // const {name, age} = req.body
        // const newPet = {name, age} -- these two lines are better ways of writing the code
       const result  = await createPet(newPet)
        
       res.status(201).send(result);

} catch (error) {
    console.log(error)
    res.status(500).send(error)
}
})
const PORT = 3000

app.listen(PORT, () => {
    console.log(`Listening on port http://localhost:${PORT}`)
})