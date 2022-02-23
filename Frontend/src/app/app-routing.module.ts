import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'rafael-correa',
    loadChildren: () => import('./SOMOSRC5/rafael-correa/rafael-correa.module').then( m => m.RafaelCorreaPageModule)
  },
  {
    path: 'buro-nacional',
    loadChildren: () => import('./SOMOSRC5/buro-nacional/buro-nacional.module').then( m => m.BuroNacionalPageModule)
  },
  {
    path: 'regimen-organico',
    loadChildren: () => import('./SOMOSRC5/regimen-organico/regimen-organico.module').then( m => m.RegimenOrganicoPageModule)
  },
  {
    path: 'sedes',
    loadChildren: () => import('./SOMOSRC5/sedes/sedes.module').then( m => m.SedesPageModule)
  },
  {
    path: 'nuestras-causas',
    loadChildren: () => import('./SOMOSRC5/nuestras-causas/nuestras-causas.module').then( m => m.NuestrasCausasPageModule)
  },
  {
    path: 'ideario',
    loadChildren: () => import('./SOMOSRC5/ideario/ideario.module').then( m => m.IdearioPageModule)
  },
  {
    path: 'bancada-unes',
    loadChildren: () => import('./AutoridadesElectas/bancada-unes/bancada-unes.module').then( m => m.BancadaUnesPageModule)
  },
  {
    path: 'prefecturas',
    loadChildren: () => import('./AutoridadesElectas/prefecturas/prefecturas.module').then( m => m.PrefecturasPageModule)
  },
  {
    path: 'concejales',
    loadChildren: () => import('./AutoridadesElectas/concejales/concejales.module').then( m => m.ConcejalesPageModule)
  },
  {
    path: 'juntas-parroquiales',
    loadChildren: () => import('./AutoridadesElectas/juntas-parroquiales/juntas-parroquiales.module').then( m => m.JuntasParroquialesPageModule)
  },
  {
    path: 'veintiuno',
    loadChildren: () => import('./Transparencia/veintiuno/veintiuno.module').then( m => m.VeintiunoPageModule)
  },
  {
    path: 'veintidos',
    loadChildren: () => import('./Transparencia/veintidos/veintidos.module').then( m => m.VeintidosPageModule)
  },
  {
    path: 'comunicados-oficiales',
    loadChildren: () => import('./Comunicacion/comunicados-oficiales/comunicados-oficiales.module').then( m => m.ComunicadosOficialesPageModule)
  },
  {
    path: 'rc-medios',
    loadChildren: () => import('./Comunicacion/rc-medios/rc-medios.module').then( m => m.RcMediosPageModule)
  },
  {
    path: 'mashi-medios',
    loadChildren: () => import('./Comunicacion/mashi-medios/mashi-medios.module').then( m => m.MashiMediosPageModule)
  },
  {
    path: 'marcela-medios',
    loadChildren: () => import('./Comunicacion/marcela-medios/marcela-medios.module').then( m => m.MarcelaMediosPageModule)
  },
  {
    path: 'bancada-medios',
    loadChildren: () => import('./Comunicacion/bancada-medios/bancada-medios.module').then( m => m.BancadaMediosPageModule)
  },
  {
    path: 'caricatura-rc',
    loadChildren: () => import('./Comunicacion/caricatura-rc/caricatura-rc.module').then( m => m.CaricaturaRcPageModule)
  },
  {
    path: 'marca-rc5',
    loadChildren: () => import('./Comunicacion/marca-rc5/marca-rc5.module').then( m => m.MarcaRc5PageModule)
  },
  {
    path: 'contacto',
    loadChildren: () => import('./contacto/contacto.module').then( m => m.ContactoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
