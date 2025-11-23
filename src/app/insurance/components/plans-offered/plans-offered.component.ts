import { AfterViewInit, Component, ElementRef, EventEmitter, inject, input, Input, OnInit, output, Output, signal, ViewChild } from '@angular/core';
import { InformationService } from '../../services/information.service';
import { Plan } from '../../interfaces/plans.interface';

@Component({
  selector: 'app-plans-offered',
  imports: [],
  templateUrl: './plans-offered.component.html',
  styleUrl: './plans-offered.component.scss'
})
export class PlansOfferedComponent implements OnInit, AfterViewInit {
  currentIndex = signal(0);
  
  visible = input<boolean>(false);
  selectedOption= input<string | null >(null);
  planSelected = output<Plan>();
  
  plans = signal<Plan[]>([]);
  
  @ViewChild('scrollContainer', { static: false }) scrollContainer?: ElementRef<HTMLDivElement>;
  
  informationService = inject(InformationService);
  
  ngOnInit(): void {
    this.plans.set(this.informationService.queryCacheListPlans.get('plans') || []);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.updateCurrentIndex();
    }, 50);
  }

  prev() {
    const el = this.scrollContainer?.nativeElement;
    if (!el) return;
    const slideWidth = this.getSlideWidth(el);
    el.scrollBy({ left: -slideWidth - 24, behavior: 'smooth' }); // 24 = gap (approx)
    setTimeout(() => this.updateCurrentIndex(), 300);
  }

  next() {
    const el = this.scrollContainer?.nativeElement;
    if (!el) return;
    const slideWidth = this.getSlideWidth(el);
    el.scrollBy({ left: slideWidth + 24, behavior: 'smooth' });
    setTimeout(() => this.updateCurrentIndex(), 300);
  }

  onScroll() {
    this.updateCurrentIndex();
  }

  onSelect(plan: Plan) {
    this.planSelected.emit(plan);
  }

  private getSlideWidth(container: HTMLDivElement) {
    const child = container.querySelector<HTMLElement>('.snap-start');
    if (!child) return container.clientWidth;
    return child.offsetWidth;
  }

  private updateCurrentIndex() {
    const el = this.scrollContainer?.nativeElement;
    if (!el) return;
    const children = Array.from(el.querySelectorAll<HTMLElement>('.snap-start'));
    if (!children.length) return;

    const scrollLeft = el.scrollLeft;
    let closestIndex = 0;
    let closestDiff = Infinity;
    children.forEach((c, i) => {
      const diff = Math.abs(c.offsetLeft - scrollLeft);
      if (diff < closestDiff) {
        closestDiff = diff;
        closestIndex = i;
      }
    });

    this.currentIndex.set(closestIndex);
  }
}
