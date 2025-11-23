import { Component, EventEmitter, output, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-steps',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-steps.component.html',
  styleUrl: './nav-steps.component.scss'
})
export class NavStepsComponent {
  back = output();
}
