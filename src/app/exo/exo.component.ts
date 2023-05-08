import { Component } from '@angular/core';

@Component({
  selector: 'app-exo',
  templateUrl: './exo.component.html',
  styleUrls: ['./exo.component.css']
})
export class ExoComponent {
  active:boolean = true
  counter:number = 0
  tabs:Array<string> = []
  colorGreen:string = 'green'
  colorWhite:string = 'white'
  txtButton:string = 'masquer'
  toggleActive(){
    this.active = !this.active
    this.tabs.push('')
    return this.counter++
  }
  toggleTxt(){
  if(this.txtButton == 'masquer'){
    this.txtButton = 'afficher'
  }else{
    this.txtButton = 'masquer'
  } 
  }
}
