import { ModuleWithProviders } from '@angular/core';

import { Routes , RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ChangeComponent } from './change/change.component';


const appRoutes :Routes = [
	{ path : '' , component : LoginComponent},
	{ path : 'home' , component : HomeComponent},
	{ path : 'home/:userid' , component : HomeComponent},
	{ path : 'change/:userid' , component : ChangeComponent}
];

export const appRouting :ModuleWithProviders = RouterModule.forRoot(appRoutes);