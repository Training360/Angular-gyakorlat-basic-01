import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  /**
   * FELADAT!
   * Hozd létre az alábbi Input tulajdonságot.
   * @var phraseString {string} - Input tulajdonság.
   */


  @Input() users: User[] = [];
  @Output() delUser: EventEmitter<User> = new EventEmitter();
  currentUser: User = new User();

  /**
   * FELADAT!
   * Hozd létre az alábbi változót.
   * @var columnKey {string} - a rendezés oszlopának kulcsa.
   */

  constructor() { }

  ngOnInit(): void {
  }

  onSelectUser(user: User): void {
    this.currentUser = user;
  }

  onDeleteUser(user: User): void {
    this.delUser.emit(user);
    this.currentUser = new User();
  }

  /**
   * FELADAT!
   * Az oszlop feljécekre való kattintás kezelése.
   * Hozz létre egy metódust!
   * Neve: onColumnSelect
   * Működése: az osztály columnKey változóját állítsa be a
   *  kapott kulcsra.
   * @param key {string} - a kapott kulcs.
   * @returns {void}
   */

}
