import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PeditorComponent } from './components/peditor/peditor.component';
import { PostmanComponent } from './components/postman/postman.component';
import { QrComponent } from './components/qr/qr.component';

const routes: Routes = [
  { path: 'postman', component: PostmanComponent },
  { path: 'qr', component: QrComponent },
  { path: 'peditor', component: PeditorComponent },
  { path: '', redirectTo: '/postman', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
