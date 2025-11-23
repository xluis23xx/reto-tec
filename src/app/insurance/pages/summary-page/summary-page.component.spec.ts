import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserForm } from '../../interfaces/form-user.interface';
import { Plan } from '../../interfaces/plans.interface';
import { RestUser } from '../../interfaces/user.interface';
import { InformationService } from '../../services/information.service';
import { SummaryPageComponent } from './summary-page.component';

describe('SummaryPageComponent', () => {
  let component: SummaryPageComponent;
  let fixture: ComponentFixture<SummaryPageComponent>;

  const mockUser: RestUser = {
    name: 'Rocío',
    lastName: 'Miranda Díaz',
    birthDay: '02-04-1990'
  } as RestUser;

  const mockPlan: Plan = {
    name: 'Plan en Casa',
    price: 39,
    description: [],
    age: 60
  } as Plan;

  const mockFormData: UserForm = {
  } as UserForm;

  const stubInfoService = {
    queryCacheUser: new Map([['user', mockUser]]),
    queryCachePlanSelected: new Map([['selectedPlan', mockPlan]]),
    queryCacheFormData: new Map([['clientForm', mockFormData]])
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SummaryPageComponent],
      providers: [{ provide: InformationService, useValue: stubInfoService }]
    }).compileComponents();

    fixture = TestBed.createComponent(SummaryPageComponent);
    component = fixture.componentInstance;
  });

  it('should set signals with cached values on ngOnInit (Arrange-Act-Assert)', () => {
    // Arrange: (stub contain data of cache)

    // Act
    component.ngOnInit();

    // Assert
    expect(component.user()).toEqual(mockUser);
  });

  it('should call history.back when onBack is invoked (Arrange-Act-Assert)', () => {
    // Arrange
    const spy = spyOn(history, 'back');

    // Act
    component.onBack();

    // Assert
    expect(spy).toHaveBeenCalled();
  });
});