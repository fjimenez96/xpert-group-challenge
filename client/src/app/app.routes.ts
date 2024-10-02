import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ImageCatComponent } from './components/image-cat/image-cat.component';
import { SearchBreedComponent } from './components/search-breed/search-breed.component';
import { AuthComponent } from './components/auth/auth.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'cats',
    component: ImageCatComponent,
  },
  {
    path: 'seacrh',
    component: SearchBreedComponent,
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
];
