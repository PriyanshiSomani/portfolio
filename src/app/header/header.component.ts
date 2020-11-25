import { Component, EventEmitter, OnInit, Output } from '@angular/core';

export interface ToggleStatusEmit {
  toggleStatus: boolean;
  selectedPage: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})



export class HeaderComponent implements OnInit {

  @Output() navigationContent = new EventEmitter<ToggleStatusEmit>()
  isSideNavOpen: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  navToggle(): void {
    this.isSideNavOpen = !this.isSideNavOpen;
  }

  navigation(selectedPage: string): void {

    this.isSideNavOpen = false;
    const toggleData: ToggleStatusEmit = { toggleStatus: false, selectedPage: selectedPage };
    this.navigationContent.emit(toggleData);
  }

}
