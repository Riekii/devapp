import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PostmanFrecuentesComponent } from './postman-frecuentes.component';

describe('PostmanFrecuentesComponent', () => {
  let component: PostmanFrecuentesComponent;
  let fixture: ComponentFixture<PostmanFrecuentesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PostmanFrecuentesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PostmanFrecuentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
