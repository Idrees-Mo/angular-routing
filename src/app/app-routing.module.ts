import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-gaurd.service';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormsComponent } from './forms/reactive-forms/reactive-forms.component';
import { TemplateFormsComponent } from './forms/template-forms/template-forms.component';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'users',
    component: UsersComponent,
    children: [{ path: ':id/:name', component: UserComponent }],
  },
  {
    path: 'forms',
    component: FormsComponent,
    children: [
      { path: 'reactive', component: ReactiveFormsComponent },
      { path: 'template', component: TemplateFormsComponent },
    ],
  },
  {
    path: 'servers',
    component: ServersComponent,
    // canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      { path: ':id', component: ServerComponent },
      { path: ':id/edit', component: EditServerComponent },
    ],
  },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
