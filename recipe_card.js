class CocktailCard{
	constructor(cocktail){
		this.name = cocktail.name;
		this.description = cocktail.description;
		this.image = cocktail.image;
		this.ingredients = cocktail.ingredients;
	}

	changeCocktail(cocktail){
		this.name = cocktail.name;
		this.description = cocktail.description;
		this.image = cocktail.image;
		this.ingredients= cocktail.ingredients;
	}

	getABV(){
		let content_volume = 0.0;
		let total_volume = 0.0;

		for (const ing in this.ingredients){
			content_volume += this.ingredients[ing][0] * this.ingredients[ing][1];
			total_volume += this.ingredients[ing][1];
		}

		if (content_volume == 0.0 || total_volume == 0.0){
			return 0.0;
		}

		return (content_volume / total_volume).toPrecision(4);
	}

	getCard(){
		let ingredients_string = "";

		const nuImg = path.join(__dirname, 'data', 'images', this.image);

		for (const ing in this.ingredients){
			ingredients_string += ("<tr><th>" + ing + "</th><th>ABV: " + this.ingredients[ing][0] + "</th><th>Ratio: " + this.ingredients[ing][1] + "</th></tr>");
		}

	return "<div class=\"col\"><div class=\"card\" id=\"card-" + this.name + "\"><div class=\"img-box\"><img src=\"" + nuImg + "\"></div><div class=\"content\"><div class=\"details\"><h2>" + this.name + "<br><span>" + this.getABV() + "% ABV</span></h2><div class=\"data\" style=\"text-align: center\"><span style=\"color:black\">" + this.description + "</span></div><div class =\"action-Button\"><button onmouseleave=\"revertStyle()\" onclick=\"changeStyle()\">Edit</button><script>\nfunction changeStyle(){\n\tvar element = document.getElementById(\"card-" + this.name + "\");\n\telement.style.paddingBottom = \"500px\";\n}\nfunction revertStyle(){\n\tvar element= document.getElementbyId(\"card-" + this.name + "\");\n\telement.style.padding=\"200px\";\n}</script><button>View</button></div></div></div></div></div>";
	}

};

class CocktailCards{
	constructor(element_id, cocktail_object){
		this.element_id = element_id;
		this.cocktail_object = cocktail_object;
	}

	// <div class="row" id="${this.id}">
	// 	<div class="col">
	// 	<div class=card>
	// 		<div class="img-box">

	// This create the cards for every cocktail object in the html element with the id specified by this.element_id.
	inner_html_create_cards(){
		const cardgrid = document.getElementById(this.element_id);
		cardgrid.replaceChildren();

		for (let x = 0; x < this.cocktail_object.size(); ++x){
			let cocktailCard = new CocktailCard(this.cocktail_object.getCocktail(x));

			cardgrid.innerHTML += cocktailCard.getCard();
		}
	}

	// This changes the cards on the screen to the specified new object, using the same id as before.
	refresh_cocktail_cards(new_cocktail_object){
		this.cocktail_object = new_cocktail_object;
		this.inner_html_create_cards();
	}
};
