/* eslint-disable no-unused-vars */
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { distinctUntilChanged, tap } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  readonly breakpoint$ = this.breakpointObserver
    .observe([Breakpoints.Large, Breakpoints.Medium, Breakpoints.Small])
    .pipe(distinctUntilChanged());
  activeItemIndex = 0;
  currentBreakpoint: string = '';
  Breakpoints = Breakpoints;
  constructor(
    private breakpointObserver: BreakpointObserver,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.breakpoint$.subscribe(() => this.breakpointChanged());
  }
  private breakpointChanged() {
    if (this.breakpointObserver.isMatched(Breakpoints.Large)) {
      this.currentBreakpoint = Breakpoints.Large;
    } else if (this.breakpointObserver.isMatched(Breakpoints.Medium)) {
      this.currentBreakpoint = Breakpoints.Medium;
    } else if (this.breakpointObserver.isMatched(Breakpoints.Small)) {
      this.currentBreakpoint = Breakpoints.Small;
    }
  }
  handleClickMenuIcon(isMenuOpen: boolean) {
    this.isMenuOpen = isMenuOpen;
  }
}
