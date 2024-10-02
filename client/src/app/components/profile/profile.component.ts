import { Component } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { AuthUser } from '../../entities/auth.user.entity';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  constructor(private storageService: StorageService) {}

  profile: any;

  ngOnInit(): void {
    this.profile = this.storageService.getUser();
    console.log(this.profile)
  }
}
