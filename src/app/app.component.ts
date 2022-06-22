import { Component, OnInit } from '@angular/core';
import { SwitchService } from './services/switch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'dollarcity';

  modalSwitch:boolean=false;
  constructor(private modalSS: SwitchService){

  }
  ngOnInit(){
    this.modalSS.$modal.subscribe((valor)=>{this.modalSwitch = valor})
  }

  openModal(){
    this.modalSwitch = true;
  }
}
