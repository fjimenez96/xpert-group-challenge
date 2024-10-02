import { mapToCanActivate, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ImageCatComponent } from './components/image-cat/image-cat.component';
import { SearchBreedComponent } from './components/search-breed/search-breed.component';
import { AuthComponent } from './components/auth/auth.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './guards/auth.guard';

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
  {
    path: 'register',
    component: UserRegisterComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: mapToCanActivate([AuthGuard]),
  },
];
