import express from 'express'
const app = express();
const port = 3000;


interface Books{
    id: number
    title: string,
    Author_name: string,
    desciption: string,
    groups: string
}


const books:Books[] =[
    {
    id: 1,
    title: "The Silent Forest",
    Author_name: "Laura Greene",
    desciption: "A mystery novel set in a quiet town surrounded by ancient woods.",
    groups: "Mystery"
},
{
    id: 2,
    title: "Journey Beyond Stars",
    Author_name: "Kenji Morita",
    desciption: "A sci-fi adventure following a crew exploring distant galaxies.",
    groups: "Science Fiction"
},
{
    id: 3,
    title: "Whispers of the Past",
    Author_name: "Maria Thompson",
    desciption: "A historical drama about uncovering long-buried family secrets.",
    groups: "Historical"
},
{
    id: 4,
    title: "Cooking with Heart",
    Author_name: "Somchai Rattanakorn",
    desciption: "A cookbook filled with wholesome recipes and stories behind each dish.",
    groups: "Cooking"
},
{
    id: 5,
    title: "Mindful Living",
    Author_name: "Elena Cruz",
    desciption: "A guide to mindfulness practices for everyday life.",
    groups: "Self-Help"
},
{
    id: 6,
    title: "Legends of the Sapphire Kingdom",
    Author_name: "Adrian Blake",
    desciption: "A fantasy epic about heroes uniting to save their kingdom from darkness.",
    groups: "Fantasy"
}

]




app.get("/all-book", (req, res) => {
    res.json(books);
})





app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
