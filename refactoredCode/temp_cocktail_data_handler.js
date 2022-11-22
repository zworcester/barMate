class tempCocktailDataHandler{
    constructor()
    {

    }

    resetAllFields(){
        localStorage.removeItem("temp_cocktail_name");
        localStorage.removeItem("temp_cocktail_description");
        localStorage.removeItem("temp_cocktail_image");
        localStorage.removeItem("temp_cocktail_ingredients");
        localStorage.removeItem("temp_cocktail_which");
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
        let new_ings = JSON.parse(localStorage.getItem("temp_cocktail_ingredients"));
        if (new_ings == null){
            new_ings = {};
        }
        new_ings[name] = [abv,ratio];

        localStorage.setItem("temp_cocktail_ingredients", JSON.stringify(new_ings));
    }

    removeIngredient(name){
        let new_ings = JSON.parse(localStorage.getItem("temp_cocktail_ingredients"));
        if (new_ings == null){
            localStorage.setItem("temp_cocktail_ingredients", "{}");
            return;
        }

        delete new_ings[name];
        localStorage.setItem("temp_cocktail_ingredients", JSON.stringify(new_ings));
    }

    getIngredients(){
        return JSON.parse(localStorage.getItem("temp_cocktail_ingredients"));
    }

    setCocktail(which, cocktail){
        this.setName(cocktail.name);
        this.setDescription(cocktail.description);
        this.setImage(cocktail.image);
        this.setIngredients(cocktail.ingredients);
        this.setWhich(which);
    }

    setWhich(which){
        localStorage.setItem("temp_cocktail_which", which);
    }

    getWhich(){
        return localStorage.getItem("temp_cocktail_which");
    }


}
