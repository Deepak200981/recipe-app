import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  providers: [RecipesService]
})
export class RecipeListComponent implements OnInit {
  recipe: Recipe[];
  constructor(private recService: RecipesService) { }

  ngOnInit() {
    this.recipe = this.recService.getRecipe();
  }
}
