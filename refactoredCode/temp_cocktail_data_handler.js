class tempCocktailDataHandler{
    constructor()
    {

    }

    resetAllFields(){
        localStorage.removeItem("temp_cocktail_name");
        localStorage.removeItem("temp_cocktail_description");
        localStorage.removeItem("temp_cocktail_image");
        localStorage.removeItem("temp_cocktail_ingredients");
        localStorage.removeItem("temp_cocktail_edit");
    }

    setName(name){
        localStorage.setItem("temp_cocktail_name", name);
    }

    getName(){
        return localStorage.getItem("temp_cocktail_name");
    }

    setDescription(description){
        localStorage.setItem("temp_cocktail_description", description);
    }

    getDescription(){
        return localStorage.getItem("temp_cocktail_description");
    }

    setImage(image){
        localStorage.setItem("temp_cocktail_image", image);
    }

    getImage(){
        return localStorage.getItem("temp_cocktail_image");
    }

    setIngredients(ingredients){
        localStorage.setItem("temp_cocktail_ingredients", JSON.stringify(ingredients));
    }

    addIngredient(name, abv, ratio){
        new_ings = JSON.parse(localStorage.getItem("temp_cocktail_ingredients"));
        new_ings += { name : [abv, ratio] };

        localStorage.setItem("temp_cocktail_ingredients", JSON.stringify(new_ings));
    }

    getIngredients(){
        return JSON.parse(localStorage.getItem("temp_cocktail_ingredients"));
    }

    setCocktail(cocktail_index){
        localStorage.setItem("temp_cocktail_edit", cocktail_index);
    }

    getCocktail(){
        return localStorage.getItem("temp_cocktail_edit");
    }


}
