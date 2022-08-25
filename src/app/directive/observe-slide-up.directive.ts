import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
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
  @Output() visible = new EventEmitter<HTMLElement>();
  private observer: IntersectionObserver | undefined;
  isIntersected: boolean = false;
  constructor(
    // eslint-disable-next-line no-unused-vars
    private element: ElementRef,
    // eslint-disable-next-line no-unused-vars
    @Inject(DOCUMENT) private readonly document: Document,
    // eslint-disable-next-line no-unused-vars
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
        if (isIntersecting(entry) && !this.isIntersected) {
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
