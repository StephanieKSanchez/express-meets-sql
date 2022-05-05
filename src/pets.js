import connection from './db.js'

// const insertQuery = `INSERT INTO Pets (pet_name, age, breed, species, is_hypoallergenic, is_kid_friendly)
// VALUES (?,?,?,?,?,?)`

// const input = ["Xave", 8, "Yorkie", "Dog", true, true]

// const [rows, fields] = await connection.promise().query(insertQuery, input)

// console.log("This is all my rows", rows)

export const createPet = async (pet) => {
    const name = pet.name,
    age = pet.age,
    breed = pet.breed,
    species = pet.species,
    is_kid_friendly = pet.is_kid_friendly,
    is_hypoallergenic = pet.is_hypoallergenic

    const insertQuery = `INSERT INTO Pets (pet_name, age, breed, species, is_hypoallergenic, is_kid_friendly)
    VALUES (?,?,?,?,?,?)`; 

    const input = [name, age, breed, species, is_hypoallergenic, is_kid_friendly]

    try {
        const [results] = await connection.query(insertQuery, input)
        return results;
    } catch (error) {
        console.error(error)
    }
}
export const getPets = async () => {
    const selectQuery = "SELECT * FROM pets"

    // try {
    //     const [results] = await connection.promise().query(selectQuery)
    // return results 
    // } catch (error) {
    //     console.log(error)
    // }

return connection.query(selectQuery)
.then(results => {
    return results[0];
})
.catch(err => console.error(err))
}


// const newPet = {
//     name: "Fluffy",
//     age: 2,
//     breed: "Poodle",
//     species: "Dog",
//     is_kid_friendly: false,
//     is_hypoallergenic: true,
// }

// console.log("This is the new pet", await createPet(newPet))

// console.log("All pets", await getPets())

// connection.end()