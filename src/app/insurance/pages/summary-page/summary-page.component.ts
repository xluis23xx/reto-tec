import { Component, inject, OnInit, signal } from '@angular/core';
import { InformationService } from '../../services/information.service';
import { Plan } from '../../interfaces/plans.interface';
import { RestUser } from '../../interfaces/user.interface';
import { UserForm } from '../../interfaces/form-user.interface';

@Component({
  selector: 'app-summary-page',
  imports: [],
  templateUrl: './summary-page.component.html',
  styleUrl: './summary-page.component.scss'
})
export class SummaryPageComponent implements OnInit {
  InformationService = inject(InformationService);
  plan = signal<Plan>({} as Plan);
  user = signal<RestUser>({} as RestUser);
  formData = signal<UserForm>({} as UserForm);
  
  ngOnInit(): void {
    this.user.set(this.InformationService.queryCacheUser.get('user')!);
    this.plan.set(this.InformationService.queryCachePlanSelected.get('selectedPlan')!);
    this.formData.set(this.InformationService.queryCacheFormData.get('clientForm')!);
  }

  onBack() {
    history.back();
  }
}
