async function cocktail(){
    let randomCocktail = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php').then((response)=>response.json());
    let nameOfcocktail = randomCocktail.drinks[0].strDrink; 
    let nameOnScreen = document.getElementById('coctailName');
    nameOnScreen.innerText = nameOfcocktail;
    
    let ingredient1 = randomCocktail.drinks[0].strIngredient1;
    let ingredient2 = randomCocktail.drinks[0].strIngredient2;
    let ingredient3 = randomCocktail.drinks[0].strIngredient3;
    let ingredient4 = randomCocktail.drinks[0].strIngredient4;
    let ingredient5 = randomCocktail.drinks[0].strIngredient5;
    let ingredient6 = randomCocktail.drinks[0].strIngredient6;
    let ingredient7 = randomCocktail.drinks[0].strIngredient7;
    
    let allIngredients =[ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, ingredient7];
    
    let coctailIngredientsOnScreen = document.getElementById('coctailIngredients');
    allIngredients.forEach((ingredient)=>{
        if (ingredient != null) {
            console.log(ingredient);
           coctailIngredientsOnScreen.innerText =  coctailIngredientsOnScreen.innerText + `${ingredient} 
           ` 
        }
        
    })
    let ingredientsInformationOnScreen = document.getElementById('ingredientsInformation');
    allIngredients.forEach(async(ingredient)=>{
        let ingredientsForCocktail = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?i='+ingredient)
        .then((data)=>data.json()).then((ingredientInformation=>ingredientInformation.ingredients));
        console.log(ingredientsForCocktail);
        if (ingredient != null) {
            ingredientsInformationOnScreen.innerText = ingredientsInformationOnScreen.innerText + `Ingredint: ${ingredientsForCocktail[0].strIngredient}
            Alcoholic: ${ingredientsForCocktail[0].strAlcohol}
            Type: ${ingredientsForCocktail[0].strType}
            Description: ${ingredientsForCocktail[0].srtDescription}
            
            `
        }
    })
    
}
cocktail()