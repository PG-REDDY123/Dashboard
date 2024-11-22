import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CountryOption } from '../../models/country-option.model';

//export interface DropdownOption {
//  countryName: string;
//  countryCode: string;
//  language: string;
//  flagUrl: string;
//}
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {
  //@Input() label: string = '';
  //@Input() optios: DropdownOption[] = [];
  //@Input() selectedValue: string = '';
  //@Input() disabled: boolean = false;

  //@Output() selectedValueChange = new EventEmitter<string>();

  //onSelect(event: Event) {
  //  const selectElement = event.target as HTMLSelectElement;
  //  this.selectedValueChange.emit( selectElement.value);
  //}
  @Input() options: CountryOption[] = []; 
  @Input() selectedValue: CountryOption | null = null;
  @Input() disabled: boolean = false;
  @Output() selectedValueChange = new EventEmitter<CountryOption>(); 

  isDropdownOpen = false; 

  toggleDropdown() {
    if (!this.disabled) {
      this.isDropdownOpen = !this.isDropdownOpen;
    }
  }

  onSelect(option: CountryOption) {
    this.selectedValue = option;
    this.selectedValueChange.emit(option);
    this.isDropdownOpen = false;
  }
}
