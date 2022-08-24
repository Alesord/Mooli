import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonModal, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  
  @ViewChild(IonModal) modal: IonModal;

  @Input() genero : string[]=[];
  @Input() director: string[]=[];
  fGenre: string[]=[];


  constructor(private modalCtrl: ModalController) { }
  
  g: string[]=[]
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
TestG(g){
  console.log(event['detail']['checked'])
  console.log
  if(event['detail']['checked']){
  this.g.push(g)
  console.log(this.g)
  this.fGenre = [...new Set(this.g)]}
  else{
    this.g.pop()
  this.fGenre = [...new Set(this.g)]}

  }
}
// TestD(event){
//   console.log(event)
//   this.d = event
// }


// test