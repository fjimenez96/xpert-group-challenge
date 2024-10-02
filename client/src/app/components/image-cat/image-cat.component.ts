import { Component } from '@angular/core';
import { BreedService } from '../../services/breed.service';
import { BreedEntity } from '../../entities/breed.entity';
import { ImageService } from '../../services/image.service';
import { ImageEntity } from '../../entities/image.entity';

@Component({
  selector: 'app-image-cat',
  standalone: true,
  imports: [],
  templateUrl: './image-cat.component.html',
  styleUrl: './image-cat.component.css',
})
export class ImageCatComponent {
  breeds: BreedEntity[] = [];
  selectedBreed: BreedEntity | null = null;
  selectedImage: ImageEntity | null = null;

  constructor(
    private breedService: BreedService,
    private imageService: ImageService
  ) {}

  ngOnInit(): void {
    this.breedService.getBreeds().subscribe((data: any) => {
      this.breeds = data;
      if (this.breeds.length > 0) {
        this.selectedBreed = this.breeds[0];
        this.getImageById(this.selectedBreed?.reference_image_id ?? "");
      }
    });
  }

  onBreedChange(event: Event): void {
    const id = (event.target as HTMLSelectElement).value;
    this.getBreedById(id);
  }

  getBreedById(id: string) {
    this.breedService.getBreedById(id).subscribe((data: any) => {
      this.selectedBreed = data;
      this.getImageById(this.selectedBreed?.reference_image_id ?? "");
    });
  }

  getImageById(id: string) {
    this.imageService.getImageById(id).subscribe((data: any) => {
      this.selectedImage = data;
      console.log(this.selectedImage?.url)
    });
  }
}
