import { Component } from '@angular/core';
import { ToggleStatusEmit } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'priyanshiPortfolio';
  scrollToView(scrollData: ToggleStatusEmit) {
    if (scrollData.selectedPage) {
      const test=scrollData.selectedPage
      setTimeout(() => {
        document.getElementById(test).scrollIntoView({
          behavior: "smooth"
        })
      }, 1)
    }
  }
}
