const fs = require('fs');
const path = require('path');

// CocktailReader reads a json file and stores its contents as a javascript object, accessible by the "document" field of the class. There is also
// a supplied method by which you can get an cocktail as it is represented in memory
class CocktailReaderWriter{

    // The constructor takes a path to a json file as a string. It then opens the document and loads it into memory as a javascript object.
    // It is accessible by the document field of this class.
    constructor(json_file) {
        this.file_path = json_file
        this.document = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', json_file), 'utf8').toString());
    }

    // getCocktail gets the cocktail that has the same name as the supplied string. If no such cocktail exists, undefined is returned
    // instead.
    getCocktail(id) {
        if (name in this.document.cocktails) {
            return this.document.cocktails[id];
        }

        return undefined;
    }

    size()
    {
        return this.document.cocktails.length;
    }

    // Replace an cocktail in memory with the supllied cocktail. This will replace all cocktails that share a name.
    // Returns true if the requested cocktail exists, else returns false.
    /*
    modifyCocktail(name, cocktail) {
        if (name in this.document.cocktails){
            if (name != cocktail.name) {
                delete this.document.cocktails[name];
            }

            this.document.cocktails[name] = cocktail;

            return true;
        }

        return undefined;
    }

    addCocktail(cocktail) {
        this.docuement.cocktails[cocktail.name] = cocktail;
    }

    deleteCocktail(name) {
        if (name in this.document.cocktails) {
            delete this.document.cocktails[name]

            return true;
        }

        return undefined;
    }

    writeToFile() {
        fs.writeFileSync(path.join(__dirname, 'data', this.file_path), this.document.stringify());
    }
    */

};
