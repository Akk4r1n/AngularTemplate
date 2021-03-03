import { Component, Input, OnInit } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Input()
  sidenav! : SidenavComponent;

  constructor() { }

  ngOnInit(): void {
    
  }

  onMenuButtonClicked(): void {
    this.sidenav.toggleDrawer();
  }

}
