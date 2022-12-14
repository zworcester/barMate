const fs = require('fs');
const path = require('path');



// CocktailReader reads a json file and stores its contents as a javascript object, accessible by the "document" field of the class. There is also
// a supplied method by which you can get an cocktail as it is represented in memory
class CocktailReaderWriter{

    // The constructor takes a path to a json file as a string. It then opens the document and loads it into memory as a javascript object.
    // It is accessible by the document field of this class.
    constructor(json_file) {
        this.file_path = json_file;

        const datafile = path.join(localStorage.getItem('path'), 'barMate', 'data', this.file_path);
        this.document = JSON.parse(fs.readFileSync(datafile, 'utf8').toString());
    }

    // getCocktail gets the cocktail that has the same name as the supplied string. If no such cocktail exists, undefined is returned
    // instead.
    getCocktail(id) {
        if (id >= this.document.cocktails.length || id < 0){
            return undefined;
        }


        return this.document.cocktails[id];
    }

    getCocktailByName(name) {
        for(let x = 0; x < this.document.cocktails.length; ++x){
            if (this.document.cocktails[i].name == name){
                return this.document.cocktails[i];
            }
        }

        return undefined;

    }

    exists(name) {
        for(let x = 0; x < this.document.cocktails.length; ++x){
            if (this.document.cocktails[i].name == name){
                return true;
            }
        }

        return false;
    }

    size()
    {
        return this.document.cocktails.length;
    }

    modifyCocktail(index, newName, newDescription, newImage, newIngredients) {
        if (index >= this.document.cocktails.length || index < 0) {
            return false;
        }

        this.document.cocktails[index].name = newName;
        this.document.cocktails[index].description = newDescription;
        this.document.cocktails[index].image = newImage;
        this.document.cocktails[index].ingredients = newIngredients;

        return true;

    }

    addCocktail(name, description, image, ingredients){
        this.document.cocktails.push(
            {
                name : name,
                description : description,
                image : image,
                ingredients : ingredients
            }
        );
    }

    removeCocktail(index){
        this.document.cocktails.splice(index, 1);
    }

    writeToFile() {
        const datafile = path.join(localStorage.getItem('path'), 'barMate', 'data', this.file_path);
        fs.writeFileSync(datafile, JSON.stringify(this.document));
    }

};
