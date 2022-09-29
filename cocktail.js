class Cocktail {
    constructor(name, description, ingredients, ratios, image) {
        this.name = name;
        this.description = description;
        this.ingredients = ingredients;
        this.ratios = ratios;
        this.image = image;

        let content_volume = 0;
        let total_volume = 0;

        for (ing in this.ingredients) {
            content_volume += this.ingredients[ing][0] * this.ingredients[ing][1];
            total_volume += this.ingredients[ing][1];
        }

        this.abv = content_volume/total_volume;
    }

    static from(other) {
        return new Cocktail(other.name, other.description, other.ingredients, other.ratios, other.image);
    }
}
