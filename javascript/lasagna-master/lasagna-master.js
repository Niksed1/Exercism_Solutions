/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(minutesRemaining){

    if (minutesRemaining === 0) return 'Lasagna is done.';
    else if (minutesRemaining) return 'Not done, please wait.';
    

    return 'You forgot to set the timer.';
}


export function preparationTime(layers, prepTime = 2)
{
    return layers.length*prepTime;
}

export function quantities(layers){
    return { 'noodles' : 50*layers.filter(x => x==="noodles").length,
        'sauce' : 0.2*layers.filter(x => x==="sauce").length}
}


export function addSecretIngredient(friend, mine){
    mine.push(friend.slice(-1)[0]);
    console.log(mine)
}

export function scaleRecipe(recipe, portions)
{
    let new_recipe = {};
    let factor = portions/2;
    for (let key in recipe)
    {
        new_recipe[key] = recipe[key]*factor;
    }

    return new_recipe;
}