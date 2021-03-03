import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  sidenavOpened : boolean = true;
  sidenavMode: MatDrawerMode = 'side';
  sidenavWidth : string = "25%";

  constructor(breakpointObserver : BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait
    ]).subscribe(result => {
      console.log(result);
      if (result.matches) {
        this.activateHandsetLayout();
      }
    })

    breakpointObserver.observe([
      Breakpoints.TabletLandscape,
      Breakpoints.TabletPortrait
    ]).subscribe(result => {
      if (result.matches) {
        this.activateTabletLayout();
      }
    })
  }

  ngOnInit(): void {

  }

  activateTabletLayout(): void {
    this.sidenavMode = "side";
    this.sidenavWidth = "25%";
    this.sidenavOpened = false;
  }

  activateHandsetLayout(): void {
    this.sidenavMode = 'over';
    this.sidenavWidth = "75%";
    this.sidenavOpened = false;
  }

  toggleDrawer(): void {
    this.sidenavOpened = !this.sidenavOpened;
  }

}
