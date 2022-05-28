import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { InfoComponent } from './info.component';
import { SharedComponent } from './shared/shared.component';
import { StylesComponent } from './styles/styles.component';

const routes: Routes = [
  {
    path: '',
    component: InfoComponent,
  },
  {
    path: 'shared',
    component: SharedComponent,
  },
  {
    path: 'styles',
    component: StylesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoRoutingModule {}
