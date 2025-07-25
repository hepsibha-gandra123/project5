import React from "react"
export default function Index(){
    const [ingredients, setIngredients] = React.useState(
        ["all the main spices","chicken (bone)","onion","Basmati rice"]
    );

    const ingredientsListItems=ingredients.map(ingredient=>(
        <li key={ingredient}>{ingredient}</li>
    ))

    const [recipeShown, setRecipeShown] = React.useState(false)

    function toggleButton(){
        setRecipeShown(prevRecipe=>!prevRecipe)
    }
    function addIngredient(formData){
        const newIngredient=formData.get("ingredient")
        setIngredients(prevIngredients=>[...prevIngredients,newIngredient])
    }
    return (
        <main>
            <form action={addIngredient}/*onSubmit={handleSubmit}*/ className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add-ingredient"
                    name="ingredient"
                />
                <button>
                    Add-ingredient
                </button>
            </form>
            {ingredients.length>0 && <section>
                <h2>
                    Ingredients on hand:
                </h2>
                <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
                {ingredients.length>3 && <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients</p>
                    </div>
                    <button onClick={toggleButton}>Get a recipe</button>
                </div>}
            </section>}
            {recipeShown &&<section>
                <p>With the ingredients you have we have prepared the following recipe</p>
                <p>To get/make that recipe just follow the following instructions</p>
                <h3>Step 1:<p>Marinate the Chicken
                    In a large bowl, combine chicken with all the marinade ingredients.
                    Mix well and let it marinate for at least 2 hours (overnight in the fridge for best flavor).
                </p>
                </h3>
                <h3>Step 2:
                    <p>
                        Cook the Rice (70% cooked)
                        Bring water to a boil in a large pot. Add salt and whole spices.
                        Add soaked rice and cook until it's 70% cooked (it should break with slight pressure but still have a bite).
                        Drain and set aside.
                    </p>
                </h3>
                <h3>Step 3:
                    <p>
                        Layering the Biryani
                        In a heavy-bottomed pot (or Dutch oven), add the marinated chicken at the bottom.
                        Spread the partially cooked rice evenly on top.
                        Sprinkle fried onions, mint, coriander, saffron milk (or food color), and ghee over the rice.
                        Cover the pot tightly with a lid or seal it with dough to trap steam (dum method).
                    </p>
                </h3>
                <h3>Step 4:
                    <p>
                        Dum Cooking
                        Heat a tawa (griddle) or a heavy pan and place the biryani pot on it.
                        Cook on high heat for 5-7 minutes, then reduce to low flame and cook for 25-30 minutes.
                        Turn off the heat and let it rest (without opening) for another 10 minutes.
                    </p>

                </h3>
            </section>

            }
        </main>
    )
}
