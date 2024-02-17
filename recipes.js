const { materials } = require("./materials.js")

const recipes = [
    {
        id: 1,
        name: "Mushroom Rice Balls",
        ingredients: [materials[0], materials[1]]
    },
    {
        id: 2,
        name: "Cheesy Omlette",
        ingredients: [materials[2], materials[3]]
    },
    {
        id: 3,
        name: "Cheesy Hylian Pizza",
        ingredients: [materials[4], materials[2]]
    },
    {
        id: 4,
        name: "Prime Meat and Rice Bowl",
        ingredients: [materials[5], materials[0]]
    },
    {
        id: 5,
        name: "Egg Pudding",
        ingredients: [materials[2], materials[4], materials[3]]
      },
      {
        id: 6, 
        name: "Egg Tart",
        ingredients: [materials[4], materials[3], materials[1], materials[3]]
      },
      {
        id: 7, 
        name: "Chicken Egg Fried Rice",
        ingredients: [materials[0], materials[5], materials[3]]
      },
      {
       id: 8,
       name: "Poultry Pilaf",
       ingredients: [materials[0], materials[1], materials[3], materials[7]] 
      }
];

module.exports = { recipes }