import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: false}) inputName: ElementRef;
  @ViewChild('amountInput', {static: false}) inputAmount: ElementRef;
  @Output() emitShoppingList = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  addShopping() {
    const name = this.inputName.nativeElement.value;
    const amount = this.inputAmount.nativeElement.value;
    const ShoppingList = new Ingredient(name, amount);
    this.emitShoppingList.emit(ShoppingList);
  }

}
