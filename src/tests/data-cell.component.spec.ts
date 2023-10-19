import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { User } from 'src/app/model/user';

import { DataCellComponent } from '../app/common/data-cell/data-cell.component';
import { getElements } from './utils';

describe('DataCellComponent', () => {
  let component: DataCellComponent;
  let fixture: ComponentFixture<DataCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataCellComponent ],
      imports: [
        FormsModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /**
   * @Input() data: User = new User();
  @Input() key: string = '';
   */

  it('data should exist', () => {
    expect(typeof component.data !== 'undefined').toBeTruthy();
  });

  it('data type should be User', () => {
    expect(component.data instanceof User).toBeTruthy();
  });

  it('key should exist', () => {
    expect(typeof component.key !== 'undefined').toBeTruthy();
  });

  it('HTMLInputElement should exist', () => {
    const inputs = getElements(fixture, 'input');
    expect(inputs.length > 0).toBeTruthy();
  });
});
