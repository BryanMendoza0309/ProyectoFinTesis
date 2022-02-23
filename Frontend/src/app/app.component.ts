import { Component } from '@angular/core';
import { InicioPage } from './inicio/inicio.page';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  public appPages = [
    {
      title: 'Inicio',
      url: 'inicio',
      icon: 'home'
    },
    {
      title: 'SOMOS RC5',
      children:[
        {
          title: 'Rafael Correa',
          url: 'rafael-correa',
          icon: 'home'
        },
        {
          title: 'Buró Nacional',
          url: 'buro-nacional',
          icon: 'home'
        },
        {
          title: 'Régimen Orgánico',
          url: 'regimen-organico',
          icon: 'home'
        },
        {
          title: 'Sedes',
          url: 'sedes',
          icon: 'home'
        },
        {
          title: 'Nuestras Causas',
          url: 'nuestras-causas',
          icon: 'home'
        },
        {
          title: 'Ideario',
          url: 'ideario',
          icon: 'home'
        }
      ]
    },
    {
      title: 'AUTORIDADES ELECTAS',
      children:[
        {
          title: 'Bancada de UNES',
          url: 'bancada-unes',
          icon: 'home'
        },
        {
          title: 'Prefecturas',
          url: 'prefecturas',
          icon: 'home'
        },
        {
          title: 'Consejales',
          url: 'concejales',
          icon: 'home'
        },
        {
          title: 'Juntas Parroquiales',
          url: 'juntas-parroquiales',
          icon: 'home'
        }
      ]
    }
  ];
  /*public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];*/
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
