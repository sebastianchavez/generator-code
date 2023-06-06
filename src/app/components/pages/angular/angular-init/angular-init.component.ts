import { Component, OnInit } from '@angular/core';
// import { ipcRenderer } from 'electron';
declare var electron: any;

@Component({
  selector: 'app-angular-init',
  templateUrl: './angular-init.component.html',
  styleUrls: ['./angular-init.component.scss']
})
export class AngularInitComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  test(){
    electron.ipcRenderer.send("test", {})
  }

}
