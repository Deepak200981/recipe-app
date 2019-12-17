import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipesService {
    recipeToEmit = new EventEmitter<Recipe>();
    recipe: Recipe[] = [
        new Recipe('Chicken', 'Why Slow Roasted Chicken is Better Than Crispy Skin Roasted Chicken | Bon Appétit', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvwsB_bbp6JJZQdbe3xHdp2qU5HQMwWSvMf0QkeIJFtWXORDXK&s'),
        new Recipe('Pizza', 'Paneer Pizza', 'https://www.tasteofhome.com/wp-content/uploads/2017/10/Chicken-Pizza_exps30800_FM143298B03_11_8bC_RMS-2-696x696.jpg'),
        new Recipe('Shrimp', 'Easy Garlic Shrimp', 'https://shewearsmanyhats.com/wp-content/uploads/2015/10/garlic-shrimp-recipe-1b-480x270.jpg')
      ];  

      getRecipe() {
          return this.recipe.slice();
      }
}