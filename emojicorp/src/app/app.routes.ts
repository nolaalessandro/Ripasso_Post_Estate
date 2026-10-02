import { Routes } from '@angular/router';
import { AnimalsComponent } from './animals/animals.component';
import { GenericComponent } from './generic/generic.component';
import { FruitsComponent } from './fruits/fruits.component';

export const routes: Routes = [
  { path: '', redirectTo: '/animals', pathMatch: 'full' },
  { path: 'animals', component: AnimalsComponent },
  { path: 'generic/:id', component: GenericComponent },
  { path: 'fruits', component: FruitsComponent },
];