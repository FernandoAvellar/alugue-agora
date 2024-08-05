import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Imovel } from './../imovel';
import { ImovelService } from '../imovel.service';
import { ImovelComponent } from "../imovel/imovel.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ImovelComponent],
  template: `
    <section>
      <form class="p-4">
        <input class="p-2 border h-12 w-64 rounded-lg mr-2" type="text" placeholder="Filter by city">
        <button class="text-white bg-violet-600 rounded px-4 py-2" type="button">Procurar</button>
      </form>
    </section>
    <section class="grid grid-row align-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2"> 
      <app-imovel *ngFor="let imovel of listaImoveis" [imovel]="imovel"></app-imovel>
    </section>
  `
})
export class HomeComponent {
  imovelService: ImovelService = inject(ImovelService);
  listaImoveis: Imovel[] = [];

  constructor() {
    this.listaImoveis = this.imovelService.pegarTodosImoveis();
  }

}
