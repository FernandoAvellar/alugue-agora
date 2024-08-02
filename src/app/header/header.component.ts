import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  template: `
    <header class="h-20">
        <a routerLink="/"><img src="logo.svg" 
        alt="logo" aria-hidden="true"></a>
    </header>
  `
})
export class HeaderComponent {

}
