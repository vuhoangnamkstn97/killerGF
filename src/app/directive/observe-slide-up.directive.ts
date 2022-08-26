import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appObserveSlideUp]',
})
export class ObserveSlideUpDirective
  implements OnDestroy, OnInit, AfterViewInit
{
  @Input('appObserveSlideUp') isDirectiveEnable = true;
  @Output() visible = new EventEmitter<HTMLElement>();
  private observer: IntersectionObserver | undefined;
  isIntersected = false;
  constructor(
    private element: ElementRef,
    @Inject(DOCUMENT) private readonly document: Document,
    private renderer: Renderer2
  ) {}
  ngOnInit() {
    this.createObserver();
  }

  ngAfterViewInit() {
    this.startObservingElements();
  }

  ngOnDestroy() {
    if (!this.observer) {
      return;
    }
    this.observer.unobserve(this.element.nativeElement);
    console.log('destroy observer intersection');
  }
  private createObserver() {
    const options = {
      rootMargin: '0px',
      root: this.document,
      threshold: 0,
    };

    const isIntersecting = (entry: IntersectionObserverEntry) =>
      entry.isIntersecting || entry.intersectionRatio > 0;

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (
          isIntersecting(entry) &&
          !this.isIntersected &&
          this.isDirectiveEnable
        ) {
          this.isIntersected = true;
          console.log('intersect element', this.element);
          this.renderer.addClass(this.element.nativeElement, 'animate-slideUp');
        }
      });
    }, options);
  }
  private startObservingElements() {
    if (!this.observer) {
      return;
    }
    this.observer.observe(this.element.nativeElement);
  }
}
