import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { NotFoundComponent } from './notFound/not-found/not-found.component';
import {AuthGuardService} from './auth-guard.service';
import { CanDeactivateGuard } from './can-deactivate-guard.service';
import { ServerResolver } from './server-resolver.service';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'users', component: UsersComponent, children: [
      {path: ':id/:name', component: UserComponent }
    ]}, // for dynamic routing and passing id to route
    {path: 'servers',
    // canActivate: [AuthGuardService],
    canActivateChild: [AuthGuardService],
    component: ServersComponent, children: [
      {path: ':id', component: ServerComponent, resolve: {server: ServerResolver}},
      {path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard]}
    ]},
    {path: 'notfound', component: NotFoundComponent},
    {path: '**', redirectTo: '/notfound'}
  ];

  @NgModule ({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
  }) export class AppRouterModule { }
