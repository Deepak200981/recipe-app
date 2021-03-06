import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit {
    ingredients: Ingredient[] = [
        new Ingredient('Onion', 1),
        new Ingredient('Flour', 1)
    ];
    constructor() {}

    ngOnInit() {

    }

    addShopping(event: Ingredient) {
        this.ingredients.push(event);
    }
}