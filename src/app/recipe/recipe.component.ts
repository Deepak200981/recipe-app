import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers: [RecipesService]
})
export class RecipeComponent implements OnInit {
  choosenRecipe: Recipe;
  constructor(private recService: RecipesService) { }

  ngOnInit() {
    this.recService.recipeToEmit
    .subscribe(
      (recipe: Recipe)=> {
        this.choosenRecipe = recipe;
      }
    );
  }

}
