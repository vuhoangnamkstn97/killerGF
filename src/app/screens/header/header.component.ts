/* eslint-disable no-unused-vars */
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { distinctUntilChanged, tap } from 'rxjs';
import { Router } from '@angular/router';
import { faBars } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit {
  readonly breakpoint$ = this.breakpointObserver
    .observe([Breakpoints.Large, Breakpoints.Medium, Breakpoints.Small])
    .pipe(
      tap((value) => console.log(value)),
      distinctUntilChanged()
    );
  activeItemIndex = 0;
  readonly tabs = [
    {
      tabName: 'Home',
      link: '/first-component',
    },
    {
      tabName: 'Detail',
      link: '/second-component',
    },
  ];
  currentBreakpoint: string = '';
  Breakpoints = Breakpoints;
  faBars = faBars;
  constructor(
    private breakpointObserver: BreakpointObserver,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.breakpoint$.subscribe(() => this.breakpointChanged());
  }
  private breakpointChanged() {
    console.log(this.breakpointObserver);
    if (
      this.breakpointObserver.isMatched(Breakpoints.Small) ||
      this.breakpointObserver.isMatched(Breakpoints.XSmall)
    ) {
      this.currentBreakpoint = Breakpoints.Small;
    } else {
      this.currentBreakpoint = Breakpoints.Large;
    }
  }
}
