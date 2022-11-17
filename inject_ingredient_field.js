class ingredient_field_injector{
    constructor(element_id){
        this.element_id = element_id
    }

    new_field() {
        const ing_box = document.getElementById(this.element_id);

        const form_name = "form-" + Math.random() * (Number.MAX_SAFE_INTEGER).toString();

        ing_box.innerHTML += "<div class=\"d-flex flex-row\" name=\"ing_row\"><form onsubmit=\"return false;\" id=\"" + form_name + "\"><div class=\"input-group\"><input style=\"width:100\" class=\"p-2\" title=\"Name\" placeholder=\"Name\" type=\"text\" name=\"name\"><input class=\"p-2\" title=\"ABV (%)\" placeholder=\"ABV (%)\" type=\"number\" name=\"abv\"><input class=\"p-2\" title=\"Volume (Oz)\" placeholder=\"Volume (Oz)\"  type=\"number\" name=\"volume\"></form></div></div>";

        const form_ = document.getElementById(form_name);
        function handleForm(event) { print("based"); }
        form_.addEventListener('submit', handleForm);

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


