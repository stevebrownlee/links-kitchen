const { materials } = require("./materials.js")
const { recipes } = require("./recipes.js")


/*
    Algorithm #1 - Works at small scale but suffers from O(N log N)
                   (log-linear time complexity)  risk at larger scale
                   because there are 2 .sort() method calls
*/
// const cook = (itemsToCook) => {
//     for (const recipe of recipes) {
//         if (recipe.ingredients.length === itemsToCook.length) {
//             const recipeIngredients = recipe.ingredients.sort().join("")
//             const items = itemsToCook.sort().join("")

//             if (recipeIngredients === items) {
//                 return recipe.name
//             }
//         }
//     }

//     return "an inedible pot of goop"
// }

/*
    Algorithm #2 - Works better at large scale but suffers from O(N*M)
                   (polynomial time complexity) risk at largest scales
                   because of the .includes() method
*/
// const cook = (itemsToCook) => {
//     // Need to look at every recipe to get the ingredients array
//     for (const recipe of recipes) {

//         // Quick check if the number of items in the pot match number of required ingredients
//         if (recipe.ingredients.length === itemsToCook.length) {

//             // Assume that all items thrown in the pot by Link match this recipe
//             let itemsAreForRecipe = true

//             // Iterate the ingredients for the current recipe
//             for (const ingredient of recipe.ingredients) {

//                 // Check if the items in the pot include recipe ingredient
//                 if (!itemsToCook.includes(ingredient)) {
//                     // If the items in the pot don't include a recipe ingredient, meal is ruined
//                     itemsAreForRecipe = false
//                 }
//             }

//             // If `itemsAreForRecipe` is still true, Link included all required items
//             if (itemsAreForRecipe) {
//                 return recipe.name
//             }
//         }

//     }

//     return "an inedible pot of goop"
// }


/*
    Algorithm #3 - By converting the array to sets, I can use the
                   .has() and .delete() methods to use inverted
                   index lookups and eliminating nested loop. Now
                   the time complexity is only O(n), which is
                   linear rather than polynomial or log-linear

*/
const cook = (itemsToCook) => {
    for (const recipe of recipes) {
        if (recipe.ingredients.length === itemsToCook.length) {
            
            const recipeIngredients = new Set(recipe.ingredients)
            const ingredientsToCook = new Set(itemsToCook)

            for (const component of ingredientsToCook) {
                if (recipeIngredients.has(component)) {
                    recipeIngredients.delete(component)
                }
            }

            if (recipeIngredients.size === 0) {
                return recipe.name
            }
        }
    }

    return "an inedible pot of goop"
}


const linksAttempts = [
    [materials[1], materials[0]],
    [materials[2], materials[4]],
    [materials[3], materials[3]],
    [materials[0], materials[1], materials[3], materials[7]],
    [materials[4], materials[3], materials[1], materials[3]],
    [materials[4], materials[3], materials[3]],
]

for (const attempt of linksAttempts) {
    let result = cook(attempt)
    console.log(`Link has made ${result}`)
}

