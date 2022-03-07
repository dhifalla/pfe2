import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitAdminComponent } from './produit-admin.component';

describe('ProduitAdminComponent', () => {
  let component: ProduitAdminComponent;
  let fixture: ComponentFixture<ProduitAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
