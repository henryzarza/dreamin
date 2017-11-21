import { AuthServiceGuard } from './auth-service.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TemplatesModule } from './templates/templates.module';

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full', canActivate: [AuthServiceGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthServiceGuard] },
  { path: 'plantilla', loadChildren: './templates/templates.module#TemplatesModule', canActivate: [AuthServiceGuard]},
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  providers: [AuthServiceGuard]
})
export class AppModuleRouting {}
