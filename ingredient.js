const INGREDIENT_TYPE = {
    spirit  :   "spirit",
    liqueur :   "liqueur",
    bitters :   "bitters",
    garnish :   "garnish",
    other   :   "other"
}

class Ingredient{
    constructor(name, description, ingredient_type, characteristics, image, abv) {
        this.name = name;
        this.description = description;
        this.ingredient_type = ingredient_type;
        this.characteristics = characteristics;
        this.image = image;
        this.abv = abv;
    }

    static from(other) {
        return new Ingredient(other.name, other.description, other.ingredient_type, other.characteristics, other.image, other.abv);
    }
}
