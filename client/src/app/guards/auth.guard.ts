import { Injectable } from '@angular/core';
import {
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

import { StorageService } from '../services/storage.service';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  user: any = null;

  constructor(private storageService: StorageService,private userService: UserService, public router: Router) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    this.user = this.storageService.getUser();

    if (!this.user) {
      this.router.navigate(['auth']);
      return false;
    }

    return true;
  }
}
