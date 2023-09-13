import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCryptoDetailsComponent } from './single-crypto-details.component';

describe('SingleCryptoDetailsComponent', () => {
  let component: SingleCryptoDetailsComponent;
  let fixture: ComponentFixture<SingleCryptoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleCryptoDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleCryptoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
