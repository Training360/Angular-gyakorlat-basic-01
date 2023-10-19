import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconComponent } from '../app/common/icon/icon.component';

describe('IconComponent', () => {
  let component: IconComponent;
  let fixture: ComponentFixture<IconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('icon should be defined', () => {
    expect(typeof component.icon).not.toEqual('undefined');
  });

  it('i element should exist', () => {
    fixture.detectChanges();
    const iElement = (fixture.debugElement.nativeElement as HTMLElement)
      .querySelector(
        'i.fa'
      );
    expect(iElement).toBeTruthy();
  });

  it('the icon-class of i should be setted', () => {
    component.icon = 'fa-trash';
    fixture.detectChanges();

    const iElement = (fixture.debugElement.nativeElement as HTMLElement)
      .querySelector(
        'i.fa.fa-trash'
      );
    expect(iElement).toBeTruthy();
  });

});
