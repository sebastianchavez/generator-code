import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-angular-menu',
  templateUrl: './angular-menu.component.html',
  styleUrls: ['./angular-menu.component.scss']
})
export class AngularMenuComponent implements OnInit {

  @Input() selectedMenu: number = 0;
  @Output() selectMenu: EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  clickSelectMenu(menu: number){
    this.selectMenu.emit(menu)
  }

}
