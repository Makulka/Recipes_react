import * as actionTypes from '../actions/actionTypes';

const initialState = {
    recipes: [
        {
            'id': 1, 
            'title': 'Easy white bread', 
            'summary': 'the best bread recipe ever', 
            'ingredients': [
                '500g strong white flour, plus extra for dusting', 
                '2 tsp salt',
                '7g sachet fast-action yeast',
                '3 tbsp olive oil',
                '300ml water'
            ], 
            'preparation': [
                'Mix 500g strong white flour, 2 tsp salt and a 7g sachet of fast-action yeast in a large bowl',
                'Make a well in the centre, then add 3 tbsp olive oil and 300ml water, and mix well. If the dough seems a little stiff, add another 1-2 tbsp water and mix well.',
                'Once the dough is satin-smooth, place it in a lightly oiled bowl and cover with cling film. Leave to rise for 1 hour until doubled in size or place in the fridge overnight.',
                'Heat oven to 220C/fan 200C/gas 7',
                'Bake for 25-30 mins until golden brown and the loaf sounds hollow when tapped underneath. Cool on a wire rack.'
            ]
        },
        {
            'id': 2, 
            'title': 'Creamy rolls', 
            'summary': 'the best bread recipe ever', 
            'ingredients': [
                '500g strong white flour, plus extra for dusting', 
                '2 tsp salt',
                '7g sachet fast-action yeast',
                '3 tbsp olive oil',
                '300ml water'
            ], 
            'preparation': [
                'Mix 500g strong white flour, 2 tsp salt and a 7g sachet of fast-action yeast in a large bowl',
                'Make a well in the centre, then add 3 tbsp olive oil and 300ml water, and mix well. If the dough seems a little stiff, add another 1-2 tbsp water and mix well.',
                'Once the dough is satin-smooth, place it in a lightly oiled bowl and cover with cling film. Leave to rise for 1 hour until doubled in size or place in the fridge overnight.',
                'Heat oven to 220C/fan 200C/gas 7',
                'Bake for 25-30 mins until golden brown and the loaf sounds hollow when tapped underneath. Cool on a wire rack.'
            ]
        }
    ],
    selectedRecipe: null,
    idCounter: 3 
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case(actionTypes.SELECT_RECIPE):
            return {
                ...state,
                selectedRecipe: action.item
            }
        case(actionTypes.ADD_RECIPE):
            const recipe = {...action.recipe};
            recipe.id = state.idCounter;
            const recipesArray = [...state.recipes];
            recipesArray.push(recipe);    
            return {
                    ...state,
                    idCounter: state.idCounter + 1,
                    recipes: recipesArray
                }
        default:
            return state
    }
}

export default reducer;