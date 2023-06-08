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
export function cookingStatus(remainingMinutesOnTimer){
    switch(remainingMinutesOnTimer){
        case 0:
            return "Lasagna is done.";
        case undefined:
            return "You forgot to set the timer.";
        default:
            return "Not done, please wait.";
    }
}

export function preparationTime(layers, avgPrepMinutesPerLayer){
    let prepTime;
    if (avgPrepMinutesPerLayer==undefined){
        prepTime=layers.length*2;
    } else {
        prepTime=layers.length*avgPrepMinutesPerLayer;
    }
    return prepTime;
}

export function quantities(layers){
    let counterNoodles=0;
    let counterSauce=0;
    for (let i=0; i<layers.length; i++){
        if (layers[i]=="noodles"){
            counterNoodles+=1;
        } else if (layers[i]=="sauce"){
            counterSauce+=1;
        }
    }
    return {
        noodles: counterNoodles*50,
        sauce: counterSauce*0.2,
    };
}

export function addSecretIngredient(friendIngredients, myIngredients){
    myIngredients.push(friendIngredients[friendIngredients.length-1]);
}

export function scaleRecipe(recipe, portions){
    let newRecipe={};
    Object.assign(newRecipe, recipe);
    for (let property in newRecipe){
        newRecipe[property]=newRecipe[property]*(portions/2);
    }
    console.log(recipe);
    console.log(newRecipe);
    return newRecipe;
}