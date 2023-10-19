import { EventEmitter } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ActionButtonGroupComponent } from 'src/app/common/action-button-group/action-button-group.component';
import { ActionButtonComponent } from 'src/app/common/action-button/action-button.component';
import { DataCellComponent } from 'src/app/common/data-cell/data-cell.component';
import { DataRowComponent } from 'src/app/common/data-row/data-row.component';
import { IconComponent } from 'src/app/common/icon/icon.component';

import { DataListComponent } from '../app/common/data-list/data-list.component';

import { mockUsers } from './mocks/mockUsers';
import { getElements } from './utils';

describe('DataListComponent', () => {
  let component: DataListComponent;
  let fixture: ComponentFixture<DataListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        DataListComponent,
        IconComponent,
        ActionButtonComponent,
        ActionButtonGroupComponent,
        DataCellComponent,
        DataRowComponent,
      ],
      imports: [
        FormsModule,
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /**
   * - Bejövő adat: `@var dataList {User[]}, @default []`
- Kimenő esemény: `@var selectClick {EventEmitter<boolean>}`
- Kimenő esemény: `@var updateClick {EventEmitter<boolean>}`
- Kimenő esemény: `@var deleteClick {EventEmitter<boolean>}`
- Metódus: `@method onSelectClick {void}, selectClick eseményt hívja a dataRow -val`
- Metódus: `@method onUpdateClick {void}, updateClick eseményt hívja a dataRow -val`
- Metódus: `@method onDeleteClick {void}, deleteClick eseményt hívja a dataRow -val`
   */
  it('dataList should exist', () => {
    expect(typeof component.dataList).not.toEqual('undefined');
  });
  it('the type of dataList should be User[]', () => {
    expect(Array.isArray(component.dataList)).toBeTruthy();
  });

  it('selectClick should exist', () => {
    expect(typeof component.selectClick).not.toEqual('undefined');
  });
  it('the type of selectClick should be EventEmitter', () => {
    expect(component.selectClick instanceof EventEmitter).toBeTruthy();
  });

  it('updateClick should exist', () => {
    expect(typeof component.updateClick).not.toEqual('undefined');
  });
  it('the type of updateClick should be EventEmitter', () => {
    expect(component.updateClick instanceof EventEmitter).toBeTruthy();
  });

  it('deleteClick should exist', () => {
    expect(typeof component.deleteClick).not.toEqual('undefined');
  });
  it('the type of deleteClick should be EventEmitter', () => {
    expect(component.deleteClick instanceof EventEmitter).toBeTruthy();
  });

  it('onSelectClick should exist', () => {
    expect(typeof component.onSelectClick).not.toEqual('undefined');
  });
  it('the type of onSelectClick should be Function', () => {
    expect(component.onSelectClick instanceof Function).toBeTruthy();
  });

  it('onUpdateClick should exist', () => {
    expect(typeof component.onUpdateClick).not.toEqual('undefined');
  });
  it('the type of onUpdateClick should be Function', () => {
    expect(component.onUpdateClick instanceof Function).toBeTruthy();
  });

  it('onDeleteClick should exist', () => {
    expect(typeof component.onDeleteClick).not.toEqual('undefined');
  });
  it('the type of onDeleteClick should be Function', () => {
    expect(component.onDeleteClick instanceof Function).toBeTruthy();
  });

  // View.
  it('app-data-row items shoud be exist', async () => {
    component.dataList = mockUsers;
    fixture.detectChanges();

    const dataRows = getElements(fixture, 'app-data-row');

    expect(dataRows.length).toEqual(25);
  });

  it('ngModel data-binding shoud correct', async () => {
    component.dataList = mockUsers;
    fixture.detectChanges();

    const dataInputs = getElements(fixture, 'app-data-row app-data-cell input');
    fixture.detectChanges();

    fixture.whenStable().then( () => {
      expect((dataInputs[0] as HTMLInputElement).value).toEqual('1');
    });
  });


});
