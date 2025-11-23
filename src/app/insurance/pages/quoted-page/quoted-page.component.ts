import { Component, inject, OnInit, signal } from '@angular/core';
import { SelectPersonComponent } from "../../components/select-person/select-person.component";
import { PlansOfferedComponent } from "../../components/plans-offered/plans-offered.component";
import { Router } from '@angular/router';
import { InformationService } from '../../services/information.service';
import { Plan } from '../../interfaces/plans.interface';

@Component({
  selector: 'app-quoted-page',
  imports: [SelectPersonComponent, PlansOfferedComponent],
  templateUrl: './quoted-page.component.html',
  styleUrl: './quoted-page.component.scss'
})
export class QuotedPageComponent {
  
  selectedOption = signal<string | null>(null);
  isLoadPlans = signal<boolean>(false);
  router = inject(Router);

  informationService = inject(InformationService);

  onSelectPersona(opt: string) {
    this.selectedOption.set(opt);
    this.loadPlans();

    setTimeout(() => {
      const el = document.getElementById('plans-section');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 200);
  }

  onPlanSelected(plan: Plan) {
    this.informationService.queryCachePlanSelected.set('selectedPlan', plan);
    this.router.navigate(['/quoted/summary']);
  }

  loadPlans() {
    this.informationService.listPlans().subscribe(res => this.isLoadPlans.set(true));
  }

  onBack() {
    history.back();
  }
}
