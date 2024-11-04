const setUpBoxes = ()=> { 
    let wrapperRef = $('.wrapper');
    cocktails.forEach((cocktail)=>{ 
        console.log(cocktail.image.toLowerCase());
        let boxMarkup = ` <div class="box">
        <img class="image" src="./images/${cocktail.image.toLowerCase()}"/>
        <p class="cocktailRecipe"></p>
        </div>`;
        wrapperRef.append(boxMarkup); 
    });
};

const showInformation = () => { 
    setUpBoxes(); 
    jQuery.each($(".box"), nameIngredients);
    $(".box").on("click", function() {
        let indexOfCocktail = $(".box").index(this); 
        $(this).find("p.cocktailRecipe").text("Calories: " + cocktails[indexOfCocktail].calories);
        
    });
    $(".box").on("mouseover", function(){ 
        let indexOfCocktail = $(".box").index(this);

        $(this)
        .find("p.cocktailRecipe")
        .text(
            "Recipe: " + cocktails[indexOfCocktail].recipe 
        );
    });
    $(".box").on("mouseout", function (){ 
        let indexOfCocktail = $(".box").index(this);

        $(this).find("p.cocktailRecipe").text(animals[indexOfCocktail].name + " Ingredients: " + cocktails[index].ingredients);
    });
};


const nameIngredients = (index) => { 
    console.log(cocktails[index].ingredients);
    $(".cocktailRecipe").eq(index).text(cocktails[index].name + " Ingredients: " + cocktails[index].ingredients);
};

$(document).ready(showInformation);