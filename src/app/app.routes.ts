import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ImovelComponent } from './imovel/imovel.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home Page'
    },
    {
        path: 'details',
        component: ImovelComponent,
        title: 'Imovel Details Page'
    },
];
