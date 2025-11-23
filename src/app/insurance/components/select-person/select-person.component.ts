import { Component, EventEmitter, output, Output, signal } from '@angular/core';

@Component({
  selector: 'app-select-person',
  imports: [],
  templateUrl: './select-person.component.html',
  styleUrl: './select-person.component.scss'
})
export class SelectPersonComponent {
  selectOption = output<string>();
  selected = signal<'me' | 'other' | null>(null);

  choose(opt: 'me' | 'other') {
    this.selected.set(opt);
    this.selectOption.emit(opt);
  }
}
