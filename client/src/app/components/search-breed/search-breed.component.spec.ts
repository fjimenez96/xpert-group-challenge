import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBreedComponent } from './search-breed.component';

describe('SearchBreedComponent', () => {
  let component: SearchBreedComponent;
  let fixture: ComponentFixture<SearchBreedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchBreedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchBreedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
