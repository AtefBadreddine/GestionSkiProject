import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  ElementRef, EmbeddedViewRef,
  HostListener, Injector,
  Input,
  Renderer2
} from '@angular/core';
import {TooltipComponent} from "../skieur/components/tooltip/tooltip.component";
import {SkieurService} from "../services/skieur.service";
import {Observable} from "rxjs";

@Directive({
  selector: '[tooltip]'
})
export class SkTooltipDirective {
  @Input() tooltip: number = -1;

  stats: any;
  private componentRef: ComponentRef<any> = null;

  constructor(
    private elementRef: ElementRef,
    private appRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private skieurService : SkieurService
  ) {
  }
  @HostListener('mouseenter')
  onMouseEnter(): void {
    if (this.componentRef === null) {
      const componentFactory =
        this.componentFactoryResolver.resolveComponentFactory(
          TooltipComponent);
      this.componentRef = componentFactory.create(this.injector);
      this.appRef.attachView(this.componentRef.hostView);
      const domElem =
        (this.componentRef.hostView as EmbeddedViewRef<any>)
          .rootNodes[0] as HTMLElement;
      document.body.appendChild(domElem);
      this.setTooltipComponentProperties();
    }

  }
  private setTooltipComponentProperties() {
    if (this.componentRef !== null) {
      this.skieurService.getStat(this.tooltip).subscribe(
        (response: any) => {

          this.stats = response;

          this.componentRef.instance.tooltip = `Nombre de pistes : ${this.stats.pistes}, Nombre d'inscriptions : ${this.stats.inscriptions}`;;
          const { left, right, bottom, width } = this.elementRef.nativeElement.getBoundingClientRect();

          const textCenter = (right - left) / 2 + left;

          const tooltipWidth = this.componentRef.location.nativeElement.offsetWidth;
          const tooltipCenter = tooltipWidth / 2;

          this.componentRef.instance.left = textCenter + 10;

          this.componentRef.instance.top = bottom -20;
        },
        (error) => {
          // Handle errors if any
          console.error('Error:', error);
        }
      );


    }
  }
  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.destroy();
  }

  ngOnDestroy(): void {
    this.destroy();
  }

  destroy(): void {
    if (this.componentRef !== null) {
      this.appRef.detachView(this.componentRef.hostView);
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }

}
