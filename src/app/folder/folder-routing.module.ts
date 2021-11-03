import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostmanComponent } from '../components/postman/postman.component';

import { FolderPage } from './folder.page';

const routes: Routes = [
  {
    path: '',
    component: PostmanComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
