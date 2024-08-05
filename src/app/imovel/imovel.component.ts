import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Imovel } from '../imovel';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-imovel',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="bg-purple-200 rounded-2xl"> 
      <img class="w-full object-cover border size-80 mb-1 rounded-2xl " [src]="imovel.foto" alt="Foto exterior do imóvel {{ imovel.nome }}">
      <div class="p-2 ml-1">
        <h2 class="text-xl font-bold text-start text-purple-800 mb-2">{{ imovel.nome }}</h2>
        <p class="text-base font-semibold text-start mb-2">{{ imovel.cidade }}, {{ imovel.estado }}</p>
        <a class="text-lg font-semibold text-start text-purple-700 mb-2" [routerLink]="['/details', imovel.id]">Mais detalhes</a>
      </div>
    </section>
  `
})
export class ImovelComponent {
  @Input() imovel!: Imovel;
}
