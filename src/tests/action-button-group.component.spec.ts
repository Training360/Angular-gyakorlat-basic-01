import { EventEmitter } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActionButtonComponent } from 'src/app/common/action-button/action-button.component';
import { IconComponent } from 'src/app/common/icon/icon.component';

import {
  ActionButtonGroupComponent
} from '../app/common/action-button-group/action-button-group.component';
import { callTester, getElements } from './utils';

describe('ActionButtonGroupComponent', () => {
  let component: ActionButtonGroupComponent;
  let fixture: ComponentFixture<ActionButtonGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ActionButtonGroupComponent,
        ActionButtonComponent,
        IconComponent,
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('selectClick should be defined', () => {
    expect(typeof component.selectClick).not.toEqual('undefined');
    expect(component.selectClick instanceof EventEmitter).toBeTruthy();
  });

  it('updateClick should be defined', () => {
    expect(typeof component.updateClick).not.toEqual('undefined');
    expect(component.updateClick instanceof EventEmitter).toBeTruthy();
  });

  it('deleteClick should be defined', () => {
    expect(typeof component.deleteClick).not.toEqual('undefined');
    expect(component.deleteClick instanceof EventEmitter).toBeTruthy();
  });

  it('onSelectButtonClick should be defined', () => {
    expect(typeof component.onSelectButtonClick).not.toEqual('undefined');
    expect(component.onSelectButtonClick instanceof Function).toBeTruthy();
  });

  it('onUpdateButtonClick should be defined', () => {
    expect(typeof component.onUpdateButtonClick).not.toEqual('undefined');
    expect(component.onUpdateButtonClick instanceof Function).toBeTruthy();
  });

  it('onDeleteButtonClick should be defined', () => {
    expect(typeof component.onDeleteButtonClick).not.toEqual('undefined');
    expect(component.onDeleteButtonClick instanceof Function).toBeTruthy();
  });

  it('.btn-group should exist', () => {
    const btnGroup = getElements(fixture, 'div.btn-group');
    expect(btnGroup.length > 0).toBeTruthy();
  });

  it('three app-action-button should exist', () => {
    const buttons = getElements(fixture, 'app-action-button');
    expect(buttons.length).toEqual(3);
  });

  it('onSelectButtonClick should be called', async () => {
    const buttons = fixture.debugElement.nativeElement.querySelectorAll(
      'app-action-button button'
    );
    callTester(fixture, buttons[0], 'onSelectButtonClick', expect);
  });

  it('onUpdateButtonClick should be called', async () => {
    const buttons = fixture.debugElement.nativeElement.querySelectorAll(
      'app-action-button button'
    );
    callTester(fixture, buttons[1], 'onUpdateButtonClick', expect);
  });

  it('onDeleteButtonClick should be called', async () => {
    const buttons = fixture.debugElement.nativeElement.querySelectorAll(
      'app-action-button button'
    );
    callTester(fixture, buttons[2], 'onDeleteButtonClick', expect);
  });

});
