import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonModal, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  
  @ViewChild(IonModal) modal: IonModal;

  @Input() generos : string[];
  @Input() directores : string[];
  fGenre: string[]=[];


  constructor(private modalCtrl: ModalController) { }
  
  filtro: string[]=[]
  // d: string
  ngOnInit() {    
  }
  async close(){
    await this.modalCtrl.dismiss()
  }
  async saveTest(){
   //is the problem
        return this.modalCtrl.dismiss(this.fGenre, 'confirm')
        // this.d
      }
TestG(ev){
  if(event['detail']['checked']){
  this.filtro.push(ev)
  console.log(this.filtro)
  this.fGenre = [...new Set(this.filtro)]}
  else{
    for(let i of this.filtro){
      if(i === ev){
        this.filtro.splice(ev , 1)
      }
    }
    console.log(this.filtro)
  this.fGenre = [...new Set(this.filtro)]
  }

  }
}
// TestD(event){
//   console.log(event)
//   this.d = event
// }


// test