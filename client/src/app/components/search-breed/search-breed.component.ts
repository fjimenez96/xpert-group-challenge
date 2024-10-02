import { Component } from '@angular/core';
import { BreedEntity } from '../../entities/breed.entity';
import { BreedService } from '../../services/breed.service';

@Component({
  selector: 'app-search-breed',
  standalone: true,
  imports: [],
  templateUrl: './search-breed.component.html',
  styleUrl: './search-breed.component.css',
})
export class SearchBreedComponent {
  breeds: BreedEntity[] = [];
  name: string = '';

  constructor(private breedService: BreedService) {}

  ngOnInit(): void {
    this.searchBreed();
  }

  onSearchBreed(event: Event) {
    this.name = (event.target as HTMLSelectElement).value;
    this.searchBreed();
  }

  searchBreed() {
    this.breedService.searchBreed(this.name).subscribe((data: any) => {
      this.breeds = data;
    });
  }
}
