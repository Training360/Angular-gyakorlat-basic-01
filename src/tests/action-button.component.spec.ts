import { EventEmitter } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconComponent } from 'src/app/common/icon/icon.component';

import { ActionButtonComponent } from '../app/common/action-button/action-button.component';

describe('ActionButtonComponent', () => {
  let component: ActionButtonComponent;
  let fixture: ComponentFixture<ActionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ActionButtonComponent,
        IconComponent,
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('icon should be defined', () => {
    expect(typeof component.icon).not.toEqual('undefined');
    expect(component.icon).toEqual('fa-pen');
  });

  it('btnClass should be defined', () => {
    expect(typeof component.btnClass).not.toEqual('undefined');
    expect(component.btnClass).toEqual('btn-info');
  });

  it('text should be defined', () => {
    expect(typeof component.text).not.toEqual('undefined');
    expect(component.text).toEqual('');
  });

  it('clicked should be defined', () => {
    expect(typeof component.clicked).not.toEqual('undefined');
    expect(component.clicked instanceof EventEmitter).toBeTruthy();
  });

  it('onUserClicked should be defined', () => {
    expect(typeof component.onUserClicked).not.toEqual('undefined');
  });

  it('button should exist', () => {
    component.icon = 'fa-trash';
    component.btnClass = 'btn-danger';
    fixture.detectChanges();

    const icon = (fixture.debugElement.nativeElement as HTMLElement)
      .querySelector(
        'button.btn-danger i.fa-trash'
      );

    expect(icon).toBeTruthy();
  });

  it('onUserClicked should be called', async () => {
    spyOn(component, 'onUserClicked');
    fixture.detectChanges();

    const button = fixture.debugElement.nativeElement.querySelector(
      'button'
    );
    button.click();
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(component.onUserClicked).toHaveBeenCalled();
    });
  });

  it('onUserClicked should be called', async () => {
    spyOn(component.clicked, 'emit');
    fixture.detectChanges();

    const button = fixture.debugElement.nativeElement.querySelector(
      'button'
    );
    button.click();
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(component.clicked.emit).toHaveBeenCalled();
    });
  });

});
