import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() emitHeaderToggle = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  loadRecipe(data: string) {
    this.emitHeaderToggle.emit(data);
  }

}
