import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InformationService } from '../../../insurance/services/information.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [ReactiveFormsModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  private fb = inject(FormBuilder);
  router = inject(Router);
  informationService = inject(InformationService);


  clientForm: FormGroup = this.fb.group({
    typeDocument: [''],
    numberDocument: [''],
    phone: [''],
    policy1: [false],
    policy2: [false],
  });

  onSubmit() {
    this.informationService.queryCacheFormData.set('clientForm', this.clientForm.value);
    this.router.navigate(['quoted']);
    this.informationService.userInformation().subscribe();
  }
}
