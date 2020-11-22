import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isSideNavOpen: boolean= false;
  constructor() { }

  ngOnInit(): void {
  }

  navToggle(): void {
    this.isSideNavOpen = !this.isSideNavOpen;
  }

}
