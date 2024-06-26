import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitationAndFormComponent } from './citation-and-form.component';

describe('CitationAndFormComponent', () => {
  let component: CitationAndFormComponent;
  let fixture: ComponentFixture<CitationAndFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CitationAndFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CitationAndFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
