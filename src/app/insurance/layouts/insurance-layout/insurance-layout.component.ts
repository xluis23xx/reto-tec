import { Component } from '@angular/core';
import { HeaderComponent } from "../../../shared/components/header/header.component";
import { NavStepsComponent } from "../../components/nav-steps/nav-steps.component";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-insurance-layout',
  imports: [HeaderComponent, NavStepsComponent, RouterOutlet],
  templateUrl: './insurance-layout.component.html',
  styleUrl: './insurance-layout.component.scss'
})
export class InsuranceLayoutComponent {
  onBack() {
    history.back();
  }
}
