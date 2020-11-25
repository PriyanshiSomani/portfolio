import { Component } from '@angular/core';
import { ToggleStatusEmit } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'priyanshiPortfolio';
  status: boolean = false;
  scrollToView(selectedPage: ToggleStatusEmit) {
    this.status = selectedPage.toggleStatus;
    if (selectedPage.selectedPage) {
      setTimeout(() => {
        document.getElementById(selectedPage.selectedPage)?.scrollIntoView({behavior: "smooth"})
      }, 1);
    }
  }
}
