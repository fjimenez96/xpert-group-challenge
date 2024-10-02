import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCatComponent } from './image-cat.component';

describe('ImageCatComponent', () => {
  let component: ImageCatComponent;
  let fixture: ComponentFixture<ImageCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageCatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
