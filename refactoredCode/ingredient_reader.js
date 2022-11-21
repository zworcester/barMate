const fs = require('fs');
const path = require('path');

// IngredientReader reads a json file and stores its contents as a javascript object, accessible by the "document" field of the class. There is also
// a supplied method by which you can get an ingredient as it is represented in memory
class IngredientReaderWriter{

    // The constructor takes a path to a json file as a string. It then opens the document and loads it into memory as a javascript object.
    // It is accessible by the document field of this class.
    constructor(json_file) {
        this.file_path = json_file
        this.document = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', json_file), 'utf8').toString());
    }

    // getIngredient gets the ingredient that has the same name as the supplied string. If no such ingredient exists, undefined is returned
    // instead.
    getIngredient(name) {
        if (name in this.document.ingredients) {
            return this.document.ingredients[name];
        }

        return undefined;
    }

    // Replace an ingredient in memory with the supllied ingredient. This will replace all ingredients that share a name.
    // Returns true if the requested ingredient exists, else returns false.
    modifyIngredient(name, ingredient) {
        if (name in this.document.ingredients){
            if (name != ingredient.name) {
                delete this.document.ingredients[name];
            }

            this.document.ingredients[name] = ingredient;

            return true;
        }

        return undefined;
    }

    addIngredient(ingredient) {
        this.docuement.ingredients[ingredient.name] = ingredient;
    }

    deleteIngredient(name) {
        if (name in this.document.ingredients) {
            delete this.document.ingredients[name]

            return true;
        }

        return undefined;
    }

    writeToFile() {
        fs.writeFileSync(path.join(__dirname, 'data', this.file_path), this.document.stringify());
    }

};
