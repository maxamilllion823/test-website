document.addEventListener('DOMContentLoaded', function() {
    const recipeForm = document.getElementById('recipe-form');
    const recipesContainer = document.getElementById('recipes-container');

    recipeForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const recipeName = document.getElementById('recipe-name').value;
        const recipeIngredients = document.getElementById('recipe-ingredients').value;

        if (recipeName.trim() === '' || recipeIngredients.trim() === '') {
            alert('Please fill in all fields');
            return;
        }

        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe');
        recipeCard.innerHTML = `
            <h3>${recipeName}</h3>
            <p><strong>Ingredients:</strong><br>${recipeIngredients}</p>
        `;
        recipesContainer.appendChild(recipeCard);

        recipeForm.reset();
    });
});
