import { ImovelService } from './../imovel.service';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Imovel } from '../imovel';

@Component({
  selector: 'app-detalhado',
  standalone: true,
  imports: [],
  template: `
    <article>
      <img class="" [src]="imovel?.foto" alt="Foto exterior da casa {{ imovel?.nome }}">
      <section class="">
        <h2 class="">{{ imovel?.nome }}</h2>
        <p class="">{{ imovel?.cidade }}, {{ imovel?.estado }}</p>
      </section>
      <section class="">
        <h2 class="">Sobre esse imóvel</h2>
        <ul>
          <li>Unidades disponíveis: {{imovel?.unidadesDisponiveis}}</li>
          <li>Este imóvel possui WiFi: {{imovel?.wifi}}</li>
          <li>Este imóvel possui churrasqueira: {{imovel?.churrasqueira}}</li>
        </ul>
      </section>
      <section class="">
        <h2 class="">Cadastre agora para morar aqui</h2>
        <button class="">Cadastre agora</button>
      </section>
    </article>
  `
})
export class DetalhadoComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  imovelService: ImovelService = inject(ImovelService);
  imovel: Imovel | undefined;

  constructor() {
    const imovelId = Number(this.route.snapshot.params['id']);
    this.imovel = this.imovelService.pegarImovelPorId(imovelId);
  }
}
