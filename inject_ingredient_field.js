class ingredient_field_injector{
    constructor(element_id, thisName){
        this.element_id = element_id;
        this.thisName = thisName;
    }

    new_field() {
        const ing_box = document.getElementById(this.element_id);

        const form_name = "form-" + Math.random() * (Number.MAX_SAFE_INTEGER).toString();

        ing_box.innerHTML += "<div class=\"d-flex flex-row\" name=\"ing_row\"><form onsubmit=\"return false;\" id=\"" + form_name + "\"><div class=\"input-group\"><input class=\"p-2\" title=\"Name\" placeholder=\"Name\" type=\"text\" name=\"name\"><input class=\"p-2\" title=\"ABV (%)\" placeholder=\"ABV (%)\" type=\"number\" name=\"abv\"><input class=\"p-2\" title=\"Volume (Oz)\" placeholder=\"Volume (Oz)\"  type=\"number\" name=\"volume\"></form></div></div>";

        const form_ = document.getElementById(form_name);
        function handleForm(event) { print("based"); }
        form_.addEventListener('submit', handleForm);

    }

    open_button(){
        const button_area = document.getElementById(this.element_id);

        const form_name = "SUS";

        button_area.innerHTML = "<div class=\"box\"><h2>New Ingredient</h2><div class=\"d-flex flex-row\" name=\"ing_row\"><input id=\"new-ing-name-input\" class=\"p-2\" title=\"Name\" placeholder=\"Name\" type=\"text\" name=\"name\"><input id=\"new-ing-abv-input\" class=\"p-2\" title=\"ABV (%)\" placeholder=\"ABV (%)\" type=\"number\" name=\"abv\"><input id=\"new-ing-vol-input\" class=\"p-2\" title=\"Volume (Oz)\" placeholder=\"Volume (Oz)\"  type=\"number\" name=\"volume\"</div><div class=\"mainMenu-Button\" align=\"right\"><button onclick=\"" + this.thisName + ".replace_button()\">Cancel</button><button onclick=\"" + this.thisName + ".submit()\">Submit</button></div></div>"
    }

    replace_button(){
        const button_area = document.getElementById(this.element_id);

        button_area.innerHTML = "<div class=\"mainMenu-Button\"><button onclick=\"" + this.thisName + ".open_button();\" id=\"plus-button\">+</button></div>";
    }

    submit(){
        const name_in = document.getElementById("new-ing-name-input").value;
        const abv_in = document.getElementById("new-ing-abv-input").value;
        const vol_in = document.getElementById("new-ing-vol-input").value;

        if (name_in == '' || abv_in == '' || vol_in == ''){
            window.alert("One or more field not defined. Please define all fields!");
        }
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


