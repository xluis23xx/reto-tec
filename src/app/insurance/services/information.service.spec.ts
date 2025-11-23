import { TestBed } from '@angular/core/testing';

import { InformationService } from './information.service';
import { RestUser } from '../interfaces/user.interface';
import { Plan, RestPlans } from '../interfaces/plans.interface';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from "@angular/common/http/testing";

const mockUserResponse: RestUser = {
    name: "Rocío",
    lastName: "Miranda Díaz",
    birthDay: "02-04-1990"
}

const mockListPlansResponse: RestPlans = {
  list: [
    {
      name: "Plan en Casa",
      price: 39,
      description: [
        "Médico general a domicilio por S/20 y medicinas cubiertas al 100%.",
        "Videoconsulta y orientación telefónica al 100% en medicina general + pediatría.",
        "Indemnización de S/300 en caso de hospitalización por más de un día."
      ],
      age: 60
    },
    {
      name: "Plan en Casa y Clínica",
      price: 99,
      description: [
        "Consultas en clínica para cualquier especialidad.",
        "Medicinas y exámenes derivados cubiertos al 80%.",
        "Atención médica en más de 200 clínicas del país."
      ],
      age: 70
    },
    {
      name: "Plan en Casa + Bienestar",
      price: 70,
      description: [
        "Videoconsulta con especialistas de psicología y nutrición.",
        "Acceso a videos y recursos sobre bienestar.",
        "Incluye todos los beneficios del Plan en Casa."
      ],
      age: 25
    },
    {
      name: "Plan en Casa + Chequeo ",
      price: 49,
      description: [
        "Un Chequeo preventivo general de manera presencial o virtual.",
        "Acceso a Vacunas en el Programa del MINSA en centros privados.",
        "Incluye todos los beneficios del Plan en Casa."
      ],
      age: 90
    },
    {
      name: "Plan en Casa + Fitness",
      price: 45,
      description: [
        "Descuentos en más de 50 locales de gimnasio.",
        "Beneficios exclusivos en alimentos nutricionales y complementos.",
        "Incluye todos los beneficios del Plan en Casa."
      ],
      age: 30
    }
  ]
}


describe('@InformationService', () => {
  let service: InformationService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(InformationService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('#should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#should be user information', () => {
    service.userInformation().subscribe((user: RestUser) => {
      expect(user).toEqual(mockUserResponse);
    });

    const req = httpMock.expectOne(
      `https://rimac-front-end-challenge.netlify.app/api/user.json`
    );

    expect(req.request.method).toBe('GET');

    req.flush(mockUserResponse);
  });

  it('#should be plans information', () => {
    service.listPlans().subscribe((plans: Plan[]) => {
      expect(plans).toEqual(mockListPlansResponse.list);
    });

    const req = httpMock.expectOne(
      `https://rimac-front-end-challenge.netlify.app/api/plans.json`
    );

    expect(req.request.method).toBe('GET');

    req.flush(mockListPlansResponse);
  });
});
