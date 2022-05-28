import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './test/login/login.component';
import { DashboardComponent } from './test/dashboard/dashboard.component';
import { DefaultLayoutComponent } from './core/components/layout/default-layout/default-layout.component';
import { FullWidthLayoutComponent } from './core/components/layout/full-width-layout/full-width-layout.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [{ path: '', component: DashboardComponent }],
  },
  {
    path: '',
    component: FullWidthLayoutComponent,
    children: [{ path: 'login', component: LoginComponent }],
  },
  {
    path: 'info',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./info/info.module').then((m) => m.InfoModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
