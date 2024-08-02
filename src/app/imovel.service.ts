import { Injectable } from '@angular/core';
import { Imovel } from './imovel';

@Injectable({
  providedIn: 'root'
})
export class ImovelService {
  protected listaImoveis: Imovel[] = [
    {
      id: 0,
      nome: 'Acme Fresh Start Housing',
      cidade: 'São Paulo',
      estado: 'SP',
      foto: 'bernard-hermant-CLKGGwIBTaY-unsplash.jpg',
      unidadesDisponiveis: 4,
      wifi: true,
      churrasqueira: true
    },
    {
      id: 1,
      nome: 'A113 Transitional Housing',
      cidade: 'Belo Horizonte',
      estado: 'MG',
      foto: 'brandon-griggs-wR11KBaB86U-unsplash.jpg',
      unidadesDisponiveis: 0,
      wifi: false,
      churrasqueira: true
    },
    {
      id: 2,
      nome: 'Warm Beds Housing Support',
      cidade: 'Recife',
      estado: 'PE',
      foto: 'i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg',
      unidadesDisponiveis: 1,
      wifi: false,
      churrasqueira: false
    },
    {
      id: 3,
      nome: 'Homesteady Housing',
      cidade: 'São Paulo',
      estado: 'SP',
      foto: 'ian-macdonald-W8z6aiwfi1E-unsplash.jpg',
      unidadesDisponiveis: 1,
      wifi: true,
      churrasqueira: false
    },
    {
      id: 4,
      nome: 'Happy Homes Group',
      cidade: 'Florianópolis',
      estado: 'SC',
      foto: 'krzysztof-hepner-978RAXoXnH4-unsplash.jpg',
      unidadesDisponiveis: 1,
      wifi: true,
      churrasqueira: false
    },
    {
      id: 5,
      nome: 'Hopeful Apartment Group',
      cidade: 'Brasilia',
      estado: 'DF',
      foto: 'r-architecture-JvQ0Q5IkeMM-unsplash.jpg',
      unidadesDisponiveis: 2,
      wifi: true,
      churrasqueira: true
    },
    {
      id: 6,
      nome: 'Seriously Safe Towns',
      cidade: 'Brasilia',
      estado: 'DF',
      foto: 'phil-hearing-IYfp2Ixe9nM-unsplash.jpg',
      unidadesDisponiveis: 5,
      wifi: true,
      churrasqueira: true
    },
    {
      id: 7,
      nome: 'Hopeful Housing Solutions',
      cidade: 'Brasilia',
      estado: 'DF',
      foto: 'r-architecture-GGupkreKwxA-unsplash.jpg',
      unidadesDisponiveis: 2,
      wifi: true,
      churrasqueira: true
    },
    {
      id: 8,
      nome: 'Seriously Safe Towns',
      cidade: 'Brasilia',
      estado: 'DF',
      foto: 'saru-robert-9rP3mxf8qWI-unsplash.jpg',
      unidadesDisponiveis: 10,
      wifi: false,
      churrasqueira: false
    },
    {
      id: 9,
      nome: 'DFpital Safe Towns',
      cidade: 'Lavras',
      estado: 'MG',
      foto: 'webaliser-_TPTXZd9mOo-unsplash.jpg',
      unidadesDisponiveis: 6,
      wifi: true,
      churrasqueira: true
    }
  ];

  constructor() { }

  pegarTodosImoveis(): Imovel[] {
    return this.listaImoveis;
  }

  pegarImovelPorId(id: Number): Imovel | undefined {
    return this.listaImoveis.find(imovel => imovel.id === id);
  }
}
