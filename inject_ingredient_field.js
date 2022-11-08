class ingredient_field_injector{
    constructor(element_id){
        this.element_id = element_id
    }

    new_field() {
        const ing_box = document.getElementById(this.element_id);
        ing_box.innerHTML += "<div class=\"d-flex flex-row\" name=\"ing_row\"><input title=\"Name\" placeholder=\"Name\" type=\"text\" name=\"name\"><input title=\"ABV (%)\" placeholder=\"ABV (%)\" type=\"number\" name=\"abv\"><input title=\"Volume (Oz)\" placeholder=\"Volume (Oz)\"  type=\"number\" name=\"volume\"></div>";

    }

    delete_field(row_num){
        const names = document.getElementsByName("ing_row");
    }

    clear_fields(){
        const ing_box = document.getElementById(this.element_id);

        ing_box.replaceChildren();

        ing_box.innerHTML += "<h2><u>Ingredients</u></h2>";
    }
}


