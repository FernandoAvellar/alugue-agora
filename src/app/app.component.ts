import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1 class="h-36 text-3xl text-center mx-auto font-bold underline bg-green-600">HEADER</h1>
    <router-outlet />
    <h1 class="h-36 text-3xl text-center mx-auto font-bold underline bg-green-600">FOOTER</h1>
  `,
  styles: [],
})
export class AppComponent {
  title = 'alugue-agora';
}
