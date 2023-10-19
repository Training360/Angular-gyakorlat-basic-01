import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ActionButtonGroupComponent } from 'src/app/common/action-button-group/action-button-group.component';
import { ActionButtonComponent } from 'src/app/common/action-button/action-button.component';
import { DataCellComponent } from 'src/app/common/data-cell/data-cell.component';
import { DataListComponent } from 'src/app/common/data-list/data-list.component';
import { DataRowComponent } from 'src/app/common/data-row/data-row.component';
import { IconComponent } from 'src/app/common/icon/icon.component';
import { AppComponent } from 'src/app/app.component';
import { UserService } from 'src/app/service/user.service';
import { callTester, getElements } from './utils';
import { UserDetailComponent } from 'src/app/user-detail/user-detail.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        UserDetailComponent,
        DataListComponent,
        IconComponent,
        ActionButtonComponent,
        ActionButtonGroupComponent,
        DataCellComponent,
        DataRowComponent,
      ],
      imports: [
        FormsModule,
      ],
      providers: [
        UserService,
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`app-data-list should have 25 rows`, async () => {
    fixture.detectChanges();

    const dataRows = getElements(fixture, 'app-data-row');
    fixture.detectChanges();

    fixture.whenStable().then( () => {
      expect(dataRows.length).toEqual(25);
    });
  });

  it(`the first input of app-user-detail should be set`, async () => {
    fixture.detectChanges();

    const buttons = getElements(fixture, 'app-data-row button');
    buttons[0].click();
    fixture.detectChanges();

    fixture.whenStable().then( () => {
      const rows = getElements(fixture, '.card.user-card p');
      expect(rows[0].textContent).toMatch(/1/);
    });
  });
});
