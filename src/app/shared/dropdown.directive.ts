import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[app-dropDown]'
})
export class DropdownDirective {
    
    @HostBinding('class.open') isToggle: boolean = false; 
    @HostListener('click') dropdownToogle() {
        this.isToggle = !this.isToggle;
    }
}