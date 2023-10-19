import { EventEmitter } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ActionButtonGroupComponent } from 'src/app/common/action-button-group/action-button-group.component';
import { ActionButtonComponent } from 'src/app/common/action-button/action-button.component';
import { DataCellComponent } from 'src/app/common/data-cell/data-cell.component';
import { IconComponent } from 'src/app/common/icon/icon.component';
import { User } from 'src/app/model/user';

import { DataRowComponent } from '../app/common/data-row/data-row.component';
import { callTester, getElements } from './utils';

describe('DataRowComponent', () => {
  let component: DataRowComponent;
  let fixture: ComponentFixture<DataRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        DataRowComponent,
        DataCellComponent,
        ActionButtonGroupComponent,
        ActionButtonComponent,
        IconComponent,
      ],
      imports: [
        FormsModule,
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('dataRow should exist', () => {
    expect(typeof component.dataRow !== 'undefined').toBeTruthy();
  });

  it('type of dataRow should be User', () => {
    expect(component.dataRow instanceof User).toBeTruthy();
  });

  it('selectClick should exist', () => {
    expect(typeof component.selectClick !== 'undefined').toBeTruthy();
  });

  it('type of selectClick should be User', () => {
    expect(component.selectClick instanceof EventEmitter).toBeTruthy();
  });

  it('updateClick should exist', () => {
    expect(typeof component.updateClick !== 'undefined').toBeTruthy();
  });

  it('type of updateClick should be User', () => {
    expect(component.updateClick instanceof EventEmitter).toBeTruthy();
  });

  it('deleteClick should exist', () => {
    expect(typeof component.deleteClick !== 'undefined').toBeTruthy();
  });

  it('type of deleteClick should be User', () => {
    expect(component.deleteClick instanceof EventEmitter).toBeTruthy();
  });

  it('onSelectClicked should exist', () => {
    expect(typeof component.onSelectClicked !== 'undefined').toBeTruthy();
  });
  it('type of onSelectClicked should be Function', () => {
    expect(component.onSelectClicked instanceof Function).toBeTruthy();
  });

  it('onUpdateClicked should exist', () => {
    expect(typeof component.onUpdateClicked !== 'undefined').toBeTruthy();
  });
  it('type of onUpdateClicked should be Function', () => {
    expect(component.onUpdateClicked instanceof Function).toBeTruthy();
  });

  it('onDeleteClicked should exist', () => {
    expect(typeof component.onDeleteClicked !== 'undefined').toBeTruthy();
  });
  it('type of onDeleteClicked should be Function', () => {
    expect(component.onDeleteClicked instanceof Function).toBeTruthy();
  });

  it('five app-data-cell should exist', () => {
    const dataCells = getElements(fixture, 'app-data-cell');
    expect(dataCells.length).toEqual(5);
  });

  it('onSelectClicked should be called', () => {
    callTester(fixture, '.btn-group button', 'onSelectClicked', expect);
  });

  it('onUpdateClicked should be called', () => {
    const buttons = fixture.debugElement.nativeElement.querySelectorAll(
      '.btn-group button'
    );
    callTester(fixture, buttons[1], 'onUpdateClicked', expect);
  });

  it('onDeleteClicked should be called', () => {
    const buttons = fixture.debugElement.nativeElement.querySelectorAll(
      '.btn-group button'
    );
    callTester(fixture, buttons[2], 'onDeleteClicked', expect);
  });

  it('the value of id field should be set', () => {
    component.dataRow = new User({
      id: 44,
      name: 'Joe',
      active: true,
      address: 'Bp',
      email: 'joe@gmail.com'
    });
    fixture.detectChanges();

    const inputs = getElements(fixture, 'app-data-cell input');
    fixture.detectChanges();

    fixture.whenStable().then( () => {
      expect((inputs[0] as HTMLInputElement).value).toEqual('44');
      expect((inputs[1] as HTMLInputElement).value).toEqual('Joe');
      expect((inputs[2] as HTMLInputElement).value).toEqual('joe@gmail.com');
      expect((inputs[3] as HTMLInputElement).value).toEqual('Bp');
      expect((inputs[4] as HTMLInputElement).value).toEqual('true');
    });
  });
});
