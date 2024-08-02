import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <section>
      <form class="p-4">
        <input class="p-2 border h-12 w-64 rounded-lg mr-2" type="text" placeholder="Filter by city">
        <button class="text-white bg-violet-600 rounded px-4 py-2" type="button">Search</button>
      </form>
    </section>
    <section class="results"> 
      <h2>Main content</h2>
    </section>
  `,
  styles: ``
})
export class HomeComponent {

}
